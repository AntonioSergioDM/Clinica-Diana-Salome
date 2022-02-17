/** Open and close time for each weekday
 * (holidays have the same hours as sunday)*/
export const OPEN_HOURS = {
  // always in the format hh:mm or empty string if closed
  mon: {
    open: ['09h30', '14h30'],
    close: ['12h30', '19h30'],
  },
  tue: {
    open: ['09h30', '14h30'],
    close: ['12h30', '19h30'],
  },
  wed: {
    open: ['09h30', '14h30'],
    close: ['12h30', '19h30'],
  },
  thu: {
    open: ['09h30', '14h30'],
    close: ['12h30', '19h30'],
  },
  fri: {
    open: ['09h30', '14h30'],
    close: ['12h30', '19h30'],
  },
  sat: {
    open: ['09h30'],
    close: ['12h30'],
  },
  sun: {
    open: [''],
    close: [''],
  },
};

export const WEEK_LABELS = {
  pt: [
    'Domingo e Feriado',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  // prettier-ignore
  en: ['Sunday and Holidays', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'],
};

export const CLOSE_LABELS = {
  pt: 'Encerrado',
  en: 'Closed',
};
