import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>

        <div className={styles.grafismo}></div>

        <div className={styles.container}>

            <div className={styles.logoContainer}>
                <Link href="/" className={styles.logo} aria-label="Ir para a página inicial">
                    <Image
                        src="/imagens/ide-branco-footer.png"
                        alt="Logo IDE"
                        width={332}
                        height={247}
                    />
                </Link>
            </div>

            <div className={styles.infoContainer}>
                
                <nav className={styles.navegacao}>
                    <h3>Navegação</h3>

                    <ul className={styles.menu}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/quem-somos">Sobre nós</Link></li>
                        <li><Link href="/servicos">Serviços</Link></li>
                        <li><Link href="/portfolio">Portfólio</Link></li>
                    </ul>
                </nav>

                <div className={styles.contato}>
                    <h3>Contato</h3>

                    <ul className={styles.menu}>
                        <li>
                            <Link href="tel:+5551999999999">
                                <Image
                                    src="/imagens/whatsapp.svg"
                                    alt="Ícone do WhatsApp"
                                    width={24}
                                    height={24}                            
                                />
                            <span>(51) 99999-9999</span>    
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/ide_jr">
                                <Image 
                                    src="/imagens/instagram.svg"
                                    alt="Ícone do Instagram"
                                    width={24}
                                    height={24}
                                />
                            <span>ide_jr</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="mailto:contato@idejr.com.br">
                                <Image 
                                    src="/imagens/email.png"
                                    alt="Ícone do Email"
                                    width={24}
                                    height={24}
                                />
                            <span>contato@idejr.com.br</span>
                            </Link>
                        </li>
                    </ul>        
                </div>

                <div className={styles.endereco}>
                    <h3>Endereço</h3>

                    <ul className={styles.menu}>
                        <li><Link href="https://maps.app.goo.gl/qQxNcJeAiyBLgDT36">Av. Bento Gonçalves, 9500 - Agronomia,<br></br>Porto Alegre - RS, 91509-900</Link></li>
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