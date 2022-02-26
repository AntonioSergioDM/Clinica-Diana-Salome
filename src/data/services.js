/**Path to full image of lazy image with data-src="1" */
import imgLazy1 from 'url:../img/logo-lazy.jpg';
import img1 from 'url:../img/dentes.jpeg';
import imgLazy2 from 'url:../img/logo-lazy.jpg';
import img2 from 'url:../img/crianca2.jpeg';
import imgLazy3 from 'url:../img/logo-lazy.jpg';
import img3 from 'url:../img/diana1.jpeg';

export const LEARN_MORE_BTN = {
  pt: 'Saiba mais',
  en: 'Learn more',
};

export const SERVICES = {
  pt: [
    {
      title: 'Aparelho Dentário',
      imageLazy: imgLazy1,
      image: img1,
      icon: 'monitor', //not sure
      text: 'O uso do aparelho dentário permite corrigir a orientação dos dentes',
      link: 'https://pt.wikipedia.org/wiki/Aparelho_ortod%C3%B4ntico',
    },
    {
      title: 'Cheque Dentista',
      imageLazy: imgLazy2,
      image: img2,
      icon: 'trending-up', //not sure
      text: 'Texto do serviço 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim est, rutrum non commodo id, venenatis vitae elit. Praesent posuere elit sapien, eu malesuada nibh suscipit ac. Donec vitae purus neque. Vestibulum mollis sapien in risus tempus sollicitudin. Proin porta porta sodales. Suspendisse at porttitor nisi. Vestibulum vitae erat volutpat, fringilla purus nec, mollis enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      link: 'https://www.wikipedia.com',
    },
    {
      title: 'Serviço 3',
      imageLazy: imgLazy3,
      image: img3,
      icon: 'credit-card', //not sure
      text: 'Texto do serviço 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim est, rutrum non commodo id, venenatis vitae elit. Praesent posuere elit sapien, eu malesuada nibh suscipit ac. Donec vitae purus neque. Vestibulum mollis sapien in risus tempus sollicitudin. Proin porta porta sodales. Suspendisse at porttitor nisi. Vestibulum vitae erat volutpat, fringilla purus nec, mollis enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      link: 'https://www.wikipedia.com',
    },
  ],
  en: [
    {
      title: 'Treatment 1',
      imageLazy: imgLazy1,
      image: img1,
      icon: 'monitor', //not sure
      text: 'Text of Treatment 1',
      link: 'https://www.wikipedia.com',
    },
    {
      title: 'Treatment 2',
      imageLazy: imgLazy2,
      image: img2,
      icon: 'trending-up', //not sure
      text: 'Text of Treatment 2',
      link: 'https://www.wikipedia.com',
    },
    {
      title: 'Treatment 3',
      imageLazy: imgLazy3,
      image: img3,
      icon: 'credit-card', //not sure
      text: 'Text of Treatment 3',
      link: 'https://www.wikipedia.com',
    },
  ],
};
