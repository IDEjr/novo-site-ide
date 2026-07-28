import { z } from "zod";

export const ContatoSchema = z.object({
  nome: z.string().trim().min(1, { message: "Por favor, informe seu nome" }),
  email: z
    .string({ error: "Por favor, informe seu e-mail" })
    .min(1, { message: "Por favor, informe seu e-mail" })
    .pipe(z.email({ message: "Por favor, digite um e-mail válido" })),
  assunto: z.string().min(1, { message: "Por favor, informe o assunto" }),
  mensagem: z.string().min(1, { message: "Por favor, informe a mensagem" }),
});

export type ContatoFormData = z.infer<typeof ContatoSchema>;
