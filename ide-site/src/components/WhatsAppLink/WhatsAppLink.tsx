'use client';

import { sendGTMEvent } from '@next/third-parties/google';
import React from 'react';

interface WhatsAppLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  origin?: string;
  'aria-label'?: string;
}

export default function WhatsAppLink({
  href,
  className,
  children,
  origin = 'geral',
  'aria-label': ariaLabel,
}: WhatsAppLinkProps) {
  const handleClick = () => {
    sendGTMEvent({ 
      event: 'whatsapp_click',
      origin: origin
    });
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

