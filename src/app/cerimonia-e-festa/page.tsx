import type { Metadata } from 'next';
import BotaoLink from '@/components/BotaoLink';
import { locais } from '@/content/site';

export const metadata: Metadata = { title: 'Cerimônia e festa' };

export default function CerimoniaEFesta() {
  const principal = locais[0];
  return (
    <div className="container">
      <h2>Cerimônia e festa</h2>
      <p>Cerimônia e recepção acontecem no mesmo local. Se isso mudar, cada endereço aparece em um bloco separado.</p>
      <div className="cols">
        {locais.map((l) => (
          <article className="card" key={l.titulo}>
            <h3>{l.titulo} · {l.horario}</h3>
            <p style={{ marginBottom: '.4rem' }}><strong>{l.nome}</strong></p>
            <p className="note">{l.endereco}</p>
            <p>{l.observacao}</p>
            <BotaoLink href={l.mapsUrl} variante="ghost" pequeno>Abrir no Google Maps</BotaoLink>
          </article>
        ))}
      </div>
      <div className="map">
        {principal.embedUrl ? (
          <iframe src={principal.embedUrl} title={`Mapa: ${principal.nome}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        ) : (
          <div>
            <div className="pin" />
            <p style={{ margin: '.8rem 0 0' }}>O mapa do Google aparece aqui quando o endereço for confirmado.</p>
          </div>
        )}
      </div>
    </div>
  );
}
