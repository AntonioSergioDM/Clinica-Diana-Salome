/**Path to full image of lazy image with data-src="1" */
import imgLazy1 from 'url:../img/logo-lazy.jpg';
import img1 from 'url:../img/services/operacao.jpeg';
import imgLazy2 from 'url:../img/logo-lazy.jpg';
import img2 from 'url:../img/services/crianca2.jpeg';
import imgLazy3 from 'url:../img/logo-lazy.jpg';
import img3 from 'url:../img/services/estetica.jpeg';
import img4 from 'url:../img/services/crianca1.jpeg';
import img5 from 'url:../img/services/paciente1.jpeg';
import img6 from 'url:../img/services/selfie2.jpeg';
import img7 from 'url:../img/services/branqueamento.jpeg';

export const LEARN_MORE_BTN = {
  pt: 'Saiba mais',
  en: 'Learn more',
};

export const SERVICES = {
  pt: [
    {
      title: 'Ortodontia',
      imageLazy: imgLazy1,
      image: img1,
      icon: '', //not sure
      text: `Área especializada na correção da posição e alinhamento dentário.<br>
      São vários os tipos de aparelhos dentários com os quais trabalhamos, inclusive o aparelho estético e invisalign (aparelho invisível).`,
      link: 'https://pt.wikipedia.org/wiki/Aparelho_ortod%C3%B4ntico',
    },
    {
      title: 'Cheque Dentista',
      imageLazy: imgLazy2,
      image: img2,
      icon: '', //not sure
      text: `O Cheque Dentista facilita o acesso a tratamentos preventivos ou curativos, de forma gratuita para o paciente. Têm direito aos mesmos: crianças e jovens até aos 18 anos, grávidas, idosos com complemento solidário e pacientes com HIV.`,
      link: 'https://www.sns24.gov.pt/servico/pedir-cheques-dentista/',
    },
    {
      title: 'Medicina Estética Facial',
      imageLazy: imgLazy3,
      image: img3,
      icon: '', //not sure
      text: `Aplicação de Toxina Botulínica (Botox) para tratamento de rugas e linhas de expressão, bruxismo, sorriso gengival, sudorese, dor cervical e cefaleia tensional.<br>
      Preenchimento com Ácido Hialurónico: volume e contorno labial, sulco nasolabial, mesoterapia.`,
      link: 'https://www.wikipedia.com',
    },
    {
      title: 'Odontopediatria',
      imageLazy: imgLazy3,
      image: img4,
      icon: '', //not sure
      text: `Área dedicada à saúde oral de bebés, crianças e adolescentes.<br>
      Tratamentos preventivos são fundamentais para que as crianças tenham uma boa saúde oral ao longo da vida.`,
      link: '#faq',
    },
    {
      title: 'Reabilitação Oral',
      imageLazy: imgLazy3,
      image: img5,
      icon: '', //not sure
      text: `Recuperação do normal funcionamento da boca quando há perda de dentes e recuperar funções como a oclusão, a mastigação e a dicção, através de Implantes Dentários, Próteses fixas ou removíveis, Facetas, Coroas... `,
      link: 'https://www.wikipedia.com',
    },
    {
      title: 'Atendimento ao Domicílio',
      imageLazy: imgLazy3,
      image: img6,
      icon: '', //not sure
      text: `Possibilidade de atendimento ao domicílio, em caso de dificuldade de deslocação à clínica.`,
      link: '#contacts',
    },
    {
      title: 'Branqueamento Dentário',
      imageLazy: imgLazy3,
      image: img7,
      icon: '', //not sure
      text: `Quer um sorriso bonito e radiante? Faça o seu branqueamento dentário, de forma segura, simples, sem desgaste dentário e com resultados incríveis.`,
      link: '',
    },
    // {
    //   title: '',
    //   imageLazy: imgLazy3,
    //   image: img6,
    //   icon: '', //not sure
    //   text: ``,
    //   link: '',
    // },
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
