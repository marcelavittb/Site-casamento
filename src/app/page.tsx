import Image from 'next/image';
import Link from 'next/link';
import Countdown from '@/components/Countdown';
import FotoEmArco from '@/components/FotoEmArco';
import { casal, fotos } from '@/content/site';

export default function Inicio() {
  return (
    <>
      <section className="hero" aria-labelledby="titulo-capa">
        <div className="crest">
          <Image src="/images/logo-monograma.png" alt="Logotipo com as letras I e D e dois agapornis" width={583} height={536} priority />
        </div>
        <h1 id="titulo-capa" className="sr-only">{casal.noivos}, {casal.dataExtenso}</h1>
        <Image className="names" src="/images/nomes-data-escuro.png" alt={`${casal.noivos}, ${casal.dataCurta}`} width={646} height={232} priority />
        <p className="sub">{casal.lema}</p>
        <Countdown alvoISO={casal.dataISO} />
        <Link href="/confirmar-presenca" className="btn gold">Confirmar presença</Link>
      </section>

      <section className="container">
        <div className="grid2">
          <div>
            <h2>Sejam bem-vindos</h2>
            <p>Preparamos este cantinho para reunir tudo o que você precisa saber sobre o nosso dia: onde, quando, como chegar e como nos dizer se estará conosco.</p>
            <p>Será uma celebração ao ar livre, entre árvores e luzes, com as pessoas que mais amamos.</p>
            <p className="script" style={{ fontSize: '2rem', color: 'var(--marsala)', margin: 0 }}>{casal.assinatura}</p>
          </div>
          <FotoEmArco foto={fotos.abraco} />
        </div>
        <div className="tiles">
          <Link className="tile" href="/nossa-historia"><h3>Nossa história</h3><span>Como tudo começou</span></Link>
          <Link className="tile" href="/cerimonia-e-festa"><h3>Cerimônia e festa</h3><span>Horários e mapa</span></Link>
          <Link className="tile" href="/manual-do-convidado"><h3>Manual do convidado</h3><span>Dress code e dúvidas</span></Link>
          <Link className="tile" href="/presentes"><h3>Presentes</h3><span>Sugestões e lista</span></Link>
        </div>
      </section>
    </>
  );
}
