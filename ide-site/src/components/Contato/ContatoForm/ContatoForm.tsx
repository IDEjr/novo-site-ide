import Image from 'next/image';
import styles from './ContatoForm.module.css';

export default function ContatoForm() {
  return (
    <section className={styles.content}>
        <div className={styles.formContainer}>
            <h2>Envie uma mensagem</h2>
            <p>Nossa equipe de desenvolvedores está pronta para ouvir sua ideia.</p>

            <form className={styles.form}>
                <div className={styles.inputGroupRow}>
                    <div className={styles.inputField}>
                        <label htmlFor="nome">Nome</label>
                        <input 
                            type="text" 
                            id="nome" 
                            name="nome" 
                            placeholder="Como podemos te chamar?" 
                            required 
                        />
                    </div>

                    <div className={styles.inputField}>
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Seu melhor e-mail" 
                            required 
                        />
                    </div>
                </div>

                <div className={styles.inputField}>
                    <label htmlFor="assunto">Assunto</label>
                    <input 
                        type="text" 
                        id="assunto" 
                        name="assunto" 
                        placeholder="Qual o motivo do contato?" 
                        required 
                    />
                </div>

                <div className={styles.inputField}>
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea 
                        id="mensagem" 
                        name="mensagem"
                        rows={6}
                        placeholder="Conte-nos um pouco sobre seu projeto ou dúvida..." 
                        required
                    />
                </div>

                <button type="submit" className={styles.submitBtn}>
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