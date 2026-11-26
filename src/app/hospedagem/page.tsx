import type { Metadata } from 'next';
import BotaoLink from '@/components/BotaoLink';
import { dicasDeslocamento, hoteis } from '@/content/site';

export const metadata: Metadata = { title: 'Hospedagem e dicas' };

export default function Hospedagem() {
  return (
    <div className="container">
      <h2>Hospedagem e dicas</h2>
      <p>Sugestões de hotéis em Curitiba. Nomes e links definitivos virão dos noivos.</p>
      <div className="cols">
        {hoteis.map((h) => (
          <article className="card" key={h.nome}>
            <h3>{h.nome}</h3>
            <p>{h.texto}</p>
            <BotaoLink href={h.url} variante="ghost" pequeno>Ver hotel</BotaoLink>
          </article>
        ))}
        <article className="card">
          <h3>Dicas de deslocamento</h3>
          <ul style={{ paddingLeft: '1.1rem', margin: 0 }}>
            {dicasDeslocamento.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </article>
      </div>
    </div>
  );
}
