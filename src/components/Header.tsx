'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { menu } from '@/content/site';

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const path = usePathname();
  const fechar = () => setAberto(false);
  return (
    <header className="header">
      <div className="header-bar">
        <Link href="/" className="logo-link" aria-label="Página inicial" onClick={fechar}>
          <Image src="/images/logo-selo.png" alt="Ingrid & Daniel" width={187} height={220} priority />
        </Link>
        <button className="burger" aria-expanded={aberto} aria-controls="menu" onClick={() => setAberto(!aberto)}>
          Menu
        </button>
        <nav id="menu" className={aberto ? 'nav open' : 'nav'} aria-label="Principal">
          {menu.map((m) => (
            <Link key={m.href} href={m.href} aria-current={path === m.href ? 'page' : undefined} onClick={fechar}>
              {m.label}
            </Link>
          ))}
          <Link href="/confirmar-presenca" className="cta" aria-current={path === '/confirmar-presenca' ? 'page' : undefined} onClick={fechar}>
            Confirmar presença
          </Link>
        </nav>
      </div>
    </header>
  );
}
