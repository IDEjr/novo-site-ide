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
                                <svg fill="none" viewBox="0 0 360 362">
                                    <path fill="#a6ef91" fillRule="evenodd" d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z" clipRule="evenodd"/>
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
