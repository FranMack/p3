import { NextRequest, NextResponse } from "next/server";


import { envs } from "@/config/envs";
import { mailTemplate } from "../helpers/mail-template";
import { sendEmail } from "./service";
import { contactSchema } from "@/schemas/contact.schema";

// ── Rate limit ────────────────────────────────────────────────────────────────
const LIMIT = 3;
const WINDOW_MS = 60_000;        // 1 minuto
const CLEANUP_MS = 60 * 60_000;  // limpieza cada 60 minutos

const rateMap = new Map<string, { count: number; resetAt: number }>();

setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateMap.entries()) {
    if (now > entry.resetAt) {
      rateMap.delete(ip);
    }
  }
}, CLEANUP_MS);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= LIMIT) return true;

  entry.count++;
  return false;
}
// ─────────────────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // Obtener IP del cliente
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiados intentos. Esperá un momento antes de reintentar." },
      { status: 429 }
    );
  }

  try {
    // Validar datos recibidos con Zod
    const body = await request.json();
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Datos inválidos", details: result.error.errors },
        { status: 400 }
      );
    }
    const { name, phone, email, message} = result.data;

    // Generar cuerpo HTML del email
    const htmlBody = mailTemplate({ name, phone, email, message});

    // Enviar correo
    await sendEmail({
      to: envs.MAILER_RECEPTOR,
      subject: `Consulta de ${name}`,
      htmlBody,
    });

    // Respuesta de éxito
    return NextResponse.json({ message: "Email enviado exitosamente." });
  } catch (error) {
    console.error("Error al enviar el email:", error);

    // Respuesta de error
    return NextResponse.json(
      { error: "Hubo un problema al procesar la solicitud." },
      { status: 400 }
    );
  }
}