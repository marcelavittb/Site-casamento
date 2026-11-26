import { casal } from '@/content/site';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="script">{casal.noivos}</span>
      <p style={{ margin: '.3rem auto 0' }}>
        {casal.dataCurta} · {casal.cidade}
      </p>
    </footer>
  );
}
