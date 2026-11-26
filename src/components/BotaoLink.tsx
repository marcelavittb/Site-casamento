/** Botão que abre um link externo. Se o link ainda não existir, aparece desativado. */
export default function BotaoLink({ href, children, variante = '', pequeno = false }: { href: string; children: React.ReactNode; variante?: string; pequeno?: boolean }) {
  const cls = `btn ${variante} ${pequeno ? 'sm' : ''}`.trim();
  if (!href) {
    return (
      <span className={cls} role="link" aria-disabled="true" title="Link ainda não disponível">
        {children}
      </span>
    );
  }
  return (
    <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
