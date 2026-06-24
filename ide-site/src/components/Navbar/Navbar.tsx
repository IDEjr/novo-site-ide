import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo} aria-label="Ir para a página inicial">
        <Image
          src="/imagens/ide-branco.png"
          alt="IDE"
          width={60}
          height={40}
          priority
        />
      </Link>

      <ul className={styles.menu}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/QuemSomos">Quem Somos</Link></li>
        <li><Link href="/Servicos">Serviços</Link></li>
        <li><Link href="/Blog">Blog</Link></li>
        <li><Link href="/Portfolio">Portfólio</Link></li>
        <li><Link href="/Contato">Contato</Link></li>
      </ul>
    </nav>
  );
}