import imgPhone from 'url:../img/temp_cellphone.png';
import imgTele from 'url:../img/temp_telephone.png';
import imgEmail from 'url:../img/temp_mail.png';

export const CONTACTS = {
  pt: [
    {
      title: 'Telemóvel',
      value: 'tlm.: 932 220 731',
      text: 'Ligue-nos agora!',
      link: 'tel:932220731',
      image: imgPhone,
    },
    {
      title: 'Telefone',
      value: 'tel.: 259 104 774',
      text: 'Ligue-nos agora!',
      link: 'tel:259104774',
      image: imgTele,
    },
    {
      title: 'Email',
      value: 'clinica.mail@gmail.com',
      text: 'Envie-nos <br> um e-mail!',
      link: 'mailto:xxxxxxxx',
      image: imgEmail,
    },
  ],
  en: [
    {
      title: 'Mobile Phone',
      value: '+351 932 220 731',
      text: 'Call us now!',
      link: 'tel:+351932220731',
      image: imgPhone,
    },
    {
      title: 'Telephone',
      value: '+351 259 104 774',
      text: 'Call us now!',
      link: 'tel:+351259104774',
      image: imgTele,
    },
    {
      title: 'Email',
      value: 'clinica.mail@gmail.com',
      text: 'Send us <br> an e-mail!',
      link: 'mailto:clinica.mail@gmail.com',
      image: imgEmail,
    },
  ],
};
