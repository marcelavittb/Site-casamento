import type { Metadata } from 'next';
import Image from 'next/image';
import FotoEmArco from '@/components/FotoEmArco';
import { fotos, galeria, historia } from '@/content/site';

export const metadata: Metadata = { title: 'Nossa história' };

export default function NossaHistoria() {
  return (
    <div className="container">
      <h2>Nossa história</h2>
      <div className="grid2">
        <div className="tl">
          {historia.map((h) => (
            <div key={h.ano}>
              <b>{h.ano} · {h.titulo}</b>
              <p>{h.texto}</p>
            </div>
          ))}
        </div>
        <FotoEmArco foto={fotos.pedido} maxWidth={300} proporcao="4/5" />
      </div>
      <h3 style={{ marginTop: '2rem' }}>Galeria</h3>
      <div className="gal">
        {galeria.map((f, i) => (
          <figure key={f.src} className={i === 0 ? 'w' : undefined}>
            <Image src={f.src} alt={f.alt} width={f.w} height={f.h} sizes="(max-width: 560px) 50vw, 33vw" style={{ objectPosition: f.pos }} />
          </figure>
        ))}
      </div>
    </div>
  );
}
