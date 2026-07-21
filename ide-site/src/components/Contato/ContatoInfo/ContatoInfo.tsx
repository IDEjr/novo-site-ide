import Image from 'next/image';
import Link from 'next/link';
import styles from './ContatoInfo.module.css';

export default function ContatoInfo() {
  return (
    <section className={styles.content}>
        
        <h1>Vamos codar o seu futuro?</h1>

        <div className={styles.cardsContainer}>

            <div className={styles.cardItem}>

                <div className={styles.iconBox}>
                    <Image
                        src="/imagens/locIcon.svg"
                        alt="Ícone de localização"
                        width={62}
                        height={62}                            
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
                        src="/imagens/shareIcon.svg"
                        alt="Ícone de compartilhamento"
                        width={62}
                        height={62}                            
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
                                src="/imagens/linkedinIcon.png"
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
                                src="/imagens/instaIcon.png"
                                alt="Ícone do instagram"
                                width={35}
                                height={35}                            
                            />
                        </Link>
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