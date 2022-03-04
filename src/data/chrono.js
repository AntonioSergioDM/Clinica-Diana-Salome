// Not being used - comented out on the jsonCreator.js

// After any change go to ../js/model.js and uncoment the DEV section. run locally to download the json files to the ./json folder and recoment the Dev section.

export const TODAY_ACHIEV = {
  pt: {
    date: 'Hoje',
    text: 'Estamos à sua espera',
    image: 'selfie2.jpeg',
    // icon:'icon-disc'
  },
  en: {
    date: 'Today',
    text: 'We are waiting for you',
    image: 'selfie2.jpeg',
    // icon:'icon-disc'
  },
};

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
      image: 'paciente1.jpeg',
    },
    {
      date: randomDate('pt'),
      text: 'Primeiro Raio-X',
      image: 'temp_xray.jpg',
    },
    2020,
    {
      date: randomDate('pt'),
      text: 'Acordo com MediCare',
      image: 'operacao1.jpeg',
    },
  ],
  en: [
    2019,
    {
      date: randomDate('en'),
      text: 'First Patient',
      image: 'paciente1.jpeg',
    },
    {
      date: randomDate('en'),
      text: 'Lorem ipsum dolor sit amet',
      image: 'temp_xray.jpg',
    },
    2020,
    {
      date: randomDate('en'),
      text: 'Lorem ipsum dolor sit amet',
      image: 'operacao1.jpeg',
    },
  ],
};
