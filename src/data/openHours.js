// After any change go to ../js/model.js and uncoment the DEV section. run locally to download the json files to the ./json folder and recoment the Dev section.
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
