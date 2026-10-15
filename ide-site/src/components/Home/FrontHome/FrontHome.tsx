'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import CtaLink from '@/components/CtaLink/CtaLink';
import styles from './FrontHome.module.css';

const CARD_1_TEXT = 'CRIAR. TESTAR.';
const CARD_2_TEXT = 'ENTREGAR. EVOLUIR.';

function renderMantraTokens(text: string) {
  const tokens: React.ReactNode[] = [];
  let current = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '.') {
      if (current) {
        tokens.push(current);
        current = '';
      }
      tokens.push(
        <span key={`dot-${i}`} className={styles.dot}>
          .
        </span>
      );
    } else {
      current += text[i];
    }
  }

  if (current) {
    tokens.push(current);
  }

  return tokens;
}

export default function FrontHome() {
  const [card1Length, setCard1Length] = useState(0);
  const [card2Length, setCard2Length] = useState(0);
  const [activeCard, setActiveCard] = useState<1 | 2 | null>(1);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let isCancelled = false;
    let timerId: ReturnType<typeof setTimeout>;

    const stepTypeCard1 = (index: number) => {
      if (isCancelled) return;
      setActiveCard(1);
      setCard1Length(index);

      if (index < CARD_1_TEXT.length) {
        const char = CARD_1_TEXT[index];
        const delay = char === '.' ? 170 : char === ' ' ? 70 : 42;
        timerId = setTimeout(() => stepTypeCard1(index + 1), delay);
      } else {
        timerId = setTimeout(() => {
          if (isCancelled) return;
          stepTypeCard2(1);
        }, 220);
      }
    };

    const stepTypeCard2 = (index: number) => {
      if (isCancelled) return;
      setActiveCard(2);
      setCard2Length(index);

      if (index < CARD_2_TEXT.length) {
        const char = CARD_2_TEXT[index];
        const delay = char === '.' ? 170 : char === ' ' ? 70 : 40;
        timerId = setTimeout(() => stepTypeCard2(index + 1), delay);
      } else {
        // Pausa de leitura com o mantra completo na tela
        timerId = setTimeout(() => {
          if (isCancelled) return;
          stepDeleteCard2(CARD_2_TEXT.length - 1);
        }, 3200);
      }
    };

    const stepDeleteCard2 = (index: number) => {
      if (isCancelled) return;
      setActiveCard(2);
      setCard2Length(index);

      if (index > 0) {
        timerId = setTimeout(() => stepDeleteCard2(index - 1), 22);
      } else {
        timerId = setTimeout(() => {
          if (isCancelled) return;
          setActiveCard(1);
          stepDeleteCard1(CARD_1_TEXT.length - 1);
        }, 120);
      }
    };

    const stepDeleteCard1 = (index: number) => {
      if (isCancelled) return;
      setActiveCard(1);
      setCard1Length(index);

      if (index > 0) {
        timerId = setTimeout(() => stepDeleteCard1(index - 1), 22);
      } else {
        // Pausa breve com o título vazio antes de reiniciar o ciclo
        timerId = setTimeout(() => {
          if (isCancelled) return;
          stepTypeCard1(1);
        }, 400);
      }
    };

    timerId = setTimeout(() => {
      stepTypeCard1(1);
    }, 400);

    return () => {
      isCancelled = true;
      clearTimeout(timerId);
    };
  }, []);

  const card1Visible = CARD_1_TEXT.slice(0, card1Length);
  const card2Visible = CARD_2_TEXT.slice(0, card2Length);

  return (
    <section className={styles.content} aria-labelledby="home-hero-title">
      {/* Brilho radial de fundo para profundidade */}
      <div className={styles.glowBackground} aria-hidden="true" />

      {/* Badge Técnico Superior */}
      <div className={styles.badge}>
        <span className={styles.pulseGreen} aria-hidden="true" />
        <span className={styles.badgeText}>EMPRESA JÚNIOR DE INFORMÁTICA // UFRGS</span>
      </div>

      {/* Título Principal com a Animação Typewriter Cíclica */}
      <h1
        id="home-hero-title"
        className={styles.heroTitle}
        aria-label="CRIAR. TESTAR. ENTREGAR. EVOLUIR."
      >
        <div className={styles.typewriterLine}>
          <div className={styles.typewriterWrapper}>
            <span className={styles.ghostText} aria-hidden="true">
              {renderMantraTokens(CARD_1_TEXT)}
            </span>
            <span className={styles.visibleRow}>
              <span>{renderMantraTokens(card1Visible)}</span>
              {activeCard === 1 && <span className={styles.cursor} aria-hidden="true" />}
            </span>
          </div>
        </div>

        <div className={styles.typewriterLine}>
          <div className={styles.typewriterWrapper}>
            <span className={styles.ghostText} aria-hidden="true">
              <span className={styles.gradientText}>{renderMantraTokens(CARD_2_TEXT)}</span>
            </span>
            <span className={styles.visibleRow}>
              <span className={styles.gradientText}>{renderMantraTokens(card2Visible)}</span>
              {activeCard === 2 && <span className={styles.cursor} aria-hidden="true" />}
            </span>
          </div>
        </div>
      </h1>

      {/* Subtítulo / Lead */}
      <p className={styles.lead}>
        A IDE é a empresa júnior de informática da UFRGS. Desenvolvemos soluções digitais
        de alta performance com a energia e a inovação que só o ambiente acadêmico proporciona.
      </p>

      {/* Chamadas para Ação */}
      <div className={styles.actions}>
        <CtaLink
          href="/Contato"
          className={`${styles.button} ${styles.buttonPrimary}`}
          origin="home_front"
        >
          <span>Iniciar um projeto</span>
          <svg
            className={styles.arrowDiagonal}
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </CtaLink>

        <Link
          href="#projetos"
          className={`${styles.button} ${styles.buttonSecondary}`}
        >
          <span>Conhecer nossos projetos</span>
          <svg
            className={styles.arrowDown}
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
