import img1 from 'url:../img/temp_chair.jpg';
import img2 from 'url:../img/temp_xray.jpg';
import img3 from 'url:../img/temp_cake.jpg';
import imgToday from 'url:../img/logo.jpg';

export const IMG_TODAY = imgToday;

// Temporary - just for placeholder
const months = {
  // prettier-ignore
  pt: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  // prettier-ignore
  en: ['January','February','March','April','May','June','July','August','September','October','November','Dezember'],
};
const randomDate = lang =>
  `${(Math.trunc(Math.random() * 30 + 1) + '').padStart(2, 0)} ${
    months[lang][Math.floor(Math.random() * 12)]
  }`;

export const CHRONOLOGY = {
  pt: [
    2019,
    {
      date: randomDate('pt'),
      text: 'Primeiro Paciente',
      image: img1,
    },
    {
      date: randomDate('pt'),
      text: 'Lorem ipsum dolor sit amet',
      image: img2,
    },
    2020,
    {
      date: randomDate('pt'),
      text: 'Lorem ipsum dolor sit amet',
      image: img3,
    },
    2022,
  ],
  en: [
    2019,
    {
      date: randomDate('en'),
      text: 'First Patient',
      image: img1,
    },
    {
      date: randomDate('en'),
      text: 'Lorem ipsum dolor sit amet',
      image: img2,
    },
    2020,
    {
      date: randomDate('en'),
      text: 'Lorem ipsum dolor sit amet',
      image: img3,
    },
    2022,
  ],
};
