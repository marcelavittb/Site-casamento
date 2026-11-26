import Image from 'next/image';
import type { Foto } from '@/content/site';

export default function FotoEmArco({ foto, maxWidth = 340, proporcao = '3/4' }: { foto: Foto; maxWidth?: number; proporcao?: string }) {
  return (
    <Image
      className="arch-photo"
      src={foto.src}
      alt={foto.alt}
      width={foto.w}
      height={foto.h}
      sizes="(max-width: 720px) 90vw, 340px"
      style={{ maxWidth, aspectRatio: proporcao, objectPosition: foto.pos }}
    />
  );
}
