'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/blog', label: 'Blog' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

      <button
        type="button"
        className={styles.hamburger}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        aria-controls="main-menu"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul id="main-menu" className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}