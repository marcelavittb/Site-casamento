import type { Metadata } from 'next';
import FormularioRSVP from '@/components/FormularioRSVP';

export const metadata: Metadata = { title: 'Confirmar presença' };

export default function ConfirmarPresenca() {
  return (
    <div className="container narrow">
      <h2>Confirmar presença</h2>
      <FormularioRSVP />
    </div>
  );
}
