"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import styles from "./ContatoForm.module.css";

const ContatoSchema = z.object({
  nome: z.string().trim().min(1, { message: "Por favor, informe seu nome" }),
  email: z
    .string({ error: "Por favor, informe seu e-mail" })
    .min(1, { message: "Por favor, informe seu e-mail" })
    .pipe(z.email({ message: "Por favor, digite um e-mail válido" })),
  assunto: z.string().min(1, { message: "Por favor, informe o assunto" }),
  mensagem: z.string().min(1, { message: "Por favor, informe a mensagem" }),
});

type ContatoFormData = z.infer<typeof ContatoSchema>;

export default function ContatoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContatoFormData>({
    resolver: zodResolver(ContatoSchema),
  });

  const onSubmit = (data: ContatoFormData) => {
    console.log(data);
  };

  return (
    <section className={styles.content}>
      <div className={styles.formContainer}>
        <h2>Envie uma mensagem</h2>
        <p>Nossa equipe de desenvolvedores está pronta para ouvir sua ideia.</p>

        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={styles.inputGroupRow}>
            <div className={styles.inputField}>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                placeholder="Como podemos te chamar?"
                className={errors.nome ? styles.inputError : ""}
                aria-invalid={errors.nome ? "true" : "false"}
                {...register("nome")}
              />
              {errors.nome && (
                <span className={styles.error}>{errors.nome.message}</span>
              )}
            </div>

            <div className={styles.inputField}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Seu melhor e-mail"
                className={errors.email ? styles.inputError : ""}
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email")}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email.message}</span>
              )}
            </div>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="assunto">Assunto</label>
            <input
              type="text"
              id="assunto"
              placeholder="Qual o motivo do contato?"
              className={errors.assunto ? styles.inputError : ""}
              aria-invalid={errors.assunto ? "true" : "false"}
              {...register("assunto")}
            />
            {errors.assunto && (
              <span className={styles.error}>{errors.assunto.message}</span>
            )}
          </div>

          <div className={styles.inputField}>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              rows={6}
              placeholder="Conte-nos um pouco sobre seu projeto ou dúvida..."
              className={errors.mensagem ? styles.inputError : ""}
              aria-invalid={errors.mensagem ? "true" : "false"}
              {...register("mensagem")}
            />
            {errors.mensagem && (
              <span className={styles.error}>{errors.mensagem.message}</span>
            )}
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isSubmitting}
          >
            <Image
              src="/imagens/buttonArrow.png"
              alt=""
              width={24}
              height={24}
            />
            <span>ENVIAR</span>
          </button>
        </form>
      </div>
    </section>
  );
}
