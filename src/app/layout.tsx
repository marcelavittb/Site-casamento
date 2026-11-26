import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'Ingrid & Daniel · 13.02.2028', template: '%s · Ingrid & Daniel' },
  description: 'Site do casamento de Ingrid & Daniel, em 13 de fevereiro de 2028, em Curitiba. Informações, manual do convidado, presentes e confirmação de presença.',
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#4A0E1F' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Pinyon+Script&family=Mulish:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip" href="#conteudo">Ir para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
