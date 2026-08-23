import Image from 'next/image';
import Link from 'next/link';
import styles from './ContatoInfo.module.css';

export default function ContatoInfo() {
  const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_COMERCIAL_URL ??
    "https://wa.me/?text=Olá%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

  return (
    <section className={styles.content}>
        
        <div className={styles.cardsContainer}>

            <div className={styles.cardItem}>

                <div className={styles.iconBox}>
                    <Image
                        src="/imagens/imgContato/locIcon.svg"
                        alt="Ícone de localização"
                        width={56}
                        height={56}                            
                    />
                </div>

                <div className={styles.cardInfos}>
                    <h3>Localização</h3>

                    <Link 
                        href="https://maps.app.goo.gl/qQxNcJeAiyBLgDT36"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mapLink}
                    >
                        <p>Instituto de Informática - UFRGS</p>
                        <p>Av. Bento Gonçalves, 9500 - Porto Alegre, RS</p>
                    </Link>
                </div>
            </div>

            <div className={styles.cardItem}>

                <div className={styles.iconBox}>
                    <Image
                        src="/imagens/imgContato/shareIcon.svg"
                        alt="Ícone de compartilhamento"
                        width={56}
                        height={56}                            
                    />
                </div>

                <div className={styles.cardInfos}>
                    <h3>Conecte-se</h3>

                    <div className={styles.socialLinks}>
                        <Link
                            href="https://www.linkedin.com/company/empresa-j%C3%BAnior-ide"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/imagens/imgContato/linkedinIcon.svg"
                                alt="Ícone do linkedin"
                                width={35}
                                height={35}                            
                            />
                        </Link>
                        
                        <Link
                            href="https://www.instagram.com/ide_jr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/imagens/imgContato/instaIcon.svg"
                                alt="Ícone do instagram"
                                width={35}
                                height={35}                            
                            />
                        </Link>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsappLink}
                            aria-label="Conversar com o comercial da IDE pelo WhatsApp"
                        >
                            <svg viewBox="0 0 32 32" aria-hidden="true">
                                <path d="M27.1 4.8A15.3 15.3 0 0 0 2.8 23.2L1 31l8-1.8A15.3 15.3 0 1 0 27.1 4.8Zm-11.2 24a12.5 12.5 0 0 1-6.4-1.8l-.5-.3-4.8 1.1 1.1-4.7-.3-.5a12.5 12.5 0 1 1 10.9 6.2Zm6.9-9.4c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.3-.4.3-.8.1-2.1-1-3.5-1.8-4.9-4.1-.4-.7.4-.6 1.1-2 .1-.3 0-.5-.1-.7l-1.2-2.8c-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.4 3.9 1.6 4.2c.2.3 2.7 4.1 6.5 5.8 2.4 1 3.4 1.1 4.6.9.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.mapContainer}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.0385513428355!2d-51.120199899999996!3d-30.068604099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95199db911c4a8e3%3A0xb60c528806c82201!2sPr%C3%A9dio%2043424%20-%20Agronomia%2C%20Porto%20Alegre%20-%20RS%2C%2090650-001!5e1!3m2!1spt-BR!2sbr!4v1784563563400!5m2!1spt-BR!2sbr" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
        </div>
    </section>
  );
}
