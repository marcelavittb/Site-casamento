import type { Metadata } from 'next';
import BotaoLink from '@/components/BotaoLink';
import { listaExterna, presentes } from '@/content/site';

export const metadata: Metadata = { title: 'Lista de presentes' };

export default function Presentes() {
  return (
    <div className="container">
      <h2>Lista de presentes</h2>
      <p>Sua presença é o nosso maior presente. Se quiser nos presentear, estas são algumas ideias. Os botões abrem o item em outro site.</p>
      <section className="feature" aria-labelledby="lista">
        <div>
          <h3 id="lista">{listaExterna.titulo}</h3>
          <p>{listaExterna.texto}</p>
          <BotaoLink href={listaExterna.url} variante="gold">Abrir lista completa</BotaoLink>
        </div>
        <div className="ph" style={{ aspectRatio: '16/9' }}>Imagem da lista</div>
      </section>
      <div className="gifts">
        {presentes.map((p) => (
          <article className="gift" key={p.nome}>
            <div className="ph" role="img" aria-label={`Foto do presente: ${p.nome}`}>Foto do item</div>
            <div className="t">
              <h3>{p.nome}</h3>
              <p className="note">{p.descricao}</p>
              <BotaoLink href={p.url} pequeno>Ver produto</BotaoLink>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
