'use client';

import Link from 'next/link';
import { sendGTMEvent } from '@next/third-parties/google';

interface CtaLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  origin?: string;
}

export default function CtaLink({ href, className, children, origin = 'geral' }: CtaLinkProps) {
  return (
    <Link 
      href={href} 
      className={className}
      onClick={() => sendGTMEvent({ event: 'service_cta_click', origin })}
    >
      {children}
    </Link>
  );
}

