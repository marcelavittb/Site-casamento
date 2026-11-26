import type { Metadata } from 'next';
import { contatoDuvidas, dresscode, faq } from '@/content/site';

export const metadata: Metadata = { title: 'Manual do convidado' };

export default function Manual() {
  return (
    <div className="container narrow">
      <h2>Manual do convidado</h2>
      <p>Tudo o que você precisa para o dia, pensado para ler no celular.</p>
      <section className="card" aria-labelledby="dress">
        <h3 id="dress">Dress code: {dresscode.titulo.toLowerCase()}</h3>
        <p>{dresscode.texto}</p>
        <ul className="dress" style={{ listStyle: 'none', padding: 0 }}>
          {dresscode.cores.map((c) => (
            <li className="swatch" key={c.hex}>
              <i style={{ background: c.hex }} aria-hidden="true" />
              {c.nome}
            </li>
          ))}
        </ul>
        <span className="note">Cores sugeridas, inspiradas na paleta do casamento.</span>
      </section>
      <div style={{ marginTop: '1.5rem' }}>
        {faq.map((f, i) => (
          <details key={f.p} open={i === 0}>
            <summary>{f.p}</summary>
            <p>{f.r}</p>
          </details>
        ))}
      </div>
      <section className="card" style={{ marginTop: '1.5rem' }}>
        <h3>Dúvidas? Fale com a {contatoDuvidas.nome.toLowerCase()}</h3>
        <p style={{ margin: 0 }}>{contatoDuvidas.contato}</p>
      </section>
    </div>
  );
}
