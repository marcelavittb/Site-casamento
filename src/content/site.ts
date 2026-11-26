/**
 * Conteúdo do site em um único lugar.
 * Itens marcados com [A CONFIRMAR] ainda não foram definidos pelos noivos.
 * Na etapa S10 parte deste conteúdo (presentes, locais, fotos, cores do dress code)
 * passa a vir do painel administrativo.
 */

export const casal = {
  noivos: 'Ingrid & Daniel',
  dataExtenso: '13 de fevereiro de 2028',
  dataCurta: '13 · 02 · 2028',
  dataISO: '2028-02-13T16:00:00-03:00',
  cidade: 'Curitiba, PR',
  lema: 'Um amor que floresce como no bosque: natural, elegante e atemporal.',
  assinatura: 'Para sempre, como os agapornis.',
};

export type Foto = { src: string; alt: string; w: number; h: number; pos?: string };

export const fotos: Record<string, Foto> = {
  abraco: { src: '/images/foto-abraco.jpg', alt: 'Ingrid e Daniel abraçados sob uma árvore', w: 772, h: 1200, pos: '50% 30%' },
  pedido: { src: '/images/foto-pedido.jpg', alt: 'Daniel pedindo Ingrid em casamento em um campo de lavanda', w: 909, h: 1200, pos: '50% 40%' },
  lavanda: { src: '/images/foto-lavanda.jpg', alt: 'O casal no campo de lavanda', w: 1600, h: 1066 },
  moinho: { src: '/images/foto-moinho.jpg', alt: 'Ingrid sorrindo com um moinho ao fundo', w: 919, h: 1200, pos: '50% 25%' },
  riso: { src: '/images/foto-riso.jpg', alt: 'Ingrid e Daniel rindo, com uma carta nas mãos', w: 1600, h: 1063 },
};

export const galeria: Foto[] = [fotos.lavanda, fotos.moinho, fotos.riso, fotos.abraco, fotos.pedido];

export const historia = [
  { ano: '2019', titulo: 'O primeiro encontro', texto: '[A CONFIRMAR] Texto de exemplo: o dia em que nos conhecemos. Os noivos fornecem o texto final.' },
  { ano: '2022', titulo: 'Morando juntos', texto: '[A CONFIRMAR] Texto de exemplo sobre a mudança e as primeiras conquistas.' },
  { ano: '2027', titulo: 'O pedido', texto: '[A CONFIRMAR] Texto de exemplo sobre o pedido de casamento, no campo de lavanda.' },
];

export type Local = {
  titulo: string;
  horario: string;
  nome: string;
  endereco: string;
  observacao: string;
  mapsUrl: string; // [A CONFIRMAR] link do Google Maps
  embedUrl: string; // [A CONFIRMAR] link de incorporação do mapa
};

export const locais: Local[] = [
  {
    titulo: 'Cerimônia',
    horario: '16h',
    nome: 'Espaço Bosque Encantado',
    endereco: 'Endereço completo a confirmar · Curitiba, PR',
    observacao: 'Chegue com 30 minutos de antecedência.',
    mapsUrl: '',
    embedUrl: '',
  },
  {
    titulo: 'Recepção',
    horario: 'Após a cerimônia',
    nome: 'Espaço Bosque Encantado',
    endereco: 'Mesmo local da cerimônia',
    observacao: 'Jantar, música e pista de dança sob as luzes do bosque.',
    mapsUrl: '',
    embedUrl: '',
  },
];

export const dresscode = {
  titulo: 'Traje social',
  texto: 'O evento é ao ar livre, em piso de madeira e grama. Prefira sapatos confortáveis. Evite branco e off-white. [A CONFIRMAR] Texto sugerido, os noivos validam.',
  cores: [
    { nome: 'Marsala', hex: '#6B1E2D' },
    { nome: 'Verde escuro', hex: '#1F3B2E' },
    { nome: 'Azul marinho', hex: '#0F2D4A' },
    { nome: 'Rosé', hex: '#D9A7A1' },
  ],
};

export const faq = [
  { p: 'Data, horário e chegada', r: 'Dia 13 de fevereiro de 2028, cerimônia às 16h. Horário recomendado de chegada: 15h30. [A CONFIRMAR]' },
  { p: 'Estacionamento e transporte', r: 'Informações de estacionamento, transporte por aplicativo e deslocamento serão confirmadas pelos noivos.' },
  { p: 'Crianças e acompanhantes', r: 'O convite indica quem pode ir com você. Na confirmação de presença, aparecem apenas as pessoas vinculadas ao seu convite. [A CONFIRMAR regra sobre crianças]' },
  { p: 'Preciso mudar minha resposta', r: 'Depois de enviada, a resposta não pode ser alterada pelo site. Fale com a cerimonialista, que faz a alteração para você.' },
  { p: 'O evento terá cobertura em caso de chuva?', r: '[A CONFIRMAR] Informação a ser fornecida pelos noivos.' },
];

export const contatoDuvidas = {
  nome: 'Cerimonialista', // [A CONFIRMAR] quem atende as dúvidas: noiva, noivo ou cerimonialista
  contato: 'Contato a confirmar',
};

export const hoteis = [
  { nome: 'Hotel exemplo A', texto: '[A CONFIRMAR] Perto do local. Reserva pelo site do hotel.', url: '' },
  { nome: 'Hotel exemplo B', texto: '[A CONFIRMAR] Centro de Curitiba. Boa opção para grupos.', url: '' },
];

export const dicasDeslocamento = [
  'Transporte por aplicativo: [A CONFIRMAR]',
  'Estacionamento no local: [A CONFIRMAR]',
  'Tempo de deslocamento a partir do centro: [A CONFIRMAR]',
];

export const listaExterna = {
  titulo: 'Nossa lista completa',
  texto: 'Veja todos os presentes em uma plataforma externa.',
  url: '', // [A CONFIRMAR]
};

export const presentes = [
  { nome: 'Jogo de panelas', descricao: 'Exemplo. Descrição breve do presente.', url: '' },
  { nome: 'Aparelho de jantar', descricao: 'Exemplo. Descrição breve do presente.', url: '' },
  { nome: 'Cafeteira', descricao: 'Exemplo. Descrição breve do presente.', url: '' },
];

export const menu = [
  { href: '/nossa-historia', label: 'Nossa história' },
  { href: '/cerimonia-e-festa', label: 'Cerimônia e festa' },
  { href: '/manual-do-convidado', label: 'Manual do convidado' },
  { href: '/hospedagem', label: 'Hospedagem' },
  { href: '/presentes', label: 'Presentes' },
];
