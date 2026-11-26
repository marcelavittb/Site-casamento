'use client';
import { useEffect, useState } from 'react';

function partes(alvo: number) {
  const s = Math.max(0, Math.floor((alvo - Date.now()) / 1000));
  return [
    [Math.floor(s / 86400), 'dias'],
    [Math.floor((s % 86400) / 3600), 'horas'],
    [Math.floor((s % 3600) / 60), 'min'],
    [s % 60, 'seg'],
  ] as const;
}

export default function Countdown({ alvoISO }: { alvoISO: string }) {
  const alvo = new Date(alvoISO).getTime();
  const [p, setP] = useState<ReturnType<typeof partes> | null>(null);
  useEffect(() => {
    setP(partes(alvo));
    const id = setInterval(() => setP(partes(alvo)), 1000);
    return () => clearInterval(id);
  }, [alvo]);
  const itens = p ?? ([[0, 'dias'], [0, 'horas'], [0, 'min'], [0, 'seg']] as const);
  return (
    <div className="count" role="timer" aria-label="Contagem regressiva para o casamento">
      {itens.map(([n, l]) => (
        <div key={l}>
          <b>{p ? n : '–'}</b>
          <small>{l}</small>
        </div>
      ))}
    </div>
  );
}
