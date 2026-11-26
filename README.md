# Site de casamento · Ingrid & Daniel

Site público (etapas S2 a S4 do plano). Next.js (App Router) com TypeScript. Sem backend ainda: confirmação de presença, painel, banco de dados e e-mails entram nas etapas S5 em diante.

## Como rodar

Requisitos: Node.js 20 ou superior.

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # gera a versão de produção
npm start        # serve a versão de produção
```

## O que já existe

| Página | Rota |
|---|---|
| Início (capa, contagem regressiva, boas-vindas) | `/` |
| Nossa história e galeria | `/nossa-historia` |
| Cerimônia e festa, com mapa | `/cerimonia-e-festa` |
| Manual do convidado | `/manual-do-convidado` |
| Hospedagem e dicas | `/hospedagem` |
| Lista de presentes | `/presentes` |
| Confirmar presença (só a tela, sem envio) | `/confirmar-presenca` |

## Onde editar o conteúdo

Todo o conteúdo está em `src/content/site.ts`. Procure por `[A CONFIRMAR]`: são os dados que os noivos ainda precisam fornecer (endereços, links do Google Maps, hotéis, presentes, textos da história e do manual, contato para dúvidas).

- Botões com link vazio aparecem desativados e passam a funcionar quando o link for preenchido.
- Fotos ficam em `public/images`. Para trocar, mantenha o nome ou ajuste o caminho em `site.ts`.
- Cores e espaçamentos ficam em `src/app/globals.css` (variáveis no início do arquivo).

## Estrutura

```
src/
  app/           páginas (cada pasta é uma rota) e estilos globais
  components/    cabeçalho, rodapé, contagem regressiva, formulário
  content/       conteúdo do site
public/images/   logo, nomes e data, fotos
```

## Próximas etapas

- S5 e S6: banco de dados (Supabase), login do painel e confirmação de presença real.
- S7: e-mails automáticos (Brevo). Exige remetente verificado e, provavelmente, domínio próprio.
- S8 a S10: painel de convidados, importação e exportação e edição de conteúdo.

## Segurança e privacidade

- Nunca versionar `.env.local`, chaves ou dados reais de convidados. Use `.env.example` como modelo.
- O repositório pode ser público, desde que sem dados reais.
