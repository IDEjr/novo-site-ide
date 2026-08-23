import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_COMERCIAL_URL ??
    "https://wa.me/?text=Olá%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

  return (
    <footer className={styles.footer}>

        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Link href="/" className={styles.logo} aria-label="Ir para a página inicial">
                    <Image
                        src="/imagens/ide-branco-footer.png"
                        alt="Logo IDE"
                        width={132}
                        height={98}
                    />
                </Link>
            </div>

            <div className={styles.infoContainer}>
                <nav className={styles.navegacao} aria-label="Navegação do rodapé">
                    <h3>Navegação</h3>
                    <ul className={styles.menu}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/QuemSomos">Quem somos</Link></li>
                        <li><Link href="/Servicos">Serviços</Link></li>
                        <li><Link href="/Portfolio">Portfólio</Link></li>
                        <li><Link href="/Contato">Contato</Link></li>
                    </ul>
                </nav>

                <div className={styles.contato}>
                    <h3>Contato</h3>

                    <ul className={styles.menu}>
                        <li>
                            <Link 
                                href="mailto:contato@idejr.com.br"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/imagens/email.svg"
                                    alt=""
                                    width={18}
                                    height={18}
                                />
                                <span>contato@idejr.com.br</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="https://www.instagram.com/ide_jr"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/imagens/instagram.svg"
                                    alt=""
                                    width={18}
                                    height={18}
                                />
                                <span>@ide_jr</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="https://www.linkedin.com/company/empresa-j%C3%BAnior-ide"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/imagens/linkedinBranco.svg"
                                    alt=""
                                    width={18}
                                    height={18}
                                />
                                <span>Empresa Júnior IDE</span>    
                            </Link>
                        </li>
                        <li>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.whatsappLink}
                            >
                                <svg viewBox="0 0 32 32" aria-hidden="true">
                                    <path d="M27.1 4.8A15.3 15.3 0 0 0 2.8 23.2L1 31l8-1.8A15.3 15.3 0 1 0 27.1 4.8Zm-11.2 24a12.5 12.5 0 0 1-6.4-1.8l-.5-.3-4.8 1.1 1.1-4.7-.3-.5a12.5 12.5 0 1 1 10.9 6.2Zm6.9-9.4c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.3-.4.3-.8.1-2.1-1-3.5-1.8-4.9-4.1-.4-.7.4-.6 1.1-2 .1-.3 0-.5-.1-.7l-1.2-2.8c-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.4 3.9 1.6 4.2c.2.3 2.7 4.1 6.5 5.8 2.4 1 3.4 1.1 4.6.9.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5Z" />
                                </svg>
                                <span>WhatsApp comercial</span>
                            </a>
                        </li>
                    </ul>        
                </div>

                <div className={styles.endereco}>
                    <h3>Endereço</h3>

                    <ul className={styles.menu}>
                        <li>
                            <Link 
                                href="https://maps.app.goo.gl/qQxNcJeAiyBLgDT36"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Av. Bento Gonçalves, 9500 - Agronomia,<br></br>Porto Alegre - RS, 91509-900
                            </Link>
                        </li>
                    </ul> 
                </div>
            </div>
        </div>

        <div className={styles.copyright}>
            <p>IDE 2026 © Todos os direitos reservados.</p>
        </div>
    </footer>
  );
}
