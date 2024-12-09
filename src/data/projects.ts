import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'fc',
    title: {
      en: 'Ferreira Costa',
      pt: 'Ferreira Costa',
    },
    description: {
      en: 'Home Center Ferreira Costa — At Ferreira Costa you will find everything for home, decoration and construction. Access our website. Construction materials, flooring and coverings, tools, furniture, lighting and decoration. Fast delivery. Pick up in stores. Exclusive offers. Products with free shipping.',
      pt: 'Home Center Ferreira Costa — Na Ferreira Costa você encontra tudo para casa, decoração e construção. Acesse nosso site. Materiais p/ obras, pisos e revestimentos, ferramentas, móveis, Iluminação e decoração. Entrega rápida. Retire nas lojas. Ofertas exclusivas. Produtos com frete grátis.',
    },
    type: 'web',
    image: 'https://images.sympla.com.br/64affc49b9e2b.png',
    demo: '/demos/ferreiracosta.gif',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    links: {
      website: 'https://www.ferreiracosta.com/',
      github: 'https://github.com/arcorreiaa',
    },
  },
  {
    id: 'fc-app',
    title: {
      en: 'Ferreira Costa',
      pt: 'Ferreira Costa',
    },
    description: {
      en: 'Home Center Ferreira Costa — At Ferreira Costa you will find everything for home, decoration and construction. Access our website. Construction materials, flooring and coverings, tools, furniture, lighting and decoration. Fast delivery. Pick up in stores. Exclusive offers. Products with free shipping.',
      pt: 'Home Center Ferreira Costa — Na Ferreira Costa você encontra tudo para casa, decoração e construção. Acesse nosso site. Materiais p/ obras, pisos e revestimentos, ferramentas, móveis, Iluminação e decoração. Entrega rápida. Retire nas lojas. Ofertas exclusivas. Produtos com frete grátis.',
    },
    type: 'app',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MHOVkhUZ7Z6JOSqaJaqQfCCxyWI3Xtgg0Q&s',
    demo: '/demos/fc-app.gif',
    technologies: ['React Native', 'Firebase', 'Redux'],
    links: {
      playStore:
        'https://play.google.com/store/apps/details?id=com.appfc&hl=pt_BR',
      appStore:
        'https://apps.apple.com/br/developer/ferreira-costa/id1507210134',
    },
  },
  {
    id: 'ecommerce-web',
    title: {
      en: 'Modern E-commerce Platform',
      pt: 'Plataforma E-commerce Moderna',
    },
    description: {
      en: 'A full-featured e-commerce website with real-time inventory, secure payments, and responsive design.',
      pt: 'Um site e-commerce completo com inventário em tempo real, pagamentos seguros e design responsivo.',
    },
    type: 'web',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    demo: '/demos/ecommerce-web.gif',
    technologies: ['Next.js', 'Stripe', 'MongoDB'],
    links: {
      website: 'https://ecommerce.example.com',
      github: 'https://github.com/example/ecommerce',
    },
  },
  {
    id: 'ecommerce-app',
    title: {
      en: 'Mobile Shopping Experience',
      pt: 'Experiência de Compras Mobile',
    },
    description: {
      en: 'A native mobile shopping application with AR product preview and seamless checkout process.',
      pt: 'Um aplicativo nativo de compras com prévia de produtos em AR e processo de checkout simplificado.',
    },
    type: 'app',
    image:
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80',
    demo: '/demos/ecommerce-app.gif',
    technologies: ['React Native', 'GraphQL', 'AWS'],
    links: {
      playStore:
        'https://play.google.com/store/apps/details?id=com.example.shop',
      appStore: 'https://apps.apple.com/app/shop/id987654321',
    },
  },
];
