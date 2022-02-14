/** Open and close time for each weekday
 * (holidays have the same hours as sunday)*/
export const OPEN_HOURS = {
  // always in the format hh:mm or empty string if closed
  mon: {
    label: 'Segunda',
    open: ['09h00', '14h30'],
    close: ['12h30', '19h30'],
  },
  tue: {
    label: 'Terça',
    open: ['09h00'],
    close: ['18h00'],
  },
  wed: {
    label: 'Quarta',
    open: ['09h00'],
    close: ['18h00'],
  },
  thu: {
    label: 'Quinta',
    open: ['09h00'],
    close: ['18h00'],
  },
  fri: {
    label: 'Sexta',
    open: ['09h00'],
    close: ['18h00'],
  },
  sat: {
    label: 'Sábado',
    open: ['09h00'],
    close: ['18h00'],
  },
  sun: {
    label: 'Dom e Fer',
    open: [''],
    close: [''],
  },
};
