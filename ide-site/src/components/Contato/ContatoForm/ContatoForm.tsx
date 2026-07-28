"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContatoSchema, ContatoFormData } from "@/src/schemas/contato";
import { sendEmailAction } from '@/src/actions/enviar-email';
import Image from "next/image";
import styles from "./ContatoForm.module.css";

export default function ContatoForm() {

  const [status, setStatus] = useState<{
    success?: boolean;
    error?: string | null;
  }>({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContatoFormData>({
    resolver: zodResolver(ContatoSchema),
  });

  const onSubmit = async (data: ContatoFormData) => {
    setStatus({});

    const result = await sendEmailAction(data);

    if (result.success) {
      setStatus({ success: true });
      reset();
    } else {
      setStatus({ error: 'Ocorreu um erro ao enviar o formulário.' });
    }
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

        {status.success && (
          <div className={styles.successMessage}>
            <h3 className={styles.successTitle}>
              Mensagem enviada com sucesso!
            </h3>
            <p className={styles.successText}>
              Enviamos uma confirmação para o e-mail preenchido no formulário.
            </p>
          </div>
        )}

        {status.error && (
          <div className={styles.errorMessage}>
            <h3 className={styles.errorTitle}>Erro</h3>
            <p className={styles.errorText}>{status.error}</p>
          </div>
        )}

      </div>
    </section>
  );
}
