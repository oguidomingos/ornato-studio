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
  category: 'realismo' | 'fineline' | 'blackwork' | 'cobertura' | 'concept'
}

export const portfolioItems: PortfolioItem[] = [
  { id: 1, src: 'images/realismo-01.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 2, src: 'images/realismo-02.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 3, src: 'images/realismo-03.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 4, src: 'images/realismo-04.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 5, src: 'images/realismo-05.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 6, src: 'images/realismo-06.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 7, src: 'images/realismo-07.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 8, src: 'images/realismo-08.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 9, src: 'images/realismo-09.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 10, src: 'images/realismo-10.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 11, src: 'images/realismo-11.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 12, src: 'images/realismo-12.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 13, src: 'images/realismo-13.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 14, src: 'images/realismo-14.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 15, src: 'images/realismo-15.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 16, src: 'images/realismo-16.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 17, src: 'images/realismo-17.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 18, src: 'images/realismo-18.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 19, src: 'images/realismo-19.jpg', alt: 'Tatuagem realismo', category: 'realismo' },
  { id: 20, src: 'images/fineline-01.jpg', alt: 'Tatuagem fine line floral', category: 'fineline' },
  { id: 21, src: 'images/fineline-02.jpg', alt: 'Tatuagem fine line', category: 'fineline' },
  { id: 22, src: 'images/fineline-03.jpg', alt: 'Tatuagem fine line', category: 'fineline' },
  { id: 23, src: 'images/fineline-04.jpg', alt: 'Tatuagem fine line', category: 'fineline' },
  { id: 24, src: 'images/fineline-05.jpg', alt: 'Tatuagem fine line', category: 'fineline' },
  { id: 25, src: 'images/blackwork-01.jpg', alt: 'Tatuagem blackwork', category: 'blackwork' },
  { id: 26, src: 'images/cobertura-01.jpg', alt: 'Cobertura de tatuagem', category: 'cobertura' },
  { id: 27, src: 'images/cobertura-02.jpg', alt: 'Cobertura de tatuagem', category: 'cobertura' },
  { id: 28, src: 'images/concept-01.jpg', alt: 'Tatuagem concept art', category: 'concept' },
  { id: 29, src: 'images/concept-02.jpg', alt: 'Tatuagem concept art', category: 'concept' },
  { id: 30, src: 'images/concept-03.jpg', alt: 'Tatuagem concept art', category: 'concept' },
  { id: 31, src: 'images/concept-04.jpg', alt: 'Tatuagem concept art', category: 'concept' },
]

export interface Service {
  title: string
  description: string
  priceRange: string
  duration: string
}

export const services: Service[] = [
  {
    title: 'Realismo',
    description:
      'Reprodução fiel de imagens com riqueza de detalhes, sombras e texturas. Retratos, animais e natureza em preto e cinza.',
    priceRange: 'A partir de R$ 600',
    duration: '3 a 8 horas',
  },
  {
    title: 'Fine Line & Floral',
    description:
      'Traços finos e delicados, perfeitos para designs minimalistas, florais e botânicos. Sutileza e refinamento.',
    priceRange: 'A partir de R$ 300',
    duration: '1 a 3 horas',
  },
  {
    title: 'Blackwork',
    description:
      'Preenchimentos sólidos em preto, criando contrastes marcantes e composições ousadas com impacto visual.',
    priceRange: 'A partir de R$ 400',
    duration: '2 a 5 horas',
  },
  {
    title: 'Cobertura',
    description:
      'Transformação de tatuagens antigas em novas obras de arte. Técnicas especializadas para coberturas perfeitas.',
    priceRange: 'Sob consulta',
    duration: 'Variável',
  },
  {
    title: 'Concept Art',
    description:
      'Criação autoral e exclusiva. Peças únicas que mesclam estilos e conceitos para uma tatuagem verdadeiramente sua.',
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
