'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');

    if (consent === 'granted') {
      updateConsent(true);
    } else if (consent !== 'denied') {
      setShowBanner(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateConsent = (granted: boolean) => {
    const dataLayer = window.dataLayer || (window.dataLayer = []);
    function gtag(..._args: any[]) {
      // eslint-disable-next-line prefer-rest-params
      dataLayer.push(arguments);
    }

    if (granted) {
      gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
      localStorage.setItem('cookie-consent', 'granted');
    } else {
      gtag('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
      localStorage.setItem('cookie-consent', 'denied');
    }

    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.banner}>
      <div>
        <p className={styles.text}>
          Utilizamos cookies para melhorar a sua experiência, analisar o tráfego do site
          e personalizar conteúdo. Ao continuar navegando, você concorda com a nossa{' '}
          <Link href="/politica-de-privacidade" className={styles.link}>
            Política de Privacidade
          </Link>.
        </p>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => updateConsent(false)} className={styles.btnRefuse}>
          Recusar
        </button>
        <button onClick={() => updateConsent(true)} className={styles.btnAccept}>
          Aceitar Cookies
        </button>
      </div>
    </div>
  );
}

