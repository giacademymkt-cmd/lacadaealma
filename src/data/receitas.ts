export type Carreira = {
  numero: string;
  instrucao: string;
  total: number;
  nota?: string;
  fotoUrl?: string;
};

export type Parte = {
  nome: string;
  quantidade: number;
  carreiras: Carreira[];
  fechamento: string;
};

export type PassoInstrucao = {
  texto: string;
  fotoUrl?: string;
};

export type Receita = {
  slug: string;
  nome: string;
  categoria: 'animais' | 'videogames' | 'pokemon' | 'disney' | 'ghibli' | 'cartoons' | 'personagens' | 'basicos';
  nivel: 'iniciante' | 'intermediario' | 'avancado';
  tamanhoFinal: string;
  tempoEstimado: string;
  materiais: { item: string; detalhe: string }[];
  abreviacoes: { sigla: string; significado: string }[];
  notas: string[];
  partes: Parte[];
  montagem: (string | PassoInstrucao)[];
  acabamento: (string | PassoInstrucao)[];
  emoji: string;
  corCard: string;
  imagemUrl?: string;
  videoUrl?: string;
};

export const CATEGORIAS = [
  { slug: 'animais',      label: 'Animais',       emoji: '🐱', cor: '#FBE8E8' },
  { slug: 'videogames',   label: 'Videogames',    emoji: '🎮', cor: '#E8EEF5' },
  { slug: 'pokemon',      label: 'Pokémon',       emoji: '⚡', cor: '#FFF8D6' },
  { slug: 'disney',       label: 'Disney',        emoji: '🏰', cor: '#E8F0FB' },
  { slug: 'ghibli',       label: 'Studio Ghibli', emoji: '🌿', cor: '#E3EDE3' },
  { slug: 'cartoons',     label: 'Desenhos',      emoji: '✨', cor: '#F5E8FB' },
  { slug: 'personagens',  label: 'Personagens',   emoji: '🎪', cor: '#FBF0E8' },
  { slug: 'basicos',      label: 'Básicos',       emoji: '🧶', cor: '#F5EDD8' },
] as const;

export const NIVEL_LABEL: Record<string, string> = {
  iniciante: 'Iniciante',
  intermediario: 'Intermediário',
  avancado: 'Avançado',
};

export const NIVEL_COR: Record<string, string> = {
  iniciante: '#6BAF7A',
  intermediario: '#D6A850',
  avancado: '#C97A9B',
};

const ABREVIACOES_PADRAO = [
  { sigla: 'AM',  significado: 'Anel mágico' },
  { sigla: 'pb',  significado: 'Ponto baixo' },
  { sigla: 'aum', significado: 'Aumento — 2 pb no mesmo ponto' },
  { sigla: 'dim', significado: 'Diminuição invisível' },
  { sigla: 'pbx', significado: 'Ponto deslize (slip stitch)' },
  { sigla: 'cor', significado: 'Corrente (chain)' },
  { sigla: 'C',   significado: 'Carreira (round)' },
  { sigla: '[ ]', significado: 'Total de pontos na carreira' },
  { sigla: '×',   significado: 'Repita X vezes' },
];

// ─────────────────────────────────────────────
// RECEITA 1 — KIRBY
// ─────────────────────────────────────────────
const kirby: Receita = {
  slug: 'kirby',
  imagemUrl: '/receitas/kirby/capa.jpg',
  nome: 'Kirby',
  categoria: 'videogames',
  nivel: 'iniciante',
  tamanhoFinal: '~12 cm',
  tempoEstimado: '3–4 horas',
  emoji: '🌸',
  corCard: '#F9D0E0',
  materiais: [
    { item: 'Fio Worsted rosa (cor principal)', detalhe: 'aprox. 50 g' },
    { item: 'Fio Worsted rosa escuro (botas)', detalhe: 'aprox. 10 g' },
    { item: 'Agulha de crochê', detalhe: '5,0 mm' },
    { item: 'Fibra siliconada', detalhe: 'para recheio' },
    { item: 'Feltro preto', detalhe: 'olhos e boca' },
    { item: 'Feltro branco', detalhe: 'brilho dos olhos' },
    { item: 'Feltro azul', detalhe: 'íris dos olhos' },
    { item: 'Feltro rosa claro', detalhe: 'bochechas' },
    { item: 'Cola para tecido (Fabri-tac ou similar)', detalhe: 'para os detalhes de feltro' },
    { item: 'Agulha de tapeceiro', detalhe: 'para costura e acabamento' },
    { item: 'Alfinetes de posicionamento', detalhe: 'opcional' },
  ],
  abreviacoes: ABREVIACOES_PADRAO,
  notas: [
    'Trabalhe sempre em espiral — não feche as carreiras com pbx.',
    'Use marcador de carreira para não perder o início de cada volta.',
    'A diminuição invisível (dim) é feita inserindo a agulha nas alças dianteiras dos próximos 2 pontos juntos.',
    'O rosto é feito com feltro recortado e colado — não são olhos de segurança.',
    'Rechear firmemente para manter o formato esférico característico do Kirby.',
    'Corte o feltro dos olhos em forma de oval, com o brilho branco pequeno em cima.',
  ],
  partes: [
    {
      nome: 'Corpo / Cabeça',
      quantidade: 1,
      carreiras: [
        { numero: 'C1',    instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2',    instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3',    instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4',    instrucao: '*2 pb, aum* repita 6×', total: 24 },
        { numero: 'C5',    instrucao: 'pb em cada ponto', total: 24, nota: '⚠️ Posicionar olhos de feltro entre C5–C6, com 5 pontos de espaço entre eles. Coloque-os agora para marcar a posição (cole após rechear).' },
        { numero: 'C6–C8', instrucao: 'pb em cada ponto', total: 24 },
        { numero: 'C9',    instrucao: '*2 pb, dim* repita 6×', total: 18 },
        { numero: 'C10',   instrucao: '*1 pb, dim* repita 6×', total: 12, nota: '⚠️ Rechear bem antes de continuar. O Kirby deve ficar firme e redondo.' },
        { numero: 'C11',   instrucao: 'dim 6×', total: 6 },
      ],
      fechamento: 'Cortar linha deixando ~15 cm. Passar pelo interior dos 6 pontos restantes com agulha de tapeceiro, puxar para fechar. Dar nó e esconder o fio.',
    },
    {
      nome: 'Braços',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2', instrucao: '*2 pb, aum* repita 2×', total: 8 },
        { numero: 'C3', instrucao: 'pb em cada ponto', total: 8, nota: 'Rechear levemente.' },
      ],
      fechamento: 'Achatar o braço. Fechar costurando 4 pb passando pelos dois lados juntos. Deixar fio longo (~25 cm) para costurar no corpo.',
    },
    {
      nome: 'Botas',
      quantidade: 2,
      carreiras: [
        { numero: 'C1',    instrucao: 'AM, 4 pb  (fio rosa escuro)', total: 4 },
        { numero: 'C2',    instrucao: 'aum em cada ponto', total: 8 },
        { numero: 'C3–C6', instrucao: 'pb em cada ponto', total: 8 },
        { numero: 'C7',    instrucao: 'dim 4×', total: 4, nota: 'Rechear levemente antes de fechar.' },
      ],
      fechamento: 'Cortar linha deixando ~25 cm. Fechar e deixar fio para costurar na base do corpo.',
    },
  ],
  montagem: [
    'Corte os detalhes de feltro: 2 ovals pretos grandes (olhos), 2 ovals brancos pequenos (brilho), 2 ovals azuis médios (íris), 2 círculos rosa (bochechas), 1 curva preta pequena (boca).',
    'Cole o feltro no rosto conforme referência: olhos centralizados na frente (entre C5–C6), bochechas abaixo dos olhos, boca no centro abaixo das bochechas.',
    'Costure as botas na base do corpo, na carreira C9, espaçadas simétricas (abertura virada para baixo).',
    'Posicione os braços nos lados do corpo (carreiras C4–C5), com a curvatura para frente. Fixe com alfinetes antes de costurar.',
    'Costure os braços com ponto escondido ao redor completo.',
  ],
  acabamento: [
    'Verifique todos os fios e esconda com agulha de tapeceiro.',
    'Pressione levemente o Kirby para ajustar o formato esférico.',
    'Ajuste a posição do feltro se necessário — reaplicar cola se soltar.',
  ],
};

// ─────────────────────────────────────────────
// RECEITA 2 — GATO KAWAII
// ─────────────────────────────────────────────
const gatoKawaii: Receita = {
  slug: 'gato-kawaii',
  imagemUrl: '/receitas/gato-kawaii/capa.jpg',
  nome: 'Gato Kawaii',
  categoria: 'animais',
  nivel: 'iniciante',
  tamanhoFinal: '~12 cm',
  tempoEstimado: '4–6 horas',
  emoji: '🐱',
  corCard: '#E8D5F5',
  materiais: [
    { item: 'Fio DK algodão (cor principal)', detalhe: 'aprox. 50 g — branco, creme ou qualquer cor' },
    { item: 'Agulha de crochê', detalhe: '3,0 mm' },
    { item: 'Olhos de segurança', detalhe: '9 mm — 1 par' },
    { item: 'Fibra siliconada', detalhe: 'para recheio' },
    { item: 'Linha de bordado preta', detalhe: 'boca, nariz e bigodes' },
    { item: 'Linha de bordado rosa claro', detalhe: 'bochechas opcionais' },
    { item: 'Agulha de tapeceiro', detalhe: 'para costura e acabamento' },
    { item: 'Marcador de carreira', detalhe: 'essencial' },
    { item: 'Alfinetes de posicionamento', detalhe: 'para montagem' },
  ],
  abreviacoes: ABREVIACOES_PADRAO,
  notas: [
    'Trabalhe sempre em espiral — não feche as carreiras com pbx.',
    'Use marcador de carreira para não perder o início de cada volta.',
    'A diminuição invisível (dim) é feita inserindo a agulha apenas nas alças dianteiras dos próximos 2 pontos juntos.',
    'Encaixe os olhos de segurança ANTES de rechear e ANTES de diminuir muito — você não consegue ajustá-los depois.',
    'Rechear firmemente a cabeça para que as orelhas fiquem em pé.',
    'As orelhas NÃO são recheadas — são costuradas planas na cabeça.',
    'Feche os braços e pernas achatados para facilitar a costura.',
  ],
  partes: [
    {
      nome: 'Cabeça',
      quantidade: 1,
      carreiras: [
        { numero: 'C1',    instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2',    instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3',    instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4',    instrucao: '*2 pb, aum* repita 6×', total: 24 },
        { numero: 'C5',    instrucao: '*3 pb, aum* repita 6×', total: 30 },
        { numero: 'C6',    instrucao: 'pb em cada ponto', total: 30, nota: '⚠️ Encaixar os olhos de segurança entre C6–C7, com 6 pontos de espaço entre eles. Faça agora — não é possível ajustar depois.' },
        { numero: 'C7–C9', instrucao: 'pb em cada ponto', total: 30 },
        { numero: 'C10',   instrucao: '*3 pb, dim* repita 6×', total: 24 },
        { numero: 'C11',   instrucao: '*2 pb, dim* repita 6×', total: 18, nota: '⚠️ Rechear bem a cabeça antes de continuar. Use fibra suficiente para que fique firme.' },
        { numero: 'C12',   instrucao: '*1 pb, dim* repita 6×', total: 12 },
        { numero: 'C13',   instrucao: 'dim 6×', total: 6 },
      ],
      fechamento: 'Cortar linha (~15 cm). Fechar passando pelo interior dos 6 pontos com agulha de tapeceiro. Dar nó e esconder o fio.',
    },
    {
      nome: 'Corpo',
      quantidade: 1,
      carreiras: [
        { numero: 'C1',     instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2',     instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3',     instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4',     instrucao: '*2 pb, aum* repita 6×', total: 24 },
        { numero: 'C5',     instrucao: '*3 pb, aum* repita 6×', total: 30 },
        { numero: 'C6–C10', instrucao: 'pb em cada ponto', total: 30 },
        { numero: 'C11',    instrucao: '*3 pb, dim* repita 6×', total: 24 },
        { numero: 'C12',    instrucao: '*2 pb, dim* repita 6×', total: 18, nota: '⚠️ Rechear bem o corpo antes de continuar.' },
        { numero: 'C13',    instrucao: '*1 pb, dim* repita 6×', total: 12 },
        { numero: 'C14',    instrucao: 'dim 6×', total: 6 },
      ],
      fechamento: 'Cortar linha (~15 cm). Fechar passando pelo interior dos 6 pontos. Dar nó e esconder o fio.',
    },
    {
      nome: 'Braços',
      quantidade: 2,
      carreiras: [
        { numero: 'C1',    instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2',    instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3–C7', instrucao: 'pb em cada ponto', total: 12, nota: 'Rechear levemente — não muito firme.' },
      ],
      fechamento: 'Achatar o braço (juntar as bordas). Fechar costurando 6 pb passando pelos dois lados juntos. Deixar fio longo (~25 cm) para costurar no corpo.',
    },
    {
      nome: 'Pernas (com pé)',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb  [pé]', total: 6 },
        { numero: 'C2', instrucao: 'aum em cada ponto  [pé]', total: 12 },
        { numero: 'C3', instrucao: '*1 pb, aum* repita 6×  [pé]', total: 18 },
        { numero: 'C4', instrucao: 'pb em cada ponto  [pé]', total: 18 },
        { numero: 'C5', instrucao: '*1 pb, dim* repita 6×  [início da perna]', total: 12 },
        { numero: 'C6–C10', instrucao: 'pb em cada ponto  [perna]', total: 12, nota: 'Rechear levemente antes de fechar.' },
      ],
      fechamento: 'Achatar a perna. Fechar costurando 6 pb passando pelos dois lados juntos. Deixar fio longo (~25 cm) para costurar no corpo.',
    },
    {
      nome: 'Orelhas',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 4 pb', total: 4 },
        { numero: 'C2', instrucao: '*1 pb, aum* repita 2×', total: 6 },
        { numero: 'C3', instrucao: '*2 pb, aum* repita 2×', total: 8 },
        { numero: 'C4', instrucao: '*3 pb, aum* repita 2×', total: 10 },
      ],
      fechamento: 'Cortar linha deixando ~25 cm. NÃO rechear. Costurar diretamente na cabeça (ver montagem).',
    },
    {
      nome: 'Rabo',
      quantidade: 1,
      carreiras: [
        { numero: 'C1',    instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2–C3', instrucao: 'pb em cada ponto', total: 6 },
        { numero: 'C4',    instrucao: '*2 pb, aum* repita 2×', total: 8 },
        { numero: 'C5–C6', instrucao: 'pb em cada ponto', total: 8 },
        { numero: 'C7',    instrucao: '*3 pb, aum* repita 2×', total: 10 },
        { numero: 'C8',    instrucao: 'pb em cada ponto', total: 10 },
      ],
      fechamento: 'Rechear levemente. Cortar linha deixando ~25 cm para costurar na traseira do corpo.',
    },
  ],
  montagem: [
    'Posicione a cabeça sobre o corpo (parte superior, C14 do corpo). Alinhe o rosto ao centro frontal.',
    'Fixe com alfinetes e costure ao redor completo com ponto escondido.',
    'Costure as orelhas no topo da cabeça (C1–C2 do topo), inclinadas levemente para os lados. As orelhas devem ficar em cima da cabeça, não nos lados.',
    'Costure os braços nos lados do corpo (C4–C5 do corpo), com a curvatura para frente. Espaçamento simétrico.',
    'Costure as pernas na parte inferior do corpo (C12–C13), espaçadas simétricas. O pé deve apontar para frente.',
    'Costure o rabo na traseira do corpo (C8–C10), levemente acima do centro.',
    'Confirme simetria: veja de frente, de cima e de trás.',
  ],
  acabamento: [
    'Bordar o nariz: 3–4 pontos horizontais com linha preta no centro da face (entre os olhos, 2 carreiras abaixo).',
    'Bordar a boca: curva suave com linha preta, abaixo do nariz.',
    'Bordar os bigodes: 3 linhas horizontais de cada lado (opcional).',
    'Bordar bochechas opcionais: círculos suaves com linha rosa acima dos cantos da boca.',
    'Esconder todos os fios com agulha de tapeceiro.',
  ],
};

// ─────────────────────────────────────────────
// RECEITA 3 — COELHO KAWAII
// ─────────────────────────────────────────────
const coelhoKawaii: Receita = {
  slug: 'coelho-kawaii',
  imagemUrl: '/receitas/coelho-kawaii/capa.jpg',
  nome: 'Coelho Kawaii',
  categoria: 'animais',
  nivel: 'iniciante',
  tamanhoFinal: '~15 cm',
  tempoEstimado: '5–7 horas',
  emoji: '🐰',
  corCard: '#D6ECF5',
  materiais: [
    { item: 'Fio DK algodão (cor principal)', detalhe: 'aprox. 60 g — branco, creme ou rosa' },
    { item: 'Fio DK algodão (cor interna da orelha)', detalhe: 'aprox. 5 g — rosa claro (opcional)' },
    { item: 'Agulha de crochê', detalhe: '3,0 mm' },
    { item: 'Olhos de segurança', detalhe: '12 mm — 1 par' },
    { item: 'Fibra siliconada', detalhe: 'para recheio' },
    { item: 'Linha de bordado rosa claro', detalhe: 'nariz e bochechas' },
    { item: 'Linha de bordado preta', detalhe: 'boca (opcional)' },
    { item: 'Agulha de tapeceiro', detalhe: 'para costura e acabamento' },
    { item: 'Marcador de carreira', detalhe: 'essencial' },
    { item: 'Alfinetes de posicionamento', detalhe: 'para montagem' },
  ],
  abreviacoes: [
    ...ABREVIACOES_PADRAO,
    { sigla: 'pa', significado: 'Ponto alto (double crochet)' },
    { sigla: 'pipoca', significado: '5 pa no mesmo ponto, fechar com pbx — cria relevo' },
  ],
  notas: [
    'Trabalhe sempre em espiral — não feche as carreiras com pbx.',
    'Use marcador de carreira.',
    'A diminuição invisível (dim) é inserir a agulha nas alças dianteiras dos próximos 2 pontos juntos.',
    'Os olhos de 12 mm são maiores — encaixe ANTES de rechear e com a peça ainda aberta.',
    'As orelhas longas são dobradas ao meio antes de costurar — cria formato de orelha de coelho.',
    'A cauda é feita com ponto pipoca: 5 pa no mesmo ponto, fechar com pbx. Cortar e costurar como pompom.',
    'Rechear firme a cabeça para que as orelhas fiquem eretas.',
  ],
  partes: [
    {
      nome: 'Cabeça',
      quantidade: 1,
      carreiras: [
        { numero: 'C1',     instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2',     instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3',     instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4',     instrucao: '*2 pb, aum* repita 6×', total: 24 },
        { numero: 'C5',     instrucao: '*3 pb, aum* repita 6×', total: 30 },
        { numero: 'C6',     instrucao: '*4 pb, aum* repita 6×', total: 36 },
        { numero: 'C7',     instrucao: 'pb em cada ponto', total: 36, nota: '⚠️ Encaixar os olhos de segurança entre C7–C8, com 7 pontos de espaço entre eles. Faça agora — ajuste não é possível depois.' },
        { numero: 'C8–C10', instrucao: 'pb em cada ponto', total: 36 },
        { numero: 'C11',    instrucao: '*4 pb, dim* repita 6×', total: 30 },
        { numero: 'C12',    instrucao: '*3 pb, dim* repita 6×', total: 24 },
        { numero: 'C13',    instrucao: '*2 pb, dim* repita 6×', total: 18, nota: '⚠️ Rechear bem a cabeça antes de continuar. Use fibra suficiente — uma cabeça firme mantém as orelhas eretas.' },
        { numero: 'C14',    instrucao: '*1 pb, dim* repita 6×', total: 12 },
        { numero: 'C15',    instrucao: 'dim 6×', total: 6 },
      ],
      fechamento: 'Cortar linha (~15 cm). Fechar passando pelo interior dos 6 pontos. Dar nó e esconder.',
    },
    {
      nome: 'Corpo',
      quantidade: 1,
      carreiras: [
        { numero: 'C1',     instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2',     instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3',     instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4',     instrucao: '*2 pb, aum* repita 6×', total: 24 },
        { numero: 'C5',     instrucao: '*3 pb, aum* repita 6×', total: 30 },
        { numero: 'C6–C11', instrucao: 'pb em cada ponto', total: 30 },
        { numero: 'C12',    instrucao: '*3 pb, dim* repita 6×', total: 24 },
        { numero: 'C13',    instrucao: '*2 pb, dim* repita 6×', total: 18, nota: '⚠️ Rechear bem antes de continuar.' },
        { numero: 'C14',    instrucao: '*1 pb, dim* repita 6×', total: 12 },
        { numero: 'C15',    instrucao: 'dim 6×', total: 6 },
      ],
      fechamento: 'Cortar linha (~15 cm). Fechar passando pelos 6 pontos. Dar nó e esconder.',
    },
    {
      nome: 'Braços',
      quantidade: 2,
      carreiras: [
        { numero: 'C1',    instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2',    instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3–C8', instrucao: 'pb em cada ponto', total: 12, nota: 'Rechear levemente.' },
      ],
      fechamento: 'Achatar. Fechar costurando 6 pb pelos dois lados juntos. Deixar fio longo para costurar.',
    },
    {
      nome: 'Pernas',
      quantidade: 2,
      carreiras: [
        { numero: 'C1',     instrucao: 'AM, 6 pb  [pé]', total: 6 },
        { numero: 'C2',     instrucao: 'aum em cada ponto  [pé]', total: 12 },
        { numero: 'C3',     instrucao: '*1 pb, aum* repita 6×  [pé]', total: 18 },
        { numero: 'C4',     instrucao: 'pb em cada ponto  [pé]', total: 18 },
        { numero: 'C5',     instrucao: '*1 pb, dim* repita 6×  [início da perna]', total: 12 },
        { numero: 'C6–C11', instrucao: 'pb em cada ponto  [perna]', total: 12, nota: 'Rechear levemente antes de fechar.' },
      ],
      fechamento: 'Achatar. Fechar costurando 6 pb pelos dois lados juntos. Deixar fio longo para costurar.',
    },
    {
      nome: 'Orelhas',
      quantidade: 2,
      carreiras: [
        { numero: 'C1',     instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2',     instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3',     instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4',     instrucao: '*2 pb, aum* repita 6×', total: 24 },
        { numero: 'C5–C12', instrucao: 'pb em cada ponto', total: 24, nota: 'Para orelha bicolor: trocar para cor rosa nas C5–C12, depois voltar para cor principal.' },
        { numero: 'C13',    instrucao: '*2 pb, dim* repita 6×', total: 18 },
        { numero: 'C14',    instrucao: '*1 pb, dim* repita 6×', total: 12 },
        { numero: 'C15',    instrucao: 'dim 6×', total: 6 },
      ],
      fechamento: 'NÃO rechear. Dobrar a orelha ao meio (comprido). Fechar a borda aberta costurando com pbx pelos dois lados juntos. Deixar fio longo (~30 cm) para costurar na cabeça.',
    },
    {
      nome: 'Cauda (Ponto Pipoca)',
      quantidade: 1,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2', instrucao: 'No mesmo ponto: 5 pa — fechar com pbx (= 1 ponto pipoca). Fazer 5 pontos pipoca no total.', total: 5, nota: 'O ponto pipoca cria relevo. Puxar a linha com firmeza ao fechar cada pipoca.' },
      ],
      fechamento: 'Cortar linha longa (~20 cm). Costurar na traseira do corpo.',
    },
  ],
  montagem: [
    'Posicione a cabeça sobre o corpo (topo). Alinhe o rosto ao centro frontal.',
    'Fixe com alfinetes e costure ao redor completo.',
    'Posicione as orelhas no topo da cabeça (C1–C3 do topo), levemente para trás. As orelhas devem apontar para cima e levemente para fora.',
    'Fixe com alfinetes e costure cada orelha ao redor da base.',
    'Costure os braços nos lados do corpo (C4–C5), com a curvatura para baixo.',
    'Costure as pernas na parte inferior do corpo (C13–C14), espaçadas simétricas com o pé apontando para frente.',
    'Costure a cauda na traseira do corpo (C8–C9).',
    'Verifique simetria de todos os lados.',
  ],
  acabamento: [
    'Bordar o nariz: triângulo invertido pequeno com linha rosa, entre os olhos.',
    'Bordar a boca: curva suave com linha rosa ou preta, abaixo do nariz.',
    'Bordar bochechas: círculos suaves com linha rosa em cada lado do rosto.',
    'Esconder todos os fios com agulha de tapeceiro.',
    'Ajustar posição das orelhas se necessário (levemente umedecer e modelar).',
  ],
};

// ─────────────────────────────────────────────
// RECEITA 4 — PIKACHU
// ─────────────────────────────────────────────
const pikachu: Receita = {
  slug: 'pikachu',
  imagemUrl: '/receitas/pikachu/capa.jpg',
  nome: 'Pikachu',
  categoria: 'pokemon',
  nivel: 'intermediario',
  tamanhoFinal: '~10 cm',
  tempoEstimado: '4–5 horas',
  emoji: '⚡',
  corCard: '#FFF8D6',
  materiais: [
    { item: 'Fio Amigurumi amarelo (cor principal)', detalhe: 'aprox. 40 g' },
    { item: 'Fio Amigurumi preto (pontas das orelhas)', detalhe: 'aprox. 5 g' },
    { item: 'Fio Amigurumi marrom (detalhes do rabo e costas)', detalhe: 'aprox. 10 g' },
    { item: 'Fio Amigurumi vermelho (bochechas)', detalhe: 'aprox. 5 g' },
    { item: 'Agulha de crochê', detalhe: '3,0 mm' },
    { item: 'Olhos de segurança pretos', detalhe: '9 mm — 1 par' },
    { item: 'Fibra siliconada', detalhe: 'para recheio' },
    { item: 'Agulha de tapeceiro', detalhe: 'para costura e acabamento' },
    { item: 'Linha de bordado preta', detalhe: 'para boca e nariz' },
  ],
  abreviacoes: ABREVIACOES_PADRAO,
  notas: [
    'Trabalhe em espiral contínua, usando marcador de pontos.',
    'Mude de cor no último passo do ponto anterior para transições limpas.',
    'A cauda em formato de relâmpago é feita em crochê plano (carreiras de ida e volta) e depois costurada.',
    'As bochechas vermelhas são costuradas na face, logo abaixo dos olhos de segurança.',
  ],
  partes: [
    {
      nome: 'Corpo e Cabeça (Peça única)',
      quantidade: 1,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2', instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3', instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4', instrucao: '*2 pb, aum* repita 6×', total: 24 },
        { numero: 'C5', instrucao: '*3 pb, aum* repita 6×', total: 30 },
        { numero: 'C6–C10', instrucao: 'pb em cada ponto', total: 30, nota: '⚠️ Encaixar olhos de segurança entre C7-C8 com 5 pb de distância entre eles.' },
        { numero: 'C11', instrucao: '*3 pb, dim* repita 6×', total: 24 },
        { numero: 'C12', instrucao: '*2 pb, dim* repita 6×', total: 18, nota: '⚠️ Transição do pescoço. Comece a rechear a cabeça firmemente.' },
        { numero: 'C13', instrucao: '*2 pb, aum* repita 6× (início do corpo)', total: 24 },
        { numero: 'C14–C18', instrucao: 'pb em cada ponto', total: 24 },
        { numero: 'C19', instrucao: '*2 pb, dim* repita 6×', total: 18 },
        { numero: 'C20', instrucao: '*1 pb, dim* repita 6×', total: 12, nota: '⚠️ Rechear o corpo com fibra siliconada.' },
        { numero: 'C21', instrucao: 'dim 6×', total: 6 },
      ],
      fechamento: 'Cortar fio, fechar o anel invertido com agulha de tapeceiro e esconder a ponta.',
    },
    {
      nome: 'Orelhas',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 4 pb  (com fio preto)', total: 4 },
        { numero: 'C2', instrucao: '*1 pb, aum* repita 2× (preto)', total: 6 },
        { numero: 'C3', instrucao: '*2 pb, aum* repita 2× (preto)', total: 8 },
        { numero: 'C4', instrucao: '*3 pb, aum* repita 2× (mudar para amarelo)', total: 10 },
        { numero: 'C5–C8', instrucao: 'pb em cada ponto (amarelo)', total: 10 },
      ],
      fechamento: 'NÃO rechear. Achatar a base e deixar fio longo para costura.',
    },
    {
      nome: 'Braços',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb (amarelo)', total: 6 },
        { numero: 'C2–C5', instrucao: 'pb em cada ponto', total: 6 },
      ],
      fechamento: 'NÃO rechear. Achatar a abertura e costurar com pb. Deixar fio para fixar.',
    },
    {
      nome: 'Pés',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb (amarelo)', total: 6 },
        { numero: 'C2', instrucao: '*2 pb, aum* repita 2×', total: 8 },
        { numero: 'C3–C5', instrucao: 'pb em cada ponto', total: 8 },
      ],
      fechamento: 'Rechear muito levemente. Achatar a abertura e deixar fio para costurar.',
    },
    {
      nome: 'Bochechas',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb (vermelho)', total: 6 },
        { numero: 'C2', instrucao: 'aum em cada ponto', total: 12 },
      ],
      fechamento: 'Fechar com pbx no primeiro ponto, deixar fio longo para costurar.',
    },
    {
      nome: 'Cauda (Crochê plano - ida e volta)',
      quantidade: 1,
      carreiras: [
        { numero: 'C1', instrucao: 'Fazer 5 correntinhas. Começar na 2ª corr a partir da agulha: 4 pb  (com fio marrom)', total: 4 },
        { numero: 'C2–C3', instrucao: '1 corr, virar, 4 pb', total: 4 },
        { numero: 'C4', instrucao: '1 corr, virar, 4 pb. Fazer mais 4 correntinhas e virar (com fio amarelo)', total: 8 },
        { numero: 'C5', instrucao: 'Começar na 2ª corr: 7 pb no total, virar', total: 7 },
        { numero: 'C6–C7', instrucao: '1 corr, virar, 7 pb', total: 7 },
        { numero: 'C8', instrucao: '1 corr, virar, 3 pb (deixar os outros sem trabalhar)', total: 3 },
        { numero: 'C9–C10', instrucao: '1 corr, virar, 3 pb', total: 3 },
        { numero: 'C11', instrucao: '1 corr, virar, 3 pb. Fazer mais 5 correntinhas e virar', total: 8 },
        { numero: 'C12–C14', instrucao: 'Começar na 2ª corr: 7 pb, virar', total: 7 },
        { numero: 'C15', instrucao: '1 corr, virar, dim, 3 pb, dim', total: 5 },
      ],
      fechamento: 'Cortar e arrematar. Deixar fio longo amarelo para costurar.',
    },
  ],
  montagem: [
    'Costure as orelhas no topo da cabeça, inclinadas levemente para fora, entre C2 e C4.',
    'Costure os braços nos lados do corpo, na altura da carreira C14.',
    'Costure as pernas (pés) na parte inferior do corpo, direcionados para frente.',
    'Costure as bochechas vermelhas nas laterais do rosto, logo abaixo dos olhos de segurança.',
    'Borde duas listras marrons horizontais nas costas do Pikachu usando ponto reto.',
    'Costure a cauda na parte traseira inferior. Para dar firmeza, faça pontos extras fixando a parte amarela nas costas.',
  ],
  acabamento: [
    'Borde um pequeno nariz preto em formato de triângulo invertido entre os olhos.',
    'Borde a boca em formato de "w" suave logo abaixo do nariz.',
    'Esconder todos os fios restantes por dentro do amigurumi.',
  ],
};

// ─────────────────────────────────────────────
// RECEITA 5 — TOTORO
// ─────────────────────────────────────────────
const totoro: Receita = {
  slug: 'totoro',
  imagemUrl: '/receitas/totoro/capa.jpg',
  nome: 'Totoro',
  categoria: 'ghibli',
  nivel: 'intermediario',
  tamanhoFinal: '~18 cm',
  tempoEstimado: '5–6 horas',
  emoji: '🌿',
  corCard: '#E3EDE3',
  materiais: [
    { item: 'Fio Amigurumi cinza acinzentado (cor principal)', detalhe: 'aprox. 60 g' },
    { item: 'Fio Amigurumi branco (barriga)', detalhe: 'aprox. 15 g' },
    { item: 'Fio Amigurumi verde (folha da cabeça)', detalhe: 'aprox. 5 g' },
    { item: 'Fio Amigurumi preto (detalhes da face)', detalhe: 'aprox. 5 g' },
    { item: 'Agulha de crochê', detalhe: '3,5 mm' },
    { item: 'Olhos de segurança pretos', detalhe: '8 mm — 1 par' },
    { item: 'Fibra siliconada', detalhe: 'para recheio' },
    { item: 'Agulha de tapeceiro', detalhe: 'para costura e acabamento' },
  ],
  abreviacoes: ABREVIACOES_PADRAO,
  notas: [
    'O corpo e a cabeça são uma única peça oval larga.',
    'A barriga é um círculo de crochê plano costurado no corpo, com marcas cinzas bordadas em formato de flecha.',
    'A folhinha verde é um detalhe icônico que vai no topo da cabeça.',
  ],
  partes: [
    {
      nome: 'Corpo e Cabeça (Peça única)',
      quantidade: 1,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2', instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3', instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4', instrucao: '*2 pb, aum* repita 6×', total: 24 },
        { numero: 'C5', instrucao: '*3 pb, aum* repita 6×', total: 30 },
        { numero: 'C6', instrucao: '*4 pb, aum* repita 6×', total: 36 },
        { numero: 'C7', instrucao: '*5 pb, aum* repita 6×', total: 42 },
        { numero: 'C8–C18', instrucao: 'pb em cada ponto', total: 42, nota: '⚠️ Colocar olhos de segurança entre C10-C11 com 8 pb de distância.' },
        { numero: 'C19', instrucao: '*5 pb, dim* repita 6×', total: 36 },
        { numero: 'C20', instrucao: '*4 pb, dim* repita 6×', total: 30 },
        { numero: 'C21', instrucao: '*3 pb, dim* repita 6×', total: 24, nota: '⚠️ Começar a rechear bem firme.' },
        { numero: 'C22', instrucao: '*2 pb, dim* repita 6×', total: 18 },
        { numero: 'C23', instrucao: '*1 pb, dim* repita 6×', total: 12, nota: '⚠️ Completar o recheio.' },
        { numero: 'C24', instrucao: 'dim 6×', total: 6 },
      ],
      fechamento: 'Cortar o fio e fechar o anel invertido com agulha de tapeceiro.',
    },
    {
      nome: 'Orelhas',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 4 pb (cinza)', total: 4 },
        { numero: 'C2', instrucao: '*1 pb, aum* repita 2×', total: 6 },
        { numero: 'C3', instrucao: '*2 pb, aum* repita 2×', total: 8 },
        { numero: 'C4', instrucao: '*3 pb, aum* repita 2×', total: 10 },
        { numero: 'C5–C6', instrucao: 'pb em cada ponto', total: 10 },
      ],
      fechamento: 'NÃO rechear. Achatar a abertura e deixar fio longo para costurar.',
    },
    {
      nome: 'Braços (Nadadeiras)',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb (cinza)', total: 6 },
        { numero: 'C2', instrucao: '*2 pb, aum* repita 2×', total: 8 },
        { numero: 'C3–C7', instrucao: 'pb em cada ponto', total: 8 },
      ],
      fechamento: 'Rechear muito de leve. Achatar a abertura e deixar fio para costurar.',
    },
    {
      nome: 'Barriga (Fio branco)',
      quantidade: 1,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2', instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3', instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4', instrucao: '*2 pb, aum* repita 6×', total: 24 },
        { numero: 'C5', instrucao: '*3 pb, aum* repita 6×', total: 30 },
      ],
      fechamento: 'Fechar com pbx no primeiro ponto. Deixar fio longo para costurar.',
    },
    {
      nome: 'Folha da Cabeça (Fio verde)',
      quantidade: 1,
      carreiras: [
        { numero: 'C1', instrucao: 'Fazer 6 correntinhas. Voltando na 2ª corr a partir da agulha: 1 pbx, 1 pb, 1 pm (ponto médio alto), 1 pb, 1 pbx', total: 5 },
      ],
      fechamento: 'Cortar e deixar fio longo para costura.',
    },
  ],
  montagem: [
    'Borde os 3 detalhes em forma de V (flechas) na barriga branca usando fio cinza, antes de costurá-la no corpo.',
    'Costure o círculo da barriga branca no centro inferior do corpo do Totoro (aproximadamente entre as carreiras C12 e C20).',
    'Costure as orelhas simetricamente no topo da cabeça (carreiras C3-C4 do início do anel mágico).',
    'Costure os braços nos lados do corpo, logo acima da barriga branca.',
    'Costure a folhinha verde exatamente no centro do topo da cabeça.',
  ],
  acabamento: [
    'Borde o nariz preto com 2-3 pontos horizontais exatamente entre os olhos.',
    'Borde pequenos bigodes nas laterais da bochecha (opcional, 2 linhas finas pretas de cada lado).',
    'Remate todos os fios por dentro do corpo.',
  ],
};

// ─────────────────────────────────────────────
// RECEITA 6 — BASE FUNKO POP
// ─────────────────────────────────────────────
const baseFunkoPop: Receita = {
  slug: 'base-funko-pop',
  imagemUrl: '/receitas/base-funko-pop/capa.jpg',
  nome: 'Base Funko Pop',
  categoria: 'basicos',
  nivel: 'intermediario',
  tamanhoFinal: '~28 cm',
  tempoEstimado: '6–8 horas',
  emoji: '👤',
  corCard: '#F5EDD8',
  materiais: [
    { item: 'Fio Amigurumi cor pele (de sua preferência)', detalhe: 'aprox. 80 g' },
    { item: 'Agulha de crochê', detalhe: '3,5 mm' },
    { item: 'Fibra siliconada', detalhe: 'para recheio' },
    { item: 'Agulha de tapeceiro', detalhe: 'para costura' },
    { item: 'Olhos de segurança pretos', detalhe: '12 mm — 1 par' },
  ],
  abreviacoes: ABREVIACOES_PADRAO,
  notas: [
    'Esta é uma base corporal para criar seus próprios personagens no estilo Funko Pop, caracterizada pela cabeça muito maior que o corpo.',
    'A cabeça possui um formato ligeiramente quadrado que é reforçado no recheio.',
    'Todos os pontos são feitos em ponto baixo simples, trabalhando em espiral.',
  ],
  partes: [
    {
      nome: 'Pernas',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 8 pb', total: 8 },
        { numero: 'C2', instrucao: 'aum em cada ponto', total: 16 },
        { numero: 'C3', instrucao: '*1 pb, aum* repita 8×', total: 24 },
        { numero: 'C4', instrucao: 'BLO — pb em cada ponto', total: 24, nota: 'Esta alça traseira cria o contorno solado da perna.' },
        { numero: 'C5', instrucao: '*2 pb, dim* repita 6×', total: 18 },
        { numero: 'C6', instrucao: '*1 pb, dim* repita 6×', total: 12 },
        { numero: 'C7–C17', instrucao: 'pb em cada ponto', total: 12 },
      ],
      fechamento: 'Rechear a perna. Cortar o fio deixando sobra para costurar no corpo.',
    },
    {
      nome: 'Braços',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2', instrucao: '*1 pb, aum* repita 3×', total: 9 },
        { numero: 'C3–C16', instrucao: 'pb em cada ponto', total: 9 },
      ],
      fechamento: 'Rechear de forma leve nos braços. Achatar e deixar fio para costurar.',
    },
    {
      nome: 'Corpo',
      quantidade: 1,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2', instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3', instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4', instrucao: '*2 pb, aum* repita 6×', total: 24 },
        { numero: 'C5', instrucao: '*3 pb, aum* repita 6×', total: 30 },
        { numero: 'C6–C15', instrucao: 'pb em cada ponto', total: 30 },
        { numero: 'C16', instrucao: '*3 pb, dim* repita 6×', total: 24 },
        { numero: 'C17', instrucao: '*2 pb, dim* repita 6×', total: 18 },
        { numero: 'C18', instrucao: '*1 pb, dim* repita 6× (início pescoço)', total: 12 },
        { numero: 'C19–C20', instrucao: 'pb em cada ponto (pescoço)', total: 12 },
      ],
      fechamento: 'Rechear o corpo muito bem. Cortar deixando fio.',
    },
    {
      nome: 'Cabeça',
      quantidade: 1,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2', instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3', instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4', instrucao: '*2 pb, aum* repita 6×', total: 24 },
        { numero: 'C5', instrucao: '*3 pb, aum* repita 6×', total: 30 },
        { numero: 'C6', instrucao: '*4 pb, aum* repita 6×', total: 36 },
        { numero: 'C7', instrucao: '*5 pb, aum* repita 6×', total: 42 },
        { numero: 'C8–C18', instrucao: 'pb em cada ponto', total: 42, nota: '⚠️ Encaixar olhos de segurança de 12mm entre C11-C12 com 9 pb de distância.' },
        { numero: 'C19', instrucao: '*5 pb, dim* repita 6×', total: 36 },
        { numero: 'C20', instrucao: '*4 pb, dim* repita 6×', total: 30 },
        { numero: 'C21', instrucao: '*3 pb, dim* repita 6×', total: 24 },
        { numero: 'C22', instrucao: '*2 pb, dim* repita 6×', total: 18, nota: '⚠️ Rechear muito bem a cabeça.' },
        { numero: 'C23', instrucao: '*1 pb, dim* repita 6×', total: 12 },
        { numero: 'C24', instrucao: 'dim 6×', total: 6 },
      ],
      fechamento: 'Fechar o anel com agulha de tapeceiro.',
    },
  ],
  montagem: [
    'Costure as duas pernas na base inferior do corpo (carreiras C3-C5 do corpo). Garanta que a base dos pés fique plana para o Funko conseguir ficar em pé.',
    'Costure a cabeça no pescoço do corpo. Reforce com pontos extras para que a cabeça pesada não fique mole.',
    'Costure os braços nas laterais do corpo, 1 carreira abaixo do pescoço.',
    'Dica: use esta base para adicionar roupas, cabelos de crochê ou feltro, e criar seu personagem favorito!',
  ],
  acabamento: [
    'Verifique se a cabeça e os membros estão bem fixados.',
    'Arremate e esconda todas as sobras de fio.',
  ],
};

// ─────────────────────────────────────────────
// RECEITA 7 — BOB ESPONJA
// ─────────────────────────────────────────────
const bobEsponja: Receita = {
  slug: 'bob-esponja',
  imagemUrl: '/receitas/bob-esponja/capa.jpg',
  nome: 'Bob Esponja',
  categoria: 'cartoons',
  nivel: 'intermediario',
  tamanhoFinal: '~15 cm',
  tempoEstimado: '5–6 horas',
  emoji: '🧽',
  corCard: '#FFF2B2',
  materiais: [
    { item: 'Fio Amigurumi amarelo (cor do corpo)', detalhe: 'aprox. 30 g' },
    { item: 'Fio Amigurumi branco (camisa)', detalhe: 'aprox. 10 g' },
    { item: 'Fio Amigurumi marrom (calça)', detalhe: 'aprox. 15 g' },
    { item: 'Fio Amigurumi preto (sapatos e cílios)', detalhe: 'aprox. 5 g' },
    { item: 'Fio Amigurumi vermelho (gravata)', detalhe: 'aprox. 5 g' },
    { item: 'Agulha de crochê', detalhe: '3,0 mm' },
    { item: 'Olhos de segurança pretos', detalhe: '8 mm — 1 par (opcional, ou feltro)' },
    { item: 'Fibra siliconada', detalhe: 'para recheio' },
    { item: 'Agulha de tapeceiro', detalhe: 'para costura' },
  ],
  abreviacoes: ABREVIACOES_PADRAO,
  notas: [
    'O corpo é trabalhado em formato cilíndrico contínuo e depois achatado no recheio para dar o formato de cubo/retângulo.',
    'A transição de cores do amarelo para o branco e depois marrom define a roupa do Bob Esponja.',
    'Os olhos são círculos brancos de crochê costurados no rosto com olhos de segurança no centro.',
  ],
  partes: [
    {
      nome: 'Corpo (Amarelo, Branco e Marrom)',
      quantidade: 1,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb (amarelo)', total: 6 },
        { numero: 'C2', instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3', instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4', instrucao: '*2 pb, aum* repita 6×', total: 24 },
        { numero: 'C5', instrucao: '*3 pb, aum* repita 6×', total: 30 },
        { numero: 'C6', instrucao: '*4 pb, aum* repita 6×', total: 36 },
        { numero: 'C7', instrucao: '*5 pb, aum* repita 6×', total: 42 },
        { numero: 'C8–C22', instrucao: 'pb em cada ponto (amarelo)', total: 42, nota: 'Esta é a cabeça amarela do Bob Esponja.' },
        { numero: 'C23–C26', instrucao: 'pb em cada ponto (mudar para branco)', total: 42, nota: 'Esta é a camisa branca.' },
        { numero: 'C27–C31', instrucao: 'pb em cada ponto (mudar para marrom)', total: 42, nota: 'Esta é a calça marrom.' },
        { numero: 'C32', instrucao: '*5 pb, dim* repita 6×', total: 36 },
        { numero: 'C33', instrucao: '*4 pb, dim* repita 6×', total: 30 },
        { numero: 'C34', instrucao: '*3 pb, dim* repita 6×', total: 24, nota: '⚠️ Rechear achatando a peça para dar o formato de caixa.' },
        { numero: 'C35', instrucao: '*2 pb, dim* repita 6×', total: 18 },
        { numero: 'C36', instrucao: '*1 pb, dim* repita 6×', total: 12 },
        { numero: 'C37', instrucao: 'dim 6×', total: 6 },
      ],
      fechamento: 'Fechar o anel com agulha de tapeceiro e esconder o fio.',
    },
    {
      nome: 'Olhos (Fio branco)',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2', instrucao: 'aum em cada ponto', total: 12 },
      ],
      fechamento: 'Fechar com pbx no primeiro ponto. Inserir o olho de segurança no centro deste círculo e posicioná-lo no corpo antes de fixar.',
    },
    {
      nome: 'Nariz (Amarelo)',
      quantidade: 1,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 4 pb', total: 4 },
        { numero: 'C2–C4', instrucao: 'pb em cada ponto', total: 4 },
      ],
      fechamento: 'NÃO rechear. Deixar fio para costura.',
    },
    {
      nome: 'Braços',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb (amarelo)', total: 6 },
        { numero: 'C2–C7', instrucao: 'pb em cada ponto', total: 6 },
        { numero: 'C8–C9', instrucao: 'pb em cada ponto (mudar para branco - manga)', total: 6 },
      ],
      fechamento: 'Achatar a ponta branca e deixar fio para costurar.',
    },
    {
      nome: 'Pernas',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb (com fio preto para o sapato)', total: 6 },
        { numero: 'C2', instrucao: '*1 pb, aum* repita 3× (preto)', total: 9 },
        { numero: 'C3', instrucao: 'pb em cada ponto (preto)', total: 9 },
        { numero: 'C4–C6', instrucao: 'pb em cada ponto (mudar para branco - meia)', total: 9 },
        { numero: 'C7–C11', instrucao: 'pb em cada ponto (mudar para amarelo)', total: 9 },
      ],
      fechamento: 'Rechear muito levemente. Achatar a abertura amarela e deixar fio.',
    },
  ],
  montagem: [
    'Costure as pernas na base marrom do corpo, mantendo-as paralelas.',
    'Costure os círculos brancos dos olhos no rosto (no bloco amarelo, por volta da carreira C12-C15). Prenda os pinos de segurança por dentro antes de encher, ou use olhos de segurança que perfuram o crochê.',
    'Costure o nariz amarelo longo exatamente no meio dos dois olhos.',
    'Costure os braços nas laterais do corpo, alinhados com a carreira branca (camisa).',
    'Borde a boca: uma curva grande preta abaixo do nariz, adicionando dois dentes quadrados de feltro branco ou bordados.',
    'Borde a gravata vermelha na parte central da camisa branca (fazendo uma forma simples de losango com fio vermelho).',
  ],
  acabamento: [
    'Borde 3 cílios pretos finos acima de cada olho.',
    'Borde bochechas com pontos vermelhos ou rosa claro e pinte algumas sardas com marrom claro nas bochechas.',
    'Arremate e esconda todos os fios.',
  ],
};

// ─────────────────────────────────────────────
// RECEITA 8 — STITCH
// ─────────────────────────────────────────────
const stitch: Receita = {
  slug: 'stitch',
  imagemUrl: '/receitas/stitch/capa.jpg',
  nome: 'Stitch',
  categoria: 'disney',
  nivel: 'intermediario',
  tamanhoFinal: '~12 cm',
  tempoEstimado: '5–6 horas',
  emoji: '👽',
  corCard: '#E8F0FB',
  materiais: [
    { item: 'Fio Amigurumi azul escuro (cor principal)', detalhe: 'aprox. 50 g' },
    { item: 'Fio Amigurumi azul claro (barriga e detalhes dos olhos)', detalhe: 'aprox. 15 g' },
    { item: 'Fio Amigurumi rosa (parte interna da orelha)', detalhe: 'aprox. 10 g' },
    { item: 'Fio Amigurumi preto (nariz e boca)', detalhe: 'aprox. 5 g' },
    { item: 'Agulha de crochê', detalhe: '3,0 mm' },
    { item: 'Olhos de segurança pretos', detalhe: '12 mm — 1 par' },
    { item: 'Fibra siliconada', detalhe: 'para recheio' },
    { item: 'Agulha de tapeceiro', detalhe: 'para costura' },
  ],
  abreviacoes: ABREVIACOES_PADRAO,
  notas: [
    'Trabalhe em espiral contínua.',
    'As orelhas do Stitch são grandes, pontiagudas e caídas nas laterais. O interior rosa pode ser feito em feltro colado ou crochê.',
    'Os olhos têm uma mancha azul clara ao redor, que pode ser recortada de feltro azul claro ou feita em crochê plano.',
  ],
  partes: [
    {
      nome: 'Cabeça',
      quantidade: 1,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb (azul escuro)', total: 6 },
        { numero: 'C2', instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3', instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4', instrucao: '*2 pb, aum* repita 6×', total: 24 },
        { numero: 'C5', instrucao: '*3 pb, aum* repita 6×', total: 30 },
        { numero: 'C6', instrucao: '*4 pb, aum* repita 6×', total: 36 },
        { numero: 'C7–C12', instrucao: 'pb em cada ponto', total: 36, nota: '⚠️ Encaixar os olhos de segurança entre C9-C10 com 8 pb de espaço.' },
        { numero: 'C13', instrucao: '*4 pb, dim* repita 6×', total: 30 },
        { numero: 'C14', instrucao: '*3 pb, dim* repita 6×', total: 24 },
        { numero: 'C15', instrucao: '*2 pb, dim* repita 6×', total: 18, nota: '⚠️ Rechear a cabeça firmemente.' },
        { numero: 'C16', instrucao: '*1 pb, dim* repita 6×', total: 12 },
        { numero: 'C17', instrucao: 'dim 6×', total: 6 },
      ],
      fechamento: 'Fechar o anel e esconder o fio.',
    },
    {
      nome: 'Corpo',
      quantidade: 1,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb (azul escuro)', total: 6 },
        { numero: 'C2', instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3', instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4', instrucao: '*2 pb, aum* repita 6×', total: 24 },
        { numero: 'C5', instrucao: '*3 pb, aum* repita 6×', total: 30 },
        { numero: 'C6–C11', instrucao: 'pb em cada ponto', total: 30 },
        { numero: 'C12', instrucao: '*3 pb, dim* repita 6×', total: 24 },
        { numero: 'C13', instrucao: '*2 pb, dim* repita 6×', total: 18, nota: '⚠️ Rechear o corpo.' },
        { numero: 'C14', instrucao: '*1 pb, dim* repita 6×', total: 12 },
        { numero: 'C15', instrucao: 'dim 6×', total: 6 },
      ],
      fechamento: 'Fechar o anel com tapeceiro.',
    },
    {
      nome: 'Orelhas',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb (azul escuro)', total: 6 },
        { numero: 'C2', instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3', instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4', instrucao: '*2 pb, aum* repita 6×', total: 24 },
        { numero: 'C5–C10', instrucao: 'pb em cada ponto', total: 24 },
        { numero: 'C11', instrucao: '*2 pb, dim* repita 6×', total: 18 },
        { numero: 'C12', instrucao: '*1 pb, dim* repita 6×', total: 12 },
        { numero: 'C13', instrucao: 'pb em cada ponto', total: 12 },
      ],
      fechamento: 'NÃO rechear. Achatar a orelha. Deixar fio longo para costurar.',
    },
    {
      nome: 'Braços',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb (azul escuro)', total: 6 },
        { numero: 'C2', instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3–C7', instrucao: 'pb em cada ponto', total: 12 },
        { numero: 'C8', instrucao: '*2 pb, dim* repita 3×', total: 9 },
      ],
      fechamento: 'Rechear de leve na ponta inferior. Achatar a abertura e deixar fio.',
    },
    {
      nome: 'Pernas',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb (azul escuro)', total: 6 },
        { numero: 'C2', instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3', instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4–C7', instrucao: 'pb em cada ponto', total: 18 },
        { numero: 'C8', instrucao: '*1 pb, dim* repita 6×', total: 12 },
      ],
      fechamento: 'Rechear. Achatar a abertura e deixar fio para costurar.',
    },
  ],
  montagem: [
    'Costure a cabeça no corpo (na C15 do corpo). Alinhe bem.',
    'Costure feltro rosa recortado no formato oval na parte interna de cada orelha (azul escuro) ou borde a parte interna.',
    'Dobre a base das orelhas levemente e costure-as nas laterais da cabeça (carreira C6-C8). As orelhas do Stitch devem ficar apontadas para o lado/baixo.',
    'Costure os braços nas laterais do corpo, na altura do pescoço.',
    'Costure as pernas na parte inferior do corpo de forma que ele fique sentado.',
    'Borde os detalhes dos olhos: se preferir, use um pedaço pequeno de feltro azul claro como fundo para os olhos de segurança antes de travá-los.',
  ],
  acabamento: [
    'Borde o nariz grande do Stitch com fio azul claro ou preto no centro da face.',
    'Esconda os fios e remate.',
  ],
};

// ─────────────────────────────────────────────
// RECEITA 9 — CAPIVARA COM MOCHILA
// ─────────────────────────────────────────────
const capivaraMochila: Receita = {
  slug: 'capivara-mochila',
  imagemUrl: '/receitas/capivara-mochila/capa.jpg',
  nome: 'Capivara com Mochila',
  categoria: 'animais',
  nivel: 'intermediario',
  tamanhoFinal: '~14 cm',
  tempoEstimado: '5–6 horas',
  emoji: '🦦',
  corCard: '#FBE8E8',
  materiais: [
    { item: 'Fio Amigurumi marrom médio (cor principal)', detalhe: 'aprox. 50 g' },
    { item: 'Fio Amigurumi marrom escuro (focinho e orelhas)', detalhe: 'aprox. 10 g' },
    { item: 'Fio Amigurumi verde musgo (mochila)', detalhe: 'aprox. 10 g' },
    { item: 'Agulha de crochê', detalhe: '3,0 mm' },
    { item: 'Olhos de segurança pretos', detalhe: '8 mm — 1 par' },
    { item: 'Fibra siliconada', detalhe: 'para recheio' },
    { item: 'Agulha de tapeceiro', detalhe: 'para costurar' },
  ],
  abreviacoes: ABREVIACOES_PADRAO,
  notas: [
    'O corpo e a cabeça são contínuos para simplificar a costura e dar sustentação à mochila.',
    'O focinho da capivara é costurado separadamente e possui formato quadrado característico.',
    'A mochilinha verde é costurada nas costas da capivara com alcinhas de correntes.',
  ],
  partes: [
    {
      nome: 'Corpo e Cabeça (Peça única)',
      quantidade: 1,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb (marrom médio)', total: 6 },
        { numero: 'C2', instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3', instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4', instrucao: '*2 pb, aum* repita 6×', total: 24 },
        { numero: 'C5', instrucao: '*3 pb, aum* repita 6×', total: 30 },
        { numero: 'C6–C14', instrucao: 'pb em cada ponto', total: 30, nota: '⚠️ Encaixar olhos de segurança entre C8-C9 com 6 pb de distância.' },
        { numero: 'C15', instrucao: '*3 pb, dim* repita 6×', total: 24 },
        { numero: 'C16', instrucao: '*2 pb, dim* repita 6×', total: 18, nota: '⚠️ Rechear a cabeça. Transição do pescoço.' },
        { numero: 'C17', instrucao: '*2 pb, aum* repita 6× (início do corpo)', total: 24 },
        { numero: 'C18', instrucao: '*3 pb, aum* repita 6×', total: 30 },
        { numero: 'C19', instrucao: '*4 pb, aum* repita 6×', total: 36 },
        { numero: 'C20–C27', instrucao: 'pb em cada ponto', total: 36 },
        { numero: 'C28', instrucao: '*4 pb, dim* repita 6×', total: 30 },
        { numero: 'C29', instrucao: '*3 pb, dim* repita 6×', total: 24, nota: '⚠️ Rechear o corpo firmemente.' },
        { numero: 'C30', instrucao: '*2 pb, dim* repita 6×', total: 18 },
        { numero: 'C31', instrucao: '*1 pb, dim* repita 6×', total: 12 },
        { numero: 'C32', instrucao: 'dim 6×', total: 6 },
      ],
      fechamento: 'Fechar o anel invertido com agulha de tapeceiro.',
    },
    {
      nome: 'Focinho (Marrom escuro)',
      quantidade: 1,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2', instrucao: 'aum em cada ponto', total: 12 },
        { numero: 'C3', instrucao: '*1 pb, aum* repita 6×', total: 18 },
        { numero: 'C4–C5', instrucao: 'pb em cada ponto', total: 18 },
      ],
      fechamento: 'Deixar fio longo para costura. Rechear muito levemente ao costurar na cabeça.',
    },
    {
      nome: 'Orelhas (Marrom escuro)',
      quantidade: 2,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2', instrucao: 'pb em cada ponto', total: 6 },
      ],
      fechamento: 'Achatar e deixar fio para costurar.',
    },
    {
      nome: 'Patas (Fazer 4 — marrom médio)',
      quantidade: 4,
      carreiras: [
        { numero: 'C1', instrucao: 'AM, 6 pb', total: 6 },
        { numero: 'C2–C5', instrucao: 'pb em cada ponto', total: 6 },
      ],
      fechamento: 'Rechear muito levemente. Achatar a abertura e deixar fio para costurar.',
    },
    {
      nome: 'Mochila (Fio verde musgo)',
      quantidade: 1,
      carreiras: [
        { numero: 'C1', instrucao: 'Fazer 8 corr, voltar na 2ª corr fazendo 7 pb', total: 7 },
        { numero: 'C2–C7', instrucao: '1 corr, virar, 7 pb', total: 7 },
      ],
      fechamento: 'Cortar. Fazer duas correntes com 12 corr para formar as alças e prender nos cantos superiores e inferiores da mochila.',
    },
  ],
  montagem: [
    'Costure o focinho marrom escuro no centro inferior da face (abaixo dos olhos de segurança, entre C10-C14). Recheie levemente antes de fechar a costura.',
    'Costure as orelhas no topo da cabeça (carreira C4-C5), inclinadas para trás.',
    'Costure as 4 patas na base do corpo da capivara. Ela deve ficar na posição de quatro patas (quadrúpede). Alinhe bem para dar equilíbrio.',
    'Costure a mochila verde nas costas da capivara, passando as alças verdes pelas patas dianteiras e prendendo sob o corpo.',
  ],
  acabamento: [
    'Borde as narinas com fio preto na frente do focinho (dois pequenos traços verticais).',
    'Arremate todos os fios por dentro do corpo da capivara.',
  ],
};

// ─────────────────────────────────────────────
// EXPORTAÇÕES
// ─────────────────────────────────────────────


const raposaChubby: Receita = {
  "slug": "raposa-chubby",
  "nome": "Raposa Chubby",
  "categoria": "animais",
  "nivel": "intermediario",
  "tamanhoFinal": "~12 cm",
  "tempoEstimado": "3–4 horas",
  "emoji": "🦊",
  "corCard": "#F5E1D3",
  "imagemUrl": "/receitas/raposa-chubby/capa.jpg",
  "videoUrl": "https://www.youtube.com/embed/UM7Evk8nhPQ",
  "materiais": [
    { "item": "Fio Amigurumi laranja (cor principal)", "detalhe": "aprox. 40 g" },
    { "item": "Fio Amigurumi branco (peito e cauda)", "detalhe": "aprox. 15 g" },
    { "item": "Fio Amigurumi preto (orelhas e patas)", "detalhe": "aprox. 10 g" },
    { "item": "Agulha de crochê", "detalhe": "3,0 mm" },
    { "item": "Olhos de segurança pretos", "detalhe": "8 mm — 1 par" },
    { "item": "Fibra siliconada", "detalhe": "para recheio" },
    { "item": "Agulha de tapeceiro", "detalhe": "para costura" }
  ],
  "abreviacoes": [
    { "sigla": "AM", "significado": "Anel mágico" },
    { "sigla": "pb", "significado": "Ponto baixo" },
    { "sigla": "aum", "significado": "Aumento — 2 pb no mesmo ponto" },
    { "sigla": "dim", "significado": "Diminuição" }
  ],
  "notas": [
    "Trabalhe em espiral contínua.",
    "Troque de cor no último ponto da carreira anterior para transições invisíveis."
  ],
  "partes": [
    {
      "nome": "Cabeça e Corpo (Peça Única)",
      "quantidade": 1,
      "carreiras": [
        { "numero": "C1", "instrucao": "Com fio laranja: AM, 6 pb", "total": 6 },
        { "numero": "C2", "instrucao": "aum em cada ponto", "total": 12 },
        { "numero": "C3", "instrucao": "*1 pb, aum* repita 6×", "total": 18 },
        { "numero": "C4", "instrucao": "*2 pb, aum* repita 6×", "total": 24 },
        { "numero": "C5", "instrucao": "*3 pb, aum* repita 6×", "total": 30 },
        { "numero": "C6", "instrucao": "*4 pb, aum* repita 6×", "total": 36 },
        { "numero": "C7–C13", "instrucao": "pb em cada ponto", "total": 36, "nota": "Posicionar olhos entre C10 e C11 com 7 pontos de distância." },
        { "numero": "C14", "instrucao": "*4 pb, dim* repita 6×", "total": 30 },
        { "numero": "C15", "instrucao": "*3 pb, dim* repita 6×", "total": 24 },
        { "numero": "C16", "instrucao": "*2 pb, dim* repita 6× (início do corpo)", "total": 18 },
        { "numero": "C17", "instrucao": "Mude para fio branco na frente para o peito: 6 pb laranja, 6 pb branco, 6 pb laranja", "total": 18 },
        { "numero": "C18", "instrucao": "6 pb laranja, aum, 4 pb branco, aum, 6 pb laranja", "total": 20 },
        { "numero": "C19", "instrucao": "pb em cada ponto mantendo as cores estabelecidas", "total": 20 },
        { "numero": "C20", "instrucao": "Com fio laranja apenas: *3 pb, dim* repita 4×", "total": 16 },
        { "numero": "C21", "instrucao": "*2 pb, dim* repita 4×", "total": 12, "nota": "Rechear firmemente o corpo e a cabeça." },
        { "numero": "C22", "instrucao": "dim 6×", "total": 6 }
      ],
      "fechamento": "Corte o fio, feche o anel mágico invertido e esconda a ponta."
    },
    {
      "nome": "Orelhas",
      "quantidade": 2,
      "carreiras": [
        { "numero": "C1", "instrucao": "Com fio preto: AM, 4 pb", "total": 4 },
        { "numero": "C2", "instrucao": "*1 pb, aum* repita 2×", "total": 6 },
        { "numero": "C3", "instrucao": "Mude para laranja: *1 pb, aum* repita 3×", "total": 9 },
        { "numero": "C4", "instrucao": "*2 pb, aum* repita 3×", "total": 12 }
      ],
      "fechamento": "Não rechear. Dobre ao meio, achate e deixe fio para costura."
    },
    {
      "nome": "Cauda",
      "quantidade": 1,
      "carreiras": [
        { "numero": "C1", "instrucao": "Com fio branco: AM, 4 pb", "total": 4 },
        { "numero": "C2", "instrucao": "aum em cada ponto", "total": 8 },
        { "numero": "C3", "instrucao": "*1 pb, aum* repita 4×", "total": 12 },
        { "numero": "C4", "instrucao": "Mude para fio laranja: *2 pb, aum* repita 4×", "total": 16 },
        { "numero": "C5–C8", "instrucao": "pb em cada ponto", "total": 16 },
        { "numero": "C9", "instrucao": "*2 pb, dim* repita 4×", "total": 12 },
        { "numero": "C10", "instrucao": "pb em cada ponto", "total": 12 },
        { "numero": "C11", "instrucao": "*1 pb, dim* repita 4×", "total": 8 },
        { "numero": "C12", "instrucao": "pb em cada ponto", "total": 8 }
      ],
      "fechamento": "Recheie levemente a base. Dobre ao meio e deixe fio longo para costurar."
    }
  ],
  "montagem": [
    { "texto": "Costure as orelhas pretas no topo da cabeça, entre C3 e C5." },
    { "texto": "Costure a cauda laranja e branca na parte traseira inferior para ajudar a raposa a se apoiar e ficar sentada." }
  ],
  "acabamento": [
    { "texto": "Usando fio preto, borde um pequeno triângulo no centro do rosto entre os olhos para fazer o focinho." }
  ]
};

const orelhasPooh: Receita = {
  "slug": "orelhas-pooh",
  "nome": "Orelhas de Ursinho Pooh",
  "categoria": "disney",
  "nivel": "iniciante",
  "tamanhoFinal": "~6 cm",
  "tempoEstimado": "1–2 horas",
  "emoji": "🍯",
  "corCard": "#FFF2B2",
  "imagemUrl": "/receitas/orelhas-pooh/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi amarelo ouro",
      "detalhe": "aprox. 15 g"
    },
    {
      "item": "Tiara fina de plástico ou metal",
      "detalhe": "1 unidade"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "2,5 mm"
    },
    {
      "item": "Fibra siliconada",
      "detalhe": "para recheio"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    },
    {
      "sigla": "pb",
      "significado": "Ponto baixo"
    },
    {
      "sigla": "aum",
      "significado": "Aumento"
    },
    {
      "sigla": "dim",
      "significado": "Diminuição"
    }
  ],
  "notas": [
    "As orelhas são feitas em formato de cúpula redonda e depois costuradas na capa da tiara ou coladas."
  ],
  "partes": [
    {
      "nome": "Orelhas",
      "quantidade": 2,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "AM, 6 pb",
          "total": 6
        },
        {
          "numero": "C2",
          "instrucao": "aum em cada ponto",
          "total": 12
        },
        {
          "numero": "C3",
          "instrucao": "*1 pb, aum* repita 6×",
          "total": 18
        },
        {
          "numero": "C4",
          "instrucao": "*2 pb, aum* repita 6×",
          "total": 24
        },
        {
          "numero": "C5–C8",
          "instrucao": "pb em cada ponto",
          "total": 24
        },
        {
          "numero": "C9",
          "instrucao": "*2 pb, dim* repita 6×",
          "total": 18
        }
      ],
      "fechamento": "Rechear levemente. Deixar fio longo para costurar."
    }
  ],
  "montagem": [
    {
      "texto": "Faça uma capa protetora de crochê para cobrir a tiara de plástico fazendo carreiras planas de pb no mesmo comprimento da tiara."
    },
    {
      "texto": "Costure a capa ao redor da tiara."
    },
    {
      "texto": "Costure as duas orelhas amarelas de forma simétrica no topo da tiara revestida."
    }
  ],
  "acabamento": [
    {
      "texto": "Arremate todos os fios por dentro do revestimento."
    }
  ]
};

const pandaChapeu: Receita = {
  "slug": "panda-chapeu",
  "nome": "Panda com Chapéu",
  "categoria": "animais",
  "nivel": "intermediario",
  "tamanhoFinal": "~14 cm",
  "tempoEstimado": "4–5 horas",
  "emoji": "🐼",
  "corCard": "#E8EEF5",
  "imagemUrl": "/receitas/panda-chapeu/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi branco (cor principal)",
      "detalhe": "aprox. 35 g"
    },
    {
      "item": "Fio Amigurumi preto (membros, orelhas, manchas)",
      "detalhe": "aprox. 25 g"
    },
    {
      "item": "Fio Amigurumi vermelho (para o chapéu)",
      "detalhe": "aprox. 10 g"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "3,0 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    },
    {
      "sigla": "pb",
      "significado": "Ponto baixo"
    },
    {
      "sigla": "aum",
      "significado": "Aumento"
    }
  ],
  "notas": [
    "Trabalhe as partes brancas com cuidado para não sujar com o fio preto."
  ],
  "partes": [
    {
      "nome": "Cabeça",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "AM, 6 pb (branco)",
          "total": 6
        },
        {
          "numero": "C2",
          "instrucao": "aum em cada ponto",
          "total": 12
        },
        {
          "numero": "C3",
          "instrucao": "*1 pb, aum* repita 6×",
          "total": 18
        },
        {
          "numero": "C4",
          "instrucao": "*2 pb, aum* repita 6×",
          "total": 24
        },
        {
          "numero": "C5",
          "instrucao": "*3 pb, aum* repita 6×",
          "total": 30
        },
        {
          "numero": "C6–C12",
          "instrucao": "pb em cada ponto",
          "total": 30
        },
        {
          "numero": "C13",
          "instrucao": "*3 pb, dim* repita 6×",
          "total": 24
        },
        {
          "numero": "C14",
          "instrucao": "*2 pb, dim* repita 6×",
          "total": 18
        },
        {
          "numero": "C15",
          "instrucao": "*1 pb, dim* repita 6×",
          "total": 12
        },
        {
          "numero": "C16",
          "instrucao": "dim 6×",
          "total": 6
        }
      ],
      "fechamento": "Fechar e arrematar."
    },
    {
      "nome": "Corpo",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "AM, 6 pb (branco)",
          "total": 6
        },
        {
          "numero": "C2",
          "instrucao": "aum em cada ponto",
          "total": 12
        },
        {
          "numero": "C3",
          "instrucao": "*1 pb, aum* repita 6×",
          "total": 18
        },
        {
          "numero": "C4",
          "instrucao": "*2 pb, aum* repita 6×",
          "total": 24
        },
        {
          "numero": "C5–C9",
          "instrucao": "pb em cada ponto",
          "total": 24
        },
        {
          "numero": "C10",
          "instrucao": "*2 pb, dim* repita 6×",
          "total": 18
        }
      ],
      "fechamento": "Rechear e deixar fio longo para costurar na cabeça."
    }
  ],
  "montagem": [
    {
      "texto": "Costure as manchas pretas dos olhos no rosto, depois insira os olhos por cima."
    },
    {
      "texto": "Costure a cabeça no corpo."
    },
    {
      "texto": "Costure as orelhas pretas no topo e o chapéu vermelho inclinado entre as orelhas."
    }
  ],
  "acabamento": [
    {
      "texto": "Borde um focinho delicado em preto e esconda as pontas."
    }
  ]
};

const demogorgon: Receita = {
  "slug": "demogorgon",
  "nome": "Demogorgon",
  "categoria": "personagens",
  "nivel": "avancado",
  "tamanhoFinal": "~20 cm",
  "tempoEstimado": "7–8 horas",
  "emoji": "👹",
  "corCard": "#F5E3E6",
  "imagemUrl": "/receitas/demogorgon/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi cinza escuro ou roxo acinzentado",
      "detalhe": "aprox. 60 g"
    },
    {
      "item": "Fio Amigurumi vermelho escuro (pétalas da cabeça)",
      "detalhe": "aprox. 15 g"
    },
    {
      "item": "Fio Amigurumi branco (para bordar os dentes)",
      "detalhe": "aprox. 5 g"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "3,0 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "pb",
      "significado": "Ponto baixo"
    },
    {
      "sigla": "aum",
      "significado": "Aumento"
    },
    {
      "sigla": "dim",
      "significado": "Diminuição"
    }
  ],
  "notas": [
    "A cabeça aberta em formato de flor é a parte mais complexa. As 5 pétalas são trabalhadas em crochê plano e costuradas."
  ],
  "partes": [
    {
      "nome": "Corpo e Pernas",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "AM, 6 pb (cinza)",
          "total": 6
        },
        {
          "numero": "C2",
          "instrucao": "aum em cada ponto",
          "total": 12
        },
        {
          "numero": "C3–C15",
          "instrucao": "pb em cada ponto",
          "total": 12
        },
        {
          "numero": "C16",
          "instrucao": "*1 pb, dim* repita 4×",
          "total": 8
        }
      ],
      "fechamento": "Rechear muito bem para sustentar a cabeça larga."
    },
    {
      "nome": "Pétalas da Boca (Fazer 5)",
      "quantidade": 5,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "Fazer 4 corr, virar e fazer 3 pb (vermelho)",
          "total": 3
        },
        {
          "numero": "C2",
          "instrucao": "aum, 1 pb, aum",
          "total": 5
        },
        {
          "numero": "C3–C5",
          "instrucao": "pb em cada ponto",
          "total": 5
        },
        {
          "numero": "C6",
          "instrucao": "dim, 1 pb, dim",
          "total": 3
        }
      ],
      "fechamento": "Cortar e deixar fio para costurar ao redor do pescoço."
    }
  ],
  "montagem": [
    {
      "texto": "Costure as 5 pétalas vermelhas ao redor do topo da cabeça/pescoço cinza para criar a boca aberta do Demogorgon."
    },
    {
      "texto": "Costure os braços longos e dedos finos nas laterais do corpo."
    }
  ],
  "acabamento": [
    {
      "texto": "Com o fio branco de bordado, faça pequenos pontos retos em cada pétala vermelha para simular dezenas de dentes pontudos."
    }
  ]
};

const tristeza: Receita = {
  "slug": "tristeza",
  "nome": "Tristeza (Inside Out)",
  "categoria": "cartoons",
  "nivel": "intermediario",
  "tamanhoFinal": "~18 cm",
  "tempoEstimado": "5–6 horas",
  "emoji": "💙",
  "corCard": "#E8F0FB",
  "imagemUrl": "/receitas/tristeza/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi azul claro (pele)",
      "detalhe": "aprox. 30 g"
    },
    {
      "item": "Fio Amigurumi azul escuro (cabelo)",
      "detalhe": "aprox. 25 g"
    },
    {
      "item": "Fio Amigurumi branco acinzentado (suéter)",
      "detalhe": "aprox. 40 g"
    },
    {
      "item": "Fio Amigurumi preto (óculos)",
      "detalhe": "aprox. 5 g"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "3,0 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    },
    {
      "sigla": "pb",
      "significado": "Ponto baixo"
    },
    {
      "sigla": "aum",
      "significado": "Aumento"
    },
    {
      "sigla": "dim",
      "significado": "Diminuição"
    }
  ],
  "notas": [
    "O suéter de gola alta é feito em BLO para dar relevo e a gola alta é dobrada para baixo."
  ],
  "partes": [
    {
      "nome": "Cabeça",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "AM, 6 pb (azul claro)",
          "total": 6
        },
        {
          "numero": "C2",
          "instrucao": "aum em cada ponto",
          "total": 12
        },
        {
          "numero": "C3",
          "instrucao": "*1 pb, aum* repita 6×",
          "total": 18
        },
        {
          "numero": "C4",
          "instrucao": "*2 pb, aum* repita 6×",
          "total": 24
        },
        {
          "numero": "C5",
          "instrucao": "*3 pb, aum* repita 6×",
          "total": 30
        },
        {
          "numero": "C6–C13",
          "instrucao": "pb em cada ponto",
          "total": 30,
          "nota": "⚠️ Encaixar olhos de segurança de 9 mm entre C9-C10."
        },
        {
          "numero": "C14",
          "instrucao": "*3 pb, dim* repita 6×",
          "total": 24
        },
        {
          "numero": "C15",
          "instrucao": "*2 pb, dim* repita 6×",
          "total": 18
        },
        {
          "numero": "C16",
          "instrucao": "*1 pb, dim* repita 6×",
          "total": 12
        }
      ],
      "fechamento": "Rechear firmemente e fechar."
    }
  ],
  "montagem": [
    {
      "texto": "Costure o cabelo azul escuro (feito em forma de touca com fios longos caindo na lateral) na cabeça."
    },
    {
      "texto": "Costure os óculos redondos pretos ao redor dos olhos."
    },
    {
      "texto": "Conecte a cabeça azul claro ao suéter branco de gola alta."
    }
  ],
  "acabamento": [
    {
      "texto": "Borde os detalhes de cílios caídos em preto para ressaltar a expressão de tristeza."
    }
  ]
};

const harryPotter: Receita = {
  "slug": "harry-potter",
  "nome": "Harry Potter",
  "categoria": "personagens",
  "nivel": "intermediario",
  "tamanhoFinal": "~12 cm",
  "tempoEstimado": "4–5 horas",
  "emoji": "⚡",
  "corCard": "#EED9C4",
  "imagemUrl": "/receitas/harry-potter/capa.jpg",
  "videoUrl": "https://www.youtube.com/embed/R9sW5CdQdkU",
  "materiais": [
    { "item": "Fio Amigurumi pele", "detalhe": "aprox. 20 g" },
    { "item": "Fio Amigurumi preto (cabelo, sapatos e capa)", "detalhe": "aprox. 30 g" },
    { "item": "Fio Amigurumi cinza escuro (calça e suéter)", "detalhe": "aprox. 15 g" },
    { "item": "Fio Amigurumi vermelho e amarelo (cachecol)", "detalhe": "aprox. 10 g cada" },
    { "item": "Fio bordado preto ou arame fino", "detalhe": "para os óculos" },
    { "item": "Agulha de crochê", "detalhe": "2,5 mm" },
    { "item": "Olhos de segurança pretos", "detalhe": "8 mm" }
  ],
  "abreviacoes": [
    { "sigla": "AM", "significado": "Anel mágico" },
    { "sigla": "pb", "significado": "Ponto baixo" },
    { "sigla": "aum", "significado": "Aumento" },
    { "sigla": "dim", "significado": "Diminuição" },
    { "sigla": "BLO", "significado": "Somente nas alças de trás" }
  ],
  "notas": [
    "A capa preta e o cachecol são peças separadas que podem ser removidas."
  ],
  "partes": [
    {
      "nome": "Cabeça",
      "quantidade": 1,
      "carreiras": [
        { "numero": "C1", "instrucao": "Com fio cor de pele: AM, 6 pb", "total": 6 },
        { "numero": "C2", "instrucao": "aum em cada ponto", "total": 12 },
        { "numero": "C3", "instrucao": "*1 pb, aum* repita 6×", "total": 18 },
        { "numero": "C4", "instrucao": "*2 pb, aum* repita 6×", "total": 24 },
        { "numero": "C5", "instrucao": "*3 pb, aum* repita 6×", "total": 30 },
        { "numero": "C6", "instrucao": "*4 pb, aum* repita 6×", "total": 36 },
        { "numero": "C7–C13", "instrucao": "pb em cada ponto", "total": 36, "nota": "Posicionar olhos entre C10 e C11 com 6 pontos de espaço." },
        { "numero": "C14", "instrucao": "*4 pb, dim* repita 6×", "total": 30 },
        { "numero": "C15", "instrucao": "*3 pb, dim* repita 6×", "total": 24 },
        { "numero": "C16", "instrucao": "*2 pb, dim* repita 6×", "total": 18 },
        { "numero": "C17", "instrucao": "*1 pb, dim* repita 6×", "total": 12 }
      ],
      "fechamento": "Recheie firmemente a cabeça e deixe fio longo para costurar no corpo."
    },
    {
      "nome": "Corpo (Começando pelas Pernas)",
      "quantidade": 1,
      "carreiras": [
        { "numero": "C1", "instrucao": "Com fio preto (sapato): AM, 6 pb", "total": 6 },
        { "numero": "C2", "instrucao": "aum em cada ponto", "total": 12 },
        { "numero": "C3", "instrucao": "BLO: pb em cada ponto", "total": 12 },
        { "numero": "C4", "instrucao": "Troque para cinza escuro (calça): pb em cada ponto", "total": 12 },
        { "numero": "C5–C6", "instrucao": "pb em cada ponto. Arremate a primeira perna. Faça a segunda perna igual, mas não corte o fio e junte com 2 correntinhas.", "total": 12 },
        { "numero": "C7", "instrucao": "pb nos 12 pts da perna 1, 2 pb nas correntes, pb nos 12 pts da perna 2, 2 pb nas correntes", "total": 28 },
        { "numero": "C8–C10", "instrucao": "pb em cada ponto", "total": 28 },
        { "numero": "C11", "instrucao": "Troque para cinza (suéter) BLO: pb em cada ponto", "total": 28 },
        { "numero": "C12", "instrucao": "*5 pb, dim* repita 4×", "total": 24 },
        { "numero": "C13–C14", "instrucao": "pb em cada ponto", "total": 24 },
        { "numero": "C15", "instrucao": "*2 pb, dim* repita 6×", "total": 18 },
        { "numero": "C16", "instrucao": "*1 pb, dim* repita 6×", "total": 12 }
      ],
      "fechamento": "Recheie bem o corpo."
    },
    {
      "nome": "Cabelo",
      "quantidade": 1,
      "carreiras": [
        { "numero": "C1", "instrucao": "Com fio preto: AM, 6 pb", "total": 6 },
        { "numero": "C2", "instrucao": "aum em cada ponto", "total": 12 },
        { "numero": "C3", "instrucao": "*1 pb, aum* repita 6×", "total": 18 },
        { "numero": "C4", "instrucao": "*2 pb, aum* repita 6×", "total": 24 },
        { "numero": "C5", "instrucao": "*3 pb, aum* repita 6×", "total": 30 },
        { "numero": "C6", "instrucao": "*4 pb, aum* repita 6×", "total": 36 },
        { "numero": "C7–C11", "instrucao": "pb em cada ponto", "total": 36 },
        { "numero": "Franja", "instrucao": "Para a franja (fios irregulares): *Faça 5 corr, volte 4 pb*, repita 3 vezes, fixe com pbx. *Faça 3 corr, volte 2 pb* repita 2 vezes.", "total": 0 }
      ],
      "fechamento": "Deixe fio longo para costurar ou colar o cabelo no topo da cabeça."
    },
    {
      "nome": "Cachecol",
      "quantidade": 1,
      "carreiras": [
        { "numero": "C1", "instrucao": "Em crochê plano: 40 correntes em vermelho", "total": 40 },
        { "numero": "C2", "instrucao": "Volte com meio ponto alto (mpa) a partir da 3ª corrente.", "total": 38 },
        { "numero": "Listras", "instrucao": "Borde linhas amarelas a cada 4 pontos no cachecol finalizado usando agulha de tapeceiro.", "total": 0 }
      ],
      "fechamento": "Arrematar fios e adicionar pequenas franjas vermelhas nas pontas."
    }
  ],
  "montagem": [
    { "texto": "Costure a cabeça no corpo." },
    { "texto": "Prenda o cabelo preto no topo da cabeça. Deixe a franja cair para o lado direito." },
    { "texto": "Borde a cicatriz de raio vermelha na testa, do lado esquerdo." },
    { "texto": "Borde óculos pretos ao redor dos olhos, ou cole óculos de arame fino no rosto." }
  ],
  "acabamento": [
    { "texto": "Enrole o cachecol listrado no pescoço do boneco." }
  ]
};

const hermioneGranger: Receita = {
  "slug": "hermione-granger",
  "nome": "Hermione Granger",
  "categoria": "personagens",
  "nivel": "intermediario",
  "tamanhoFinal": "~12 cm",
  "tempoEstimado": "4–5 horas",
  "emoji": "📚",
  "corCard": "#ECD9CE",
  "imagemUrl": "/receitas/hermione-granger/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi cor pele (pele)",
      "detalhe": "aprox. 20 g"
    },
    {
      "item": "Fio Amigurumi castanho (cabelo cacheado)",
      "detalhe": "aprox. 35 g"
    },
    {
      "item": "Fio Amigurumi cinza e preto (uniforme)",
      "detalhe": "aprox. 25 g"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "2,5 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    },
    {
      "sigla": "pb",
      "significado": "Ponto baixo"
    },
    {
      "sigla": "aum",
      "significado": "Aumento"
    }
  ],
  "notas": [
    "O cabelo da Hermione é feito com cachos longos em espiral, fazendo várias correntes e depois pb voltando nelas."
  ],
  "partes": [
    {
      "nome": "Cabelo (Base e Cachos)",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "AM, 6 pb (castanho)",
          "total": 6
        },
        {
          "numero": "C2",
          "instrucao": "aum em cada ponto",
          "total": 12
        },
        {
          "numero": "C3",
          "instrucao": "Para cada ponto, faça 25 correntes e volte fazendo 24 pb (forma o cacho)",
          "total": 12,
          "nota": "Isso criará 12 cachos cheios."
        }
      ],
      "fechamento": "Costurar no topo da cabeça."
    }
  ],
  "montagem": [
    {
      "texto": "Costure a cabeça no corpo do uniforme escolar."
    },
    {
      "texto": "Posicione o cabelo cacheado no topo, deixando alguns cachos caírem sobre o peito e laterais."
    },
    {
      "texto": "Borde detalhes de livros ou dê a ela uma varinha feita de palito de dente marrom."
    }
  ],
  "acabamento": [
    {
      "texto": "Esconda todas as sobras de fio sob a saia do uniforme."
    }
  ]
};

const ronyWeasley: Receita = {
  "slug": "rony-weasley",
  "nome": "Rony Weasley",
  "categoria": "personagens",
  "nivel": "intermediario",
  "tamanhoFinal": "~12 cm",
  "tempoEstimado": "4–5 horas",
  "emoji": "🐀",
  "corCard": "#EEDAC5",
  "imagemUrl": "/receitas/rony-weasley/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi pele",
      "detalhe": "aprox. 20 g"
    },
    {
      "item": "Fio Amigurumi ruivo / laranja acobreado (cabelo)",
      "detalhe": "aprox. 20 g"
    },
    {
      "item": "Fio Amigurumi cinza e preto",
      "detalhe": "aprox. 25 g"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "2,5 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    },
    {
      "sigla": "pb",
      "significado": "Ponto baixo"
    }
  ],
  "notas": [
    "Rony usa o uniforme da Grifinória idêntico ao do Harry, mas seu cabelo ruivo liso o caracteriza."
  ],
  "partes": [
    {
      "nome": "Cabelo Liso Ruivo",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "AM, 6 pb",
          "total": 6
        },
        {
          "numero": "C2",
          "instrucao": "aum em cada ponto",
          "total": 12
        },
        {
          "numero": "C3",
          "instrucao": "*1 pb, aum* repita 6×",
          "total": 18
        },
        {
          "numero": "C4–C8",
          "instrucao": "pb em cada ponto",
          "total": 18
        }
      ],
      "fechamento": "NÃO rechear. Costurar rente à cabeça."
    }
  ],
  "montagem": [
    {
      "texto": "Costure o cabelo ruivo sobre a cabeça cor pele."
    },
    {
      "texto": "Adicione sardas bordadas nas bochechas dele com linha marrom clara."
    },
    {
      "texto": "Monte o corpo e adicione o cachecol."
    }
  ],
  "acabamento": [
    {
      "texto": "Arremate e esconda os fios."
    }
  ]
};

const dobby: Receita = {
  "slug": "dobby",
  "nome": "Dobby",
  "categoria": "personagens",
  "nivel": "intermediario",
  "tamanhoFinal": "~10 cm",
  "tempoEstimado": "4–5 horas",
  "emoji": "🧦",
  "corCard": "#ECE2D5",
  "imagemUrl": "/receitas/dobby/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi bege claro / areia",
      "detalhe": "aprox. 35 g"
    },
    {
      "item": "Fio Amigurumi marrom claro (túnica/fronha)",
      "detalhe": "aprox. 15 g"
    },
    {
      "item": "Fio branco (meia)",
      "detalhe": "aprox. 5 g"
    },
    {
      "item": "Olhos de segurança verdes",
      "detalhe": "9 mm — 1 par"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "2,5 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    },
    {
      "sigla": "pb",
      "significado": "Ponto baixo"
    },
    {
      "sigla": "dim",
      "significado": "Diminuição"
    }
  ],
  "notas": [
    "As orelhas pontudas são a parte mais marcante. São feitas planas e costuradas horizontalmente."
  ],
  "partes": [
    {
      "nome": "Orelhas Longas (Fazer 2)",
      "quantidade": 2,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "AM, 4 pb",
          "total": 4
        },
        {
          "numero": "C2",
          "instrucao": "*1 pb, aum* repita 2×",
          "total": 6
        },
        {
          "numero": "C3",
          "instrucao": "*2 pb, aum* repita 2×",
          "total": 8
        },
        {
          "numero": "C4",
          "instrucao": "*3 pb, aum* repita 2×",
          "total": 10
        },
        {
          "numero": "C5–C9",
          "instrucao": "pb em cada ponto",
          "total": 10
        }
      ],
      "fechamento": "NÃO rechear. Achatar e costurar na lateral da cabeça."
    }
  ],
  "montagem": [
    {
      "texto": "Costure as orelhas caídas nas laterais da cabeça, na altura dos olhos de segurança verdes."
    },
    {
      "texto": "Vista a túnica bege e prenda o fio marrom no corpo."
    },
    {
      "texto": "Prenda uma pequena meia de crochê branca na mão do Dobby."
    }
  ],
  "acabamento": [
    {
      "texto": "Borde rugas leves na testa do Dobby com linha bege mais escura."
    }
  ]
};

const deanWinchester: Receita = {
  "slug": "dean-winchester",
  "nome": "Dean Winchester",
  "categoria": "personagens",
  "nivel": "intermediario",
  "tamanhoFinal": "~15 cm",
  "tempoEstimado": "5–6 horas",
  "emoji": "🇺🇸",
  "corCard": "#E3DFDA",
  "imagemUrl": "/receitas/dean-winchester/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi pele",
      "detalhe": "aprox. 25 g"
    },
    {
      "item": "Fio Amigurumi marrom escuro (cabelo e jaqueta)",
      "detalhe": "aprox. 30 g"
    },
    {
      "item": "Fio azul escuro (calça jeans)",
      "detalhe": "aprox. 20 g"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "3,0 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    },
    {
      "sigla": "pb",
      "significado": "Ponto baixo"
    }
  ],
  "notas": [
    "A jaqueta de couro clássica é feita em crochê plano e costurada por cima do corpo azul da blusa."
  ],
  "partes": [
    {
      "nome": "Jaqueta de Couro (Marrom)",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "Fazer 15 corr, virar e fazer 14 pb",
          "total": 14
        },
        {
          "numero": "C2–C8",
          "instrucao": "1 corr, virar, 14 pb",
          "total": 14
        }
      ],
      "fechamento": "Deixar fios para prender no corpo."
    }
  ],
  "montagem": [
    {
      "texto": "Costure o cabelo espetado marrom na cabeça."
    },
    {
      "texto": "Vista a jaqueta de couro marrom sobre a blusa azul-escura do corpo."
    },
    {
      "texto": "Borde uma leve barba grisalha com ponto atrás ao redor da mandíbula (opcional)."
    }
  ],
  "acabamento": [
    {
      "texto": "Esconda todos os fios e dê a ele o famoso colar de amuleto (com um pequeno ponto dourado)."
    }
  ]
};

const samWinchester: Receita = {
  "slug": "sam-winchester",
  "nome": "Sam Winchester",
  "categoria": "personagens",
  "nivel": "intermediario",
  "tamanhoFinal": "~16 cm",
  "tempoEstimado": "5–6 horas",
  "emoji": "🧥",
  "corCard": "#DFD8D0",
  "imagemUrl": "/receitas/sam-winchester/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi pele",
      "detalhe": "aprox. 25 g"
    },
    {
      "item": "Fio Amigurumi castanho (cabelo longo)",
      "detalhe": "aprox. 30 g"
    },
    {
      "item": "Fio azul jeans (calça) e verde (camisa)",
      "detalhe": "aprox. 20 g cada"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "3,0 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    }
  ],
  "notas": [
    "Sam é levemente mais alto que o Dean. Aumente duas carreiras nas pernas."
  ],
  "partes": [
    {
      "nome": "Cabelo Longo Castanho",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "AM, 6 pb",
          "total": 6
        },
        {
          "numero": "C2",
          "instrucao": "aum em cada ponto",
          "total": 12
        },
        {
          "numero": "C3–C10",
          "instrucao": "pb em cada ponto",
          "total": 12,
          "nota": "Deixar fios compridos cobrindo a nuca e laterais."
        }
      ],
      "fechamento": "Costurar rente à cabeça."
    }
  ],
  "montagem": [
    {
      "texto": "Costure o cabelo longo nas laterais da cabeça, modelando a franja dividida ao meio, marca registrada do Sam."
    },
    {
      "texto": "Prenda a camisa de flanela xadrez verde ou marrom sobre o corpo."
    }
  ],
  "acabamento": [
    {
      "texto": "Finalize a costura e esconda os fios."
    }
  ]
};

const castiel: Receita = {
  "slug": "castiel",
  "nome": "Castiel",
  "categoria": "personagens",
  "nivel": "intermediario",
  "tamanhoFinal": "~15 cm",
  "tempoEstimado": "5–6 horas",
  "emoji": "👼",
  "corCard": "#EDECDF",
  "imagemUrl": "/receitas/castiel/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi pele",
      "detalhe": "aprox. 25 g"
    },
    {
      "item": "Fio Amigurumi preto (terno e cabelo)",
      "detalhe": "aprox. 30 g"
    },
    {
      "item": "Fio bege claro (sobretudo clássico)",
      "detalhe": "aprox. 20 g"
    },
    {
      "item": "Fio branco e azul (asas traseiras)",
      "detalhe": "opcional"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "3,0 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    }
  ],
  "notas": [
    "O sobretudo bege é feito em crochê plano e colocado por cima do corpo, que simula o terno preto com gravata azul."
  ],
  "partes": [
    {
      "nome": "Sobre tudo Bege",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "Fazer 18 corr, voltar fazendo 17 pb",
          "total": 17
        },
        {
          "numero": "C2–C10",
          "instrucao": "1 corr, virar, 17 pb",
          "total": 17
        }
      ],
      "fechamento": "Deixar fio para prender ao redor do corpo."
    }
  ],
  "montagem": [
    {
      "texto": "Costure a cabeça no terno preto com camisa branca."
    },
    {
      "texto": "Vista o sobretudo bege por cima e fixe com pequenos pontos sob os braços."
    },
    {
      "texto": "Borde a gravata azul no centro do peito com alguns pontos retos."
    },
    {
      "texto": "Costure as asas de anjo pretas/azuis nas costas do sobretudo (opcional)."
    }
  ],
  "acabamento": [
    {
      "texto": "Arremate e esconda os fios."
    }
  ]
};

const rickGrimes: Receita = {
  "slug": "rick-grimes",
  "nome": "Rick Grimes",
  "categoria": "personagens",
  "nivel": "intermediario",
  "tamanhoFinal": "~15 cm",
  "tempoEstimado": "5–6 horas",
  "emoji": "🤠",
  "corCard": "#ECE5DB",
  "imagemUrl": "/receitas/rick-grimes/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi pele e cinza (cabelo e barba)",
      "detalhe": "aprox. 25 g cada"
    },
    {
      "item": "Fio Amigurumi marrom e bege (calça e jaqueta)",
      "detalhe": "aprox. 30 g"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "3,0 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    }
  ],
  "notas": [
    "A barba grisalha do Rick é feita bordando com fio cinza e branco misturados ao redor do rosto."
  ],
  "partes": [
    {
      "nome": "Cabeça",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "AM, 6 pb (pele)",
          "total": 6
        },
        {
          "numero": "C2",
          "instrucao": "aum em cada ponto",
          "total": 12
        },
        {
          "numero": "C3–C10",
          "instrucao": "pb em cada ponto",
          "total": 12
        }
      ],
      "fechamento": "Rechear e fechar."
    }
  ],
  "montagem": [
    {
      "texto": "Costure o cabelo castanho com mechas grisalhas bordadas."
    },
    {
      "texto": "Borde a barba ao redor do queixo e bochechas."
    },
    {
      "texto": "Adicione um coldre marrom simples na cintura com correntinhas."
    }
  ],
  "acabamento": [
    {
      "texto": "Finalize os arremates."
    }
  ]
};

const darylDixon: Receita = {
  "slug": "daryl-dixon",
  "nome": "Daryl Dixon",
  "categoria": "personagens",
  "nivel": "intermediario",
  "tamanhoFinal": "~15 cm",
  "tempoEstimado": "5–6 horas",
  "emoji": "🏹",
  "corCard": "#DFDFDF",
  "imagemUrl": "/receitas/daryl-dixon/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi pele e marrom escuro (cabelo longo)",
      "detalhe": "aprox. 25 g cada"
    },
    {
      "item": "Fio preto / cinza escuro (colete de asas)",
      "detalhe": "aprox. 20 g"
    },
    {
      "item": "Fio branco para bordar as asas nas costas",
      "detalhe": "aprox. 5 g"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "3,0 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    }
  ],
  "notas": [
    "As asas de anjo são o detalhe principal nas costas do colete. Devem ser bordadas com cuidado com fio branco."
  ],
  "partes": [
    {
      "nome": "Colete com Asas (Preto)",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "Fazer 14 corr, virar e fazer 13 pb",
          "total": 13
        },
        {
          "numero": "C2–C6",
          "instrucao": "1 corr, virar, 13 pb",
          "total": 13
        }
      ],
      "fechamento": "Deixar fios para costurar nas costas do corpo."
    }
  ],
  "montagem": [
    {
      "texto": "Borde as duas asas de anjo brancas no centro do colete preto."
    },
    {
      "texto": "Posicione o cabelo bagunçado marrom na cabeça cor pele."
    },
    {
      "texto": "Costure o colete no corpo do Daryl."
    }
  ],
  "acabamento": [
    {
      "texto": "Esconda os fios sob o colete."
    }
  ]
};

const zumbiTwd: Receita = {
  "slug": "zumbi-twd",
  "nome": "Zumbi TWD",
  "categoria": "personagens",
  "nivel": "intermediario",
  "tamanhoFinal": "~14 cm",
  "tempoEstimado": "4–5 horas",
  "emoji": "🧟",
  "corCard": "#E1ECE0",
  "imagemUrl": "/receitas/zumbi-twd/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi verde musgo ou cinza claro (pele de zumbi)",
      "detalhe": "aprox. 30 g"
    },
    {
      "item": "Fio Amigurumi vermelho (detalhes de sangue/feridas)",
      "detalhe": "aprox. 10 g"
    },
    {
      "item": "Fios rasgados cinza e azul (roupas)",
      "detalhe": "aprox. 25 g"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "3,0 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    }
  ],
  "notas": [
    "A cabeça do zumbi pode ter detalhes rasgados ou faltar um pedaço de cabelo."
  ],
  "partes": [
    {
      "nome": "Cabeça (Verde/Cinza)",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "AM, 6 pb",
          "total": 6
        },
        {
          "numero": "C2",
          "instrucao": "aum em cada ponto",
          "total": 12
        },
        {
          "numero": "C3–C10",
          "instrucao": "pb em cada ponto",
          "total": 12
        }
      ],
      "fechamento": "Rechear de forma levemente irregular."
    }
  ],
  "montagem": [
    {
      "texto": "Costure as roupas rasgadas no corpo."
    },
    {
      "texto": "Borde \"feridas\" vermelhas na cabeça ou braços com pequenos pontos com fio vermelho."
    }
  ],
  "acabamento": [
    {
      "texto": "Ajuste os fios soltos das roupas para simular desgaste."
    }
  ]
};

const mario: Receita = {
  "slug": "mario",
  "nome": "Mario Bros",
  "categoria": "videogames",
  "nivel": "intermediario",
  "tamanhoFinal": "~14 cm",
  "tempoEstimado": "5–6 horas",
  "emoji": "🧑‍🔧",
  "corCard": "#F5E3E3",
  "imagemUrl": "/receitas/mario/capa.jpg",
  "videoUrl": "https://www.youtube.com/embed/orQv1VyFCnY",
  "materiais": [
    { "item": "Fio Amigurumi vermelho (camisa e chapéu)", "detalhe": "aprox. 30 g" },
    { "item": "Fio Amigurumi azul (macacão)", "detalhe": "aprox. 25 g" },
    { "item": "Fio Amigurumi cor da pele (rosto e mãos)", "detalhe": "aprox. 20 g" },
    { "item": "Fio Amigurumi marrom (sapatos e cabelo/bigode)", "detalhe": "aprox. 15 g" },
    { "item": "Fio Amigurumi amarelo (botões)", "detalhe": "aprox. 5 g" },
    { "item": "Agulha de crochê", "detalhe": "2,5 mm" },
    { "item": "Olhos de segurança", "detalhe": "8 mm pretos" }
  ],
  "abreviacoes": [
    { "sigla": "AM", "significado": "Anel mágico" },
    { "sigla": "pb", "significado": "Ponto baixo" },
    { "sigla": "aum", "significado": "Aumento" },
    { "sigla": "dim", "significado": "Diminuição" }
  ],
  "notas": [
    "A base do corpo é iniciada pelas pernas e o macacão é trocado durante a construção do corpo."
  ],
  "partes": [
    {
      "nome": "Pernas e Corpo",
      "quantidade": 1,
      "carreiras": [
        { "numero": "C1", "instrucao": "Com fio marrom (sapatos): AM, 6 pb", "total": 6 },
        { "numero": "C2", "instrucao": "aum em cada ponto", "total": 12 },
        { "numero": "C3", "instrucao": "BLO: pb em cada ponto", "total": 12 },
        { "numero": "C4", "instrucao": "pb em cada ponto", "total": 12 },
        { "numero": "C5", "instrucao": "Mude para fio azul (calça): pb em cada ponto. Arremate a Perna 1. Faça a Perna 2 e junte com 2 corr.", "total": 12 },
        { "numero": "C6", "instrucao": "Junte as pernas: pb nos 12 pts da Perna 1, 2 pb nas corr, pb nos 12 pts da Perna 2, 2 pb nas corr", "total": 28 },
        { "numero": "C7–C9", "instrucao": "Com fio azul: pb em cada ponto", "total": 28 },
        { "numero": "C10", "instrucao": "Mude para fio vermelho (camisa) BLO: pb em cada ponto", "total": 28 },
        { "numero": "C11–C13", "instrucao": "Com fio vermelho: pb em cada ponto", "total": 28 },
        { "numero": "C14", "instrucao": "*5 pb, dim* repita 4×", "total": 24 },
        { "numero": "C15", "instrucao": "*2 pb, dim* repita 6×", "total": 18 },
        { "numero": "C16", "instrucao": "*1 pb, dim* repita 6×", "total": 12 }
      ],
      "fechamento": "Rechear o corpo firme e deixar fio vermelho."
    },
    {
      "nome": "Cabeça",
      "quantidade": 1,
      "carreiras": [
        { "numero": "C1", "instrucao": "Fio pele: AM, 6 pb", "total": 6 },
        { "numero": "C2", "instrucao": "aum em cada ponto", "total": 12 },
        { "numero": "C3", "instrucao": "*1 pb, aum* repita 6×", "total": 18 },
        { "numero": "C4", "instrucao": "*2 pb, aum* repita 6×", "total": 24 },
        { "numero": "C5", "instrucao": "*3 pb, aum* repita 6×", "total": 30 },
        { "numero": "C6", "instrucao": "*4 pb, aum* repita 6×", "total": 36 },
        { "numero": "C7–C13", "instrucao": "pb em cada ponto", "total": 36, "nota": "Posicionar olhos de segurança entre C10-C11." },
        { "numero": "C14", "instrucao": "*4 pb, dim* repita 6×", "total": 30 },
        { "numero": "C15", "instrucao": "*3 pb, dim* repita 6×", "total": 24 },
        { "numero": "C16", "instrucao": "*2 pb, dim* repita 6×", "total": 18 },
        { "numero": "C17", "instrucao": "*1 pb, dim* repita 6×", "total": 12 }
      ],
      "fechamento": "Arrematar e deixar fio para costurar no corpo."
    },
    {
      "nome": "Chapéu Vermelho",
      "quantidade": 1,
      "carreiras": [
        { "numero": "C1", "instrucao": "AM, 6 pb (vermelho)", "total": 6 },
        { "numero": "C2", "instrucao": "aum em cada ponto", "total": 12 },
        { "numero": "C3", "instrucao": "*1 pb, aum* repita 6×", "total": 18 },
        { "numero": "C4", "instrucao": "*2 pb, aum* repita 6×", "total": 24 },
        { "numero": "C5", "instrucao": "*3 pb, aum* repita 6×", "total": 30 },
        { "numero": "C6", "instrucao": "*4 pb, aum* repita 6×", "total": 36 },
        { "numero": "C7–C9", "instrucao": "pb em cada ponto", "total": 36 },
        { "numero": "C10", "instrucao": "FLO (para aba): 10 pb, 16 mpa, 10 pb", "total": 36 }
      ],
      "fechamento": "Arremate, esconda o fio e costure sobre a cabeça."
    },
    {
      "nome": "Nariz Redondo Grande",
      "quantidade": 1,
      "carreiras": [
        { "numero": "C1", "instrucao": "AM, 6 pb (pele)", "total": 6 },
        { "numero": "C2", "instrucao": "*1 pb, aum* repita 3×", "total": 9 },
        { "numero": "C3", "instrucao": "pb em cada ponto", "total": 9 }
      ],
      "fechamento": "Rechear de leve e costurar no rosto."
    }
  ],
  "montagem": [
    { "texto": "Costure o chapéu vermelho inclinado no topo da cabeça." },
    { "texto": "Costure o nariz redondo grande logo abaixo dos olhos." },
    { "texto": "Borde um bigode preto grosso abaixo do nariz ou faça um pequeno retângulo de crochê marrom/preto." },
    { "texto": "Usando feltro branco, crie um pequeno círculo para colocar na frente do chapéu e desenhe um M vermelho no centro." },
    { "texto": "Faça as alças do macacão usando crochê plano em fio azul e prenda 2 botões de crochê amarelo." }
  ],
  "acabamento": [
    { "texto": "Ajuste os sapatos para que ele consiga se equilibrar sozinho." }
  ]
};

const luigi: Receita = {
  "slug": "luigi",
  "nome": "Luigi",
  "categoria": "videogames",
  "nivel": "intermediario",
  "tamanhoFinal": "~15 cm",
  "tempoEstimado": "5–6 horas",
  "emoji": "🦖",
  "corCard": "#E5F1E5",
  "imagemUrl": "/receitas/luigi/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi verde (blusa e chapéu)",
      "detalhe": "aprox. 30 g"
    },
    {
      "item": "Fio Amigurumi azul (macacão)",
      "detalhe": "aprox. 25 g"
    },
    {
      "item": "Fio Amigurumi pele",
      "detalhe": "aprox. 20 g"
    },
    {
      "item": "Fio preto (bigode) e amarelo (botões)",
      "detalhe": "aprox. 5 g"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "2,5 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    }
  ],
  "notas": [
    "Luigi é ligeiramente mais alto e magro que o Mario. Aumente 2 carreiras na perna e reduza 2 aumentos no corpo."
  ],
  "partes": [
    {
      "nome": "Chapéu Verde",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "AM, 6 pb (verde)",
          "total": 6
        },
        {
          "numero": "C2",
          "instrucao": "aum em cada ponto",
          "total": 12
        },
        {
          "numero": "C3",
          "instrucao": "*1 pb, aum* repita 6×",
          "total": 18
        },
        {
          "numero": "C4",
          "instrucao": "*2 pb, aum* repita 6×",
          "total": 24
        },
        {
          "numero": "C5–C8",
          "instrucao": "pb em cada ponto",
          "total": 24
        }
      ],
      "fechamento": "Deixar fio para costurar."
    }
  ],
  "montagem": [
    {
      "texto": "Costure o chapéu verde no topo da cabeça."
    },
    {
      "texto": "Costure o nariz e o bigode (levemente mais arredondado que o do Mario)."
    },
    {
      "texto": "Borde o círculo branco com o \"L\" em verde na frente do chapéu."
    }
  ],
  "acabamento": [
    {
      "texto": "Arremate os fios."
    }
  ]
};

const yoshi: Receita = {
  "slug": "yoshi",
  "nome": "Yoshi",
  "categoria": "videogames",
  "nivel": "avancado",
  "tamanhoFinal": "~15 cm",
  "tempoEstimado": "6–7 horas",
  "emoji": "🦖",
  "corCard": "#DFF2DF",
  "imagemUrl": "/receitas/yoshi/capa.jpg",
  "videoUrl": "https://www.youtube.com/embed/USnlnQXe3Es",
  "materiais": [
    { "item": "Fio Amigurumi verde claro (corpo principal)", "detalhe": "aprox. 45 g" },
    { "item": "Fio Amigurumi branco (bochechas e barriga)", "detalhe": "aprox. 25 g" },
    { "item": "Fio Amigurumi laranja escuro / marrom e vermelho (botas e carapaça)", "detalhe": "aprox. 15 g" },
    { "item": "Fio vermelho (língua/espinhos)", "detalhe": "aprox. 10 g" },
    { "item": "Agulha de crochê", "detalhe": "2,5 mm" },
    { "item": "Olhos de segurança pretos com borda branca", "detalhe": "12 mm (ovais)" }
  ],
  "abreviacoes": [
    { "sigla": "AM", "significado": "Anel mágico" },
    { "sigla": "pb", "significado": "Ponto baixo" },
    { "sigla": "aum", "significado": "Aumento" },
    { "sigla": "dim", "significado": "Diminuição" }
  ],
  "notas": [
    "A cabeça do Yoshi possui formatos protuberantes que são costurados juntos depois."
  ],
  "partes": [
    {
      "nome": "Focinho Grande (Verde)",
      "quantidade": 1,
      "carreiras": [
        { "numero": "C1", "instrucao": "AM, 6 pb", "total": 6 },
        { "numero": "C2", "instrucao": "aum em cada ponto", "total": 12 },
        { "numero": "C3", "instrucao": "*1 pb, aum* repita 6×", "total": 18 },
        { "numero": "C4", "instrucao": "*2 pb, aum* repita 6×", "total": 24 },
        { "numero": "C5–C8", "instrucao": "pb em cada ponto", "total": 24 },
        { "numero": "C9", "instrucao": "*2 pb, dim* repita 6×", "total": 18 }
      ],
      "fechamento": "Rechear muito bem para dar a aparência fofinha redonda do Yoshi. Deixar fio para costurar na cabeça principal."
    },
    {
      "nome": "Cabeça Principal e Bochechas",
      "quantidade": 1,
      "carreiras": [
        { "numero": "C1", "instrucao": "Com verde: AM, 6 pb", "total": 6 },
        { "numero": "C2", "instrucao": "aum em cada ponto", "total": 12 },
        { "numero": "C3", "instrucao": "*1 pb, aum* repita 6×", "total": 18 },
        { "numero": "C4", "instrucao": "*2 pb, aum* repita 6×", "total": 24 },
        { "numero": "C5–C10", "instrucao": "pb em cada ponto", "total": 24 },
        { "numero": "C11", "instrucao": "*2 pb, dim* repita 6×", "total": 18 }
      ],
      "fechamento": "Rechear a bola que será os olhos e topo da cabeça."
    },
    {
      "nome": "Corpo (Verde e Branco)",
      "quantidade": 1,
      "carreiras": [
        { "numero": "C1", "instrucao": "Com verde: AM, 6 pb", "total": 6 },
        { "numero": "C2", "instrucao": "aum em cada ponto", "total": 12 },
        { "numero": "C3", "instrucao": "*1 pb, aum* repita 6×", "total": 18 },
        { "numero": "C4", "instrucao": "*2 pb, aum* repita 6×", "total": 24 },
        { "numero": "C5", "instrucao": "Trocar para branco na frente para a barriga (8 pontos) e verde no resto.", "total": 24 },
        { "numero": "C6–C10", "instrucao": "Manter a mudança de cor, pb em cada ponto", "total": 24 },
        { "numero": "C11", "instrucao": "*2 pb, dim* repita 6× mantendo as cores", "total": 18 },
        { "numero": "C12", "instrucao": "*1 pb, dim* repita 6×", "total": 12 }
      ],
      "fechamento": "Deixar fio verde longo para costurar na cabeça."
    }
  ],
  "montagem": [
    { "texto": "Costure o Focinho Grande na frente da Cabeça Principal." },
    { "texto": "Prenda os olhos com feltro branco alongado por trás para o estilo cartoon." },
    { "texto": "Costure o corpo à cabeça, alinhando a barriga branca à frente do focinho." },
    { "texto": "Adicione as botas marrom alaranjadas nas pernas do boneco." },
    { "texto": "Nas costas, costure a pequena sela vermelha em formato de casca redonda e três espinhos vermelhos atrás do pescoço." }
  ],
  "acabamento": [
    { "texto": "Finalize os arremates e certifique-se de que a cauda grossa ajuda no equilíbrio dele sentado." }
  ]
};

const superCogumelo: Receita = {
  "slug": "super-cogumelo",
  "nome": "Super Cogumelo",
  "categoria": "videogames",
  "nivel": "iniciante",
  "tamanhoFinal": "~8 cm",
  "tempoEstimado": "2–3 horas",
  "emoji": "🍄",
  "corCard": "#FFF1F1",
  "imagemUrl": "/receitas/super-cogumelo/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi vermelho (tampa)",
      "detalhe": "aprox. 20 g"
    },
    {
      "item": "Fio Amigurumi bege claro (base/pé)",
      "detalhe": "aprox. 15 g"
    },
    {
      "item": "Fio Amigurumi branco (bolas/manchas)",
      "detalhe": "aprox. 10 g"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "3,0 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    },
    {
      "sigla": "pb",
      "significado": "Ponto baixo"
    }
  ],
  "notas": [
    "As bolinhas brancas são pequenos círculos de AM com 6 pb costurados na tampa vermelha."
  ],
  "partes": [
    {
      "nome": "Tampa do Cogumelo (Vermelho)",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "AM, 6 pb",
          "total": 6
        },
        {
          "numero": "C2",
          "instrucao": "aum em cada ponto",
          "total": 12
        },
        {
          "numero": "C3",
          "instrucao": "*1 pb, aum* repita 6×",
          "total": 18
        },
        {
          "numero": "C4",
          "instrucao": "*2 pb, aum* repita 6×",
          "total": 24
        },
        {
          "numero": "C5",
          "instrucao": "*3 pb, aum* repita 6×",
          "total": 30
        },
        {
          "numero": "C6–C8",
          "instrucao": "pb em cada ponto",
          "total": 30
        },
        {
          "numero": "C9",
          "instrucao": "*3 pb, dim* repita 6×",
          "total": 24
        }
      ],
      "fechamento": "Arrematar e deixar fio para costurar na base."
    }
  ],
  "montagem": [
    {
      "texto": "Costure as bolinhas brancas espalhadas na tampa vermelha."
    },
    {
      "texto": "Recheie bem a tampa e a base bege, depois costure-as juntas."
    }
  ],
  "acabamento": [
    {
      "texto": "Borde dois olhos pretos verticais na base bege."
    }
  ]
};

const naruto: Receita = {
  "slug": "naruto",
  "nome": "Naruto Uzumaki",
  "categoria": "personagens",
  "nivel": "intermediario",
  "tamanhoFinal": "~15 cm",
  "tempoEstimado": "5–6 horas",
  "emoji": "🍥",
  "corCard": "#FDEBD0",
  "imagemUrl": "/receitas/naruto/capa.jpg",
  "videoUrl": "https://www.youtube.com/embed/Q23T2Z8J9U0",
  "materiais": [
    { "item": "Fio Amigurumi cor da pele", "detalhe": "aprox. 20 g" },
    { "item": "Fio Amigurumi amarelo vibrante (cabelo)", "detalhe": "aprox. 30 g" },
    { "item": "Fio Amigurumi laranja (roupa principal)", "detalhe": "aprox. 30 g" },
    { "item": "Fio azul escuro/preto (sandálias e bandana)", "detalhe": "aprox. 15 g" },
    { "item": "Fio prateado ou feltro cinza", "detalhe": "para o centro da bandana" },
    { "item": "Agulha de crochê", "detalhe": "2,5 mm" },
    { "item": "Olhos de segurança", "detalhe": "9 mm azuis" }
  ],
  "abreviacoes": [
    { "sigla": "AM", "significado": "Anel mágico" },
    { "sigla": "pb", "significado": "Ponto baixo" },
    { "sigla": "aum", "significado": "Aumento" },
    { "sigla": "dim", "significado": "Diminuição" }
  ],
  "notas": [
    "A bandana é feita como uma fita costurada ou amarrada na cabeça."
  ],
  "partes": [
    {
      "nome": "Corpo (Laranja e Azul)",
      "quantidade": 1,
      "carreiras": [
        { "numero": "C1", "instrucao": "Com fio azul (pé): AM, 6 pb", "total": 6 },
        { "numero": "C2", "instrucao": "aum em cada ponto", "total": 12 },
        { "numero": "C3", "instrucao": "Mudar para fio laranja (calça): pb em cada ponto", "total": 12 },
        { "numero": "C4–C5", "instrucao": "pb em cada ponto. Arremate a perna 1, junte à perna 2 com 2 corr", "total": 12 },
        { "numero": "C6", "instrucao": "Juntando pernas: 12 pb + 2 pb nas corr + 12 pb + 2 pb nas corr", "total": 28 },
        { "numero": "C7–C11", "instrucao": "pb em cada ponto. A partir da C8 adicione alguns detalhes laterais azuis da jaqueta.", "total": 28 },
        { "numero": "C12", "instrucao": "*5 pb, dim* repita 4×", "total": 24 },
        { "numero": "C13", "instrucao": "pb em cada ponto", "total": 24 },
        { "numero": "C14", "instrucao": "*2 pb, dim* repita 6×", "total": 18 },
        { "numero": "C15", "instrucao": "Troque para pele (pescoço): *1 pb, dim* repita 6×", "total": 12 }
      ],
      "fechamento": "Recheie firme e deixe fio laranja ou azul para detalhes finais da gola."
    },
    {
      "nome": "Cabeça",
      "quantidade": 1,
      "carreiras": [
        { "numero": "C1", "instrucao": "Com fio cor de pele: AM, 6 pb", "total": 6 },
        { "numero": "C2", "instrucao": "aum em cada ponto", "total": 12 },
        { "numero": "C3", "instrucao": "*1 pb, aum* repita 6×", "total": 18 },
        { "numero": "C4", "instrucao": "*2 pb, aum* repita 6×", "total": 24 },
        { "numero": "C5", "instrucao": "*3 pb, aum* repita 6×", "total": 30 },
        { "numero": "C6", "instrucao": "*4 pb, aum* repita 6×", "total": 36 },
        { "numero": "C7–C13", "instrucao": "pb em cada ponto", "total": 36, "nota": "Olhos azuis de 9 mm entre C10-C11." },
        { "numero": "C14", "instrucao": "*4 pb, dim* repita 6×", "total": 30 },
        { "numero": "C15", "instrucao": "*3 pb, dim* repita 6×", "total": 24 },
        { "numero": "C16", "instrucao": "*2 pb, dim* repita 6×", "total": 18 },
        { "numero": "C17", "instrucao": "*1 pb, dim* repita 6×", "total": 12 }
      ],
      "fechamento": "Rechear cabeça e arrematar fios soltos."
    },
    {
      "nome": "Cabelo Espetado Amarelo",
      "quantidade": 1,
      "carreiras": [
        { "numero": "C1", "instrucao": "Em AM, 6 pb (amarelo)", "total": 6 },
        { "numero": "C2", "instrucao": "aum em cada ponto", "total": 12 },
        { "numero": "C3", "instrucao": "Faça mechas: *8 corr, volta com 7 mpa, pbx no próximo ponto da base*. Repetir em todos os 12 pontos.", "total": 0 }
      ],
      "fechamento": "Deixe fio muito longo. Essa peruca formará os picos do cabelo de Naruto."
    }
  ],
  "montagem": [
    { "texto": "Costure o topo da cabeça com a base de cabelo e posicione cada pico dourado ao redor do rosto." },
    { "texto": "Borde 3 finos bigodes de gato (Kurama) em cada bochecha." },
    { "texto": "Faça a bandana com uma tira azul marinho de crochê plano e costure o símbolo espiral vermelho no braço esquerdo." },
    { "texto": "Adicione o símbolo da Folha na bandana (com fio preto em feltro prateado) e amarre na testa do Naruto." }
  ],
  "acabamento": [
    { "texto": "Finalize os arremates da gola branca da jaqueta de inverno dele." }
  ]
};

const kakashi: Receita = {
  "slug": "kakashi",
  "nome": "Kakashi Hatake",
  "categoria": "personagens",
  "nivel": "intermediario",
  "tamanhoFinal": "~14 cm",
  "tempoEstimado": "5–6 horas",
  "emoji": "🎭",
  "corCard": "#EAF1F5",
  "imagemUrl": "/receitas/kakashi/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi cinza (cabelo)",
      "detalhe": "aprox. 25 g"
    },
    {
      "item": "Fio azul escuro e verde musgo (uniforme)",
      "detalhe": "aprox. 35 g"
    },
    {
      "item": "Fio Amigurumi pele",
      "detalhe": "aprox. 15 g"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "2,5 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    }
  ],
  "notas": [
    "A máscara azul escura deve cobrir a boca e o nariz, subindo até perto dos olhos de segurança."
  ],
  "partes": [
    {
      "nome": "Colete Verde",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "Fazer 16 corr, voltar com 15 pb",
          "total": 15
        },
        {
          "numero": "C2–C6",
          "instrucao": "1 corr, virar, 15 pb",
          "total": 15
        }
      ],
      "fechamento": "Prender no corpo."
    }
  ],
  "montagem": [
    {
      "texto": "Costure a máscara cobrindo a parte inferior da face."
    },
    {
      "texto": "Costure o cabelo espetado cinza e a bandana inclinada cobrindo um dos olhos."
    },
    {
      "texto": "Vista o colete verde por cima da roupa azul escura."
    }
  ],
  "acabamento": [
    {
      "texto": "Esconda os fios sob o colete."
    }
  ]
};

const sasuke: Receita = {
  "slug": "sasuke",
  "nome": "Sasuke Uchiha",
  "categoria": "personagens",
  "nivel": "intermediario",
  "tamanhoFinal": "~14 cm",
  "tempoEstimado": "5–6 horas",
  "emoji": "🦅",
  "corCard": "#EAF0F6",
  "imagemUrl": "/receitas/sasuke/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi preto (cabelo espetado)",
      "detalhe": "aprox. 25 g"
    },
    {
      "item": "Fio Amigurumi cinza e azul marinho (roupa)",
      "detalhe": "aprox. 35 g"
    },
    {
      "item": "Fio Amigurumi pele",
      "detalhe": "aprox. 20 g"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "2,5 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    }
  ],
  "notas": [
    "O cabelo do Sasuke possui mechas longas que caem nas laterais do rosto cobrindo parte da testa."
  ],
  "partes": [
    {
      "nome": "Cabelo Espetado Preto",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "AM, 6 pb",
          "total": 6
        },
        {
          "numero": "C2",
          "instrucao": "aum em cada ponto",
          "total": 12
        },
        {
          "numero": "C3",
          "instrucao": "Para cada ponto, faça mechas longas com 8 corr e volte com pb para moldar as pontas",
          "total": 12
        }
      ],
      "fechamento": "Costurar no topo da cabeça."
    }
  ],
  "montagem": [
    {
      "texto": "Costure a cabeça no corpo."
    },
    {
      "texto": "Posicione o cabelo de modo a criar a franja característica nas laterais."
    },
    {
      "texto": "Borde o símbolo Uchiha (leque vermelho e branco) nas costas da camisa (opcional)."
    }
  ],
  "acabamento": [
    {
      "texto": "Arremate as sobras."
    }
  ]
};

const semRostoGhibli: Receita = {
  "slug": "sem-rosto-ghibli",
  "nome": "Sem Rosto (Kaonashi)",
  "categoria": "ghibli",
  "nivel": "iniciante",
  "tamanhoFinal": "16 cm",
  "tempoEstimado": "2–3 horas",
  "emoji": "👻",
  "corCard": "#E6E6E6",
  "imagemUrl": "/receitas/sem-rosto-ghibli/capa.jpg",
  "materiais": [
    {
      "item": "Fio Amigurumi preto (corpo principal)",
      "detalhe": "aprox. 40 g"
    },
    {
      "item": "Fio Amigurumi branco (máscara facial)",
      "detalhe": "aprox. 10 g"
    },
    {
      "item": "Fios roxo e preto (detalhes da máscara)",
      "detalhe": "aprox. 5 g cada"
    },
    {
      "item": "Agulha de crochê",
      "detalhe": "3,0 mm"
    }
  ],
  "abreviacoes": [
    {
      "sigla": "AM",
      "significado": "Anel mágico"
    },
    {
      "sigla": "pb",
      "significado": "Ponto baixo"
    },
    {
      "sigla": "dim",
      "significado": "Diminuição"
    }
  ],
  "notas": [
    "O corpo é feito em formato de cone longo, largo na base e afunilando em direção ao topo."
  ],
  "partes": [
    {
      "nome": "Corpo Cone (Preto)",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "AM, 6 pb",
          "total": 6
        },
        {
          "numero": "C2",
          "instrucao": "aum em cada ponto",
          "total": 12
        },
        {
          "numero": "C3",
          "instrucao": "*1 pb, aum* repita 6×",
          "total": 18
        },
        {
          "numero": "C4–C30",
          "instrucao": "pb em cada ponto, diminuindo levemente a cada 4 carreiras para afunilar",
          "total": 12
        }
      ],
      "fechamento": "Rechear muito bem a base para que ele fique em pé firme."
    },
    {
      "nome": "Máscara Oval (Branco)",
      "quantidade": 1,
      "carreiras": [
        {
          "numero": "C1",
          "instrucao": "Fazer 6 corr, voltar com 5 pb ao redor criando um oval",
          "total": 10
        },
        {
          "numero": "C2",
          "instrucao": "aum nos cantos",
          "total": 14
        }
      ],
      "fechamento": "Deixar fio longo para costura."
    }
  ],
  "montagem": [
    {
      "texto": "Borde os detalhes roxos em formato de triângulos na parte superior e inferior da máscara branca."
    },
    {
      "texto": "Borde dois olhos pretos finos horizontais e uma boca pequena no centro da máscara."
    },
    {
      "texto": "Costure a máscara oval branca no topo frontal do corpo preto."
    }
  ],
  "acabamento": [
    {
      "texto": "Arremate as pontas e remodele a base cilíndrica."
    }
  ]
};
export const RECEITAS: Receita[] = [
  kirby,
  gatoKawaii,
  coelhoKawaii,
  pikachu,
  totoro,
  baseFunkoPop,
  bobEsponja,
  stitch,
  capivaraMochila,
  raposaChubby,
  orelhasPooh,
  pandaChapeu,
  demogorgon,
  tristeza,
  harryPotter,
  hermioneGranger,
  ronyWeasley,
  dobby,
  deanWinchester,
  samWinchester,
  castiel,
  rickGrimes,
  darylDixon,
  zumbiTwd,
  mario,
  luigi,
  yoshi,
  superCogumelo,
  naruto,
  kakashi,
  sasuke,
  semRostoGhibli
];

export function getReceita(slug: string): Receita | undefined {
  return RECEITAS.find(r => r.slug === slug);
}

export function getReceitasPorCategoria(categoria: string): Receita[] {
  return RECEITAS.filter(r => r.categoria === categoria);
}
