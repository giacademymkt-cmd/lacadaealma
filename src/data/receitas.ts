export type Carreira = {
  numero: string;
  instrucao: string;
  total: number;
  nota?: string;
};

export type Parte = {
  nome: string;
  quantidade: number;
  carreiras: Carreira[];
  fechamento: string;
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
  montagem: string[];
  acabamento: string[];
  emoji: string;
  corCard: string;
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
// EXPORTAÇÕES
// ─────────────────────────────────────────────
export const RECEITAS: Receita[] = [kirby, gatoKawaii, coelhoKawaii];

export function getReceita(slug: string): Receita | undefined {
  return RECEITAS.find(r => r.slug === slug);
}

export function getReceitasPorCategoria(categoria: string): Receita[] {
  return RECEITAS.filter(r => r.categoria === categoria);
}
