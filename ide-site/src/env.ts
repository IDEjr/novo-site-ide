import { z } from "zod";

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1, "A chave do Resend é obrigatória"),
  EMAIL_FROM: z.string().min(1, "O e-mail remetente é obrigatório"),
  CONTACT_EMAIL: z.email("O e-mail de contato do .env é inválido"),
});

export const env = envSchema.parse(process.env);