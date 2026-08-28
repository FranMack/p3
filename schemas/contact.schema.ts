import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Campo requerido")
    .min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z
    .string()
    .min(1, "Campo requerido")
    .email("Ingresá un email válido"),
  phone: z.string().optional(),
  message: z
    .string()
    .min(1, "Campo requerido")
    .min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;