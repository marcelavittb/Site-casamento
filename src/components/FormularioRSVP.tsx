'use client';
import { useState } from 'react';

/**
 * Pré-visualização da tela de confirmação (etapa S4).
 * A busca no cadastro, o acompanhante vinculado, a gravação da resposta e o envio
 * de e-mails entram nas etapas S5 a S7. Nada é enviado nem gravado aqui.
 */
export default function FormularioRSVP() {
  const [erro, setErro] = useState('');
  const [previa, setPrevia] = useState(false);

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? '').trim();
    if (!v('nome') || !v('sobrenome')) return setErro('Preencha nome e sobrenome.');
    if (!/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(v('telefone'))) return setErro('Informe um telefone válido, com DDD.');
    if (!/^\S+@\S+\.\S+$/.test(v('email'))) return setErro('Informe um e-mail válido.');
    setErro('');
    setPrevia(true); // TODO(S5): chamar /api/rsvp/identificar
  }

  if (previa) {
    return (
      <div className="card ok" role="status">
        <h3>Pré-visualização</h3>
        <p style={{ margin: '0 auto' }}>Os dados estão no formato correto. A confirmação real será ativada nas próximas etapas do projeto, e nada foi enviado.</p>
      </div>
    );
  }

  return (
    <form className="card" onSubmit={enviar} noValidate>
      <p>Informe seus dados para localizarmos o seu convite. Todos os campos são obrigatórios.</p>
      <div className="row">
        <div><label htmlFor="nome">Nome</label><input id="nome" name="nome" autoComplete="given-name" required /></div>
        <div><label htmlFor="sobrenome">Sobrenome</label><input id="sobrenome" name="sobrenome" autoComplete="family-name" required /></div>
      </div>
      <div className="row">
        <div><label htmlFor="telefone">Telefone</label><input id="telefone" name="telefone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(41) 99999-9999" required /></div>
        <div><label htmlFor="email">E-mail</label><input id="email" name="email" type="email" autoComplete="email" placeholder="voce@email.com" required /></div>
      </div>
      {erro && <p className="err" role="alert">{erro}</p>}
      <p className="note" style={{ marginTop: '1rem' }}>Usamos seus dados apenas para organizar o evento e confirmar o recebimento da sua resposta.</p>
      <button className="btn" type="submit">Buscar convite</button>
    </form>
  );
}
