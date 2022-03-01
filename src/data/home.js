import img1 from 'url:../img/logo.jpg';
import img2 from 'url:../img/placeholder/tratamentos_bw.jpeg';

export const HOME = {
  pt: [
    // {
    //   title: 'Sobre nós',
    //   text: 'Saiba o que temos feito',
    //   image: img1,
    //   href: 'about',
    // },
    {
      title: 'Tratamentos',
      text: 'Saiba o que podemos fazer por si',
      image: img2,
      href: 'services',
    },
  ],
  en: [
    {
      title: 'About us',
      text: 'See what we have been doing',
      image: img1,
      href: 'about',
    },
    {
      title: 'Treatments',
      text: 'See what we can do for you',
      image: img2,
      href: 'services',
    },
  ],
};
