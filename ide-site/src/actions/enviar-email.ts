"use server";

import { Resend } from "resend";
import { ContatoSchema, ContatoFormData } from "@/src/schemas/contato";
import { env } from "@/src/env";
import { ContactConfirmationEmail } from "../components/EmailTemplates/ContactConfirmation";
import { ContactNotificationEmail } from "../components/EmailTemplates/ContactNotification";

const resend = new Resend(env.RESEND_API_KEY);

export async function sendEmailAction(data: ContatoFormData) {
  const validation = ContatoSchema.safeParse(data);

  if (!validation.success) {
    return { success: false, error: "Dados inválidos." };
  }

  const { nome, email, assunto, mensagem } = validation.data;

  const fromEmail = `IDE <${env.EMAIL_FROM}>`;
  const contactEmail = env.CONTACT_EMAIL;

  try {
    const { error } = await resend.batch.send([
      {
        from: fromEmail,
        to: [email],
        subject: "Recebemos sua mensagem - IDE",
        react: ContactConfirmationEmail({ nome, email, assunto, mensagem }),
      },
      {
        from: fromEmail,
        to: [contactEmail],
        replyTo: email,
        subject: `[Site] Novo contato recebido`,
        react: ContactNotificationEmail({ nome, email, assunto, mensagem }),
      },
    ]);

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      error: null,
    };
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    return {
      success: false,
      error: "Falha ao enviar a mensagem. Tente novamente.",
    };
  }
}
