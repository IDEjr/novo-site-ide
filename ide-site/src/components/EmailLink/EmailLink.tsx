'use client';

import { sendGTMEvent } from '@next/third-parties/google';
import Link from 'next/link';
import React from 'react';

interface EmailLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  origin?: string;
}

export default function EmailLink({ href, className, children, origin = 'geral' }: EmailLinkProps) {
  return (
    <Link 
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => sendGTMEvent({ event: 'email_click', origin })}
    >
      {children}
    </Link>
  );
}

