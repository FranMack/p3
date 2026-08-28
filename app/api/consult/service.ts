import { envs } from "@/config/envs";
import nodemailer, { Transporter } from "nodemailer";

export interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

export interface Attachment {
  filename: string;
  path: string;
  contentType: string;
}

const transporter: Transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: envs.MAILER_EMAIL,
    pass: envs.MAILER_SECRET_KEY,
  },
});

export const sendEmail = async (options: SendMailOptions): Promise<boolean> => {
  const { to, subject, htmlBody, attachments = [] } = options;

  try {
    await transporter.sendMail({
      from: `P3 (consulta) <${envs.MAILER_EMAIL}>`,
      to,
      subject,
      html: htmlBody,
      attachments,
    });

    return true;
  } catch (error) {
    console.error("Error al enviar email:", error);
    return false;
  }
};