export const WHATSAPP_NUMBER = '5561999999999'
export const WHATSAPP_MESSAGE = 'Olá! Gostaria de agendar uma sessão na Ornato Estudio.'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const SITE_CONFIG = {
  name: 'Ornato Estudio',
  tagline: 'Tatuagem autoral e exclusiva',
  description:
    'Estúdio de tatuagem autoral em Brasília-DF. Especialista em ornamental, fine line e realismo. Transforme sua ideia em arte na pele.',
  artist: 'Hanna Almeida',
  address: 'Plaza Mall, Águas Claras, Brasília-DF',
  instagram: '@ornatoestudio',
  instagramUrl: 'https://www.instagram.com/ornatoestudio',
}

export interface PortfolioItem {
  id: number
  src: string
  alt: string
  category: 'ornamental' | 'fineline' | 'realismo'
}

export const portfolioItems: PortfolioItem[] = [
  { id: 1, src: '/portfolio/ornamental-01.jpg', alt: 'Tatuagem ornamental em braço', category: 'ornamental' },
  { id: 2, src: '/portfolio/ornamental-02.jpg', alt: 'Tatuagem ornamental em costas', category: 'ornamental' },
  { id: 3, src: '/portfolio/ornamental-03.jpg', alt: 'Tatuagem ornamental geométrica', category: 'ornamental' },
  { id: 4, src: '/portfolio/ornamental-04.jpg', alt: 'Tatuagem ornamental mandala', category: 'ornamental' },
  { id: 5, src: '/portfolio/fineline-01.jpg', alt: 'Tatuagem fine line floral', category: 'fineline' },
  { id: 6, src: '/portfolio/fineline-02.jpg', alt: 'Tatuagem fine line minimalista', category: 'fineline' },
  { id: 7, src: '/portfolio/fineline-03.jpg', alt: 'Tatuagem fine line delicada', category: 'fineline' },
  { id: 8, src: '/portfolio/fineline-04.jpg', alt: 'Tatuagem fine line botânica', category: 'fineline' },
  { id: 9, src: '/portfolio/realismo-01.jpg', alt: 'Tatuagem realismo retrato', category: 'realismo' },
  { id: 10, src: '/portfolio/realismo-02.jpg', alt: 'Tatuagem realismo animal', category: 'realismo' },
  { id: 11, src: '/portfolio/realismo-03.jpg', alt: 'Tatuagem realismo natureza', category: 'realismo' },
  { id: 12, src: '/portfolio/realismo-04.jpg', alt: 'Tatuagem realismo floral', category: 'realismo' },
]

export interface Service {
  title: string
  description: string
  priceRange: string
  duration: string
}

export const services: Service[] = [
  {
    title: 'Ornamental',
    description:
      'Padrões geométricos, mandalas e arabescos que criam composições simétricas e elegantes. Traços precisos e detalhados.',
    priceRange: 'A partir de R$ 400',
    duration: '2 a 5 horas',
  },
  {
    title: 'Fine Line',
    description:
      'Traços finos e delicados, perfeitos para designs minimalistas, florais e botânicos. Sutileza e refinamento.',
    priceRange: 'A partir de R$ 300',
    duration: '1 a 3 horas',
  },
  {
    title: 'Realismo',
    description:
      'Reprodução fiel de imagens com riqueza de detalhes, sombras e texturas. Retratos, animais e natureza.',
    priceRange: 'A partir de R$ 600',
    duration: '3 a 8 horas',
  },
  {
    title: 'Projetos Personalizados',
    description:
      'Criação autoral e exclusiva a partir da sua ideia. Cada tatuagem é única e feita sob medida para você.',
    priceRange: 'Sob consulta',
    duration: 'Variável',
  },
]

export interface Testimonial {
  name: string
  text: string
  rating: number
  style: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Camila R.',
    text: 'A Hanna é uma artista incrível! Ela entendeu exatamente o que eu queria e o resultado ficou além das expectativas. O estúdio é super limpo e acolhedor.',
    rating: 5,
    style: 'Ornamental',
  },
  {
    name: 'Lucas M.',
    text: 'Fiz minha primeira tattoo com a Hanna e foi a melhor escolha. Ela tem uma paciência enorme e o traço é perfeito. Super recomendo!',
    rating: 5,
    style: 'Fine Line',
  },
  {
    name: 'Beatriz S.',
    text: 'Já fiz três tatuagens com a Hanna e cada uma ficou mais linda que a outra. Ela realmente se importa com cada detalhe do trabalho.',
    rating: 5,
    style: 'Realismo',
  },
  {
    name: 'Rafael T.',
    text: 'Profissionalismo do início ao fim. Desde o primeiro contato até os cuidados pós-tattoo, a Hanna é impecável. Resultado maravilhoso.',
    rating: 5,
    style: 'Ornamental',
  },
]

export interface FAQItem {
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    question: 'Como funciona o agendamento?',
    answer:
      'O agendamento é feito via WhatsApp. Envie sua referência e ideia, conversamos sobre o projeto, e agendamos a sessão. É necessário um sinal de 30% para confirmar a data.',
  },
  {
    question: 'Quanto custa uma tatuagem?',
    answer:
      'O valor varia conforme o tamanho, complexidade e estilo do projeto. Envie sua ideia via WhatsApp para receber um orçamento personalizado. Trabalhamos com valores justos e transparentes.',
  },
  {
    question: 'Dói muito fazer tatuagem?',
    answer:
      'A dor varia de pessoa para pessoa e da região do corpo. Áreas com mais pele e músculo doem menos. A Hanna trabalha com técnicas que minimizam o desconforto durante a sessão.',
  },
  {
    question: 'Quais cuidados devo ter antes da sessão?',
    answer:
      'Durma bem na noite anterior, alimente-se antes da sessão, evite bebidas alcoólicas 24h antes, mantenha a pele hidratada e não tome sol intenso na região. Vista roupas confortáveis.',
  },
  {
    question: 'Quais cuidados no pós-tattoo?',
    answer:
      'Lave com sabonete neutro, aplique pomada cicatrizante indicada, evite sol direto por 30 dias, não coce e não tire as casquinhas. A Hanna fornece um guia completo de cuidados após cada sessão.',
  },
  {
    question: 'Vocês fazem cobertura (cover-up)?',
    answer:
      'Sim! A Hanna tem experiência em coberturas. Envie uma foto da tatuagem que deseja cobrir via WhatsApp para avaliarmos as possibilidades.',
  },
  {
    question: 'Onde fica o estúdio?',
    answer:
      'O Ornato Estudio fica no Plaza Mall, Águas Claras, Brasília-DF. Local de fácil acesso, com estacionamento e próximo ao metrô.',
  },
]
