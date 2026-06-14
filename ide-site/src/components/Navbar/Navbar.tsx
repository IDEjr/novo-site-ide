import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        IDE
      </div>

      <ul className={styles.menu}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/quem-somos">Quem Somos</Link></li>
        <li><Link href="/servicos">Serviços</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/portfolio">Portfólio</Link></li>
        <li><Link href="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}