# Clínica Médica Dentária Diana Salomé :tooth:

## Website Features

- [Section Titles and Intros](./src/js/Views/sectionView.js)
  - [x] Logic
- [Navigation Tab](./src/js/Views/navView.js)
  - [x] Logic
  - [x] Language buttons
- [Open hours](./src/js/Views/openHoursView.js)
  - [x] Logic
- [Services](./src/js/Views/servicesView.js)
  - [x] Logic
  - [x] Action - Link to wiki
- [Map](./src/js/Views/map.js)
  - [x] Logic
  - [x] Action - Open Maps with directions
- [Testimonials](./src/js/Views/sliderView.js)
  - [x] Logic
- [FAQ](./src/js/Views/faqView.js)
  - [x] Logic
  - [ ] Action - Smooth scrolling (without nav bar over the question)
- [Contact form](./src/js/Views/modalView.js):
  - [ ] Logic
  - [x] Modal Logic
  - [ ] Choose how to contact:
    - ~~mailto + form~~
    - mailto + name input
    - mailto link + phone link
    - PostMail API
    - Form submition with netlify
- [Contact](./src/js/Views/contactsView.js)
  - [x] Logic
- [Footer](./src/js/Views/footerView.js)
  - [ ] Logic
  - [ ] Decide what to put
  - [ ] Action - Do something on click (w/smooth scroll)
- [About Us](./src/js/Views/chronoView.js)
  - [x] Logic
  - [ ] Action - Smooth scrolling (without nav bar over the year)
- [Team](./src/js/Views/teamView.js)
  - [x] Logic
- Multi-languages
  - Logic
    - [x] Titles and intros
    - [x] Open hours
    - [x] Services
    - [x] Testimonials
    - [x] Map
    - [x] Contact
    - [ ] Contact form
    - [x] FAQ
    - [x] Footer
    - [x] About Us
    - [x] Team
  - Data - pt & en - add more in the Config and data folders
    - [x] Titles and intros
    - [x] Open hours
    - [ ] Services
    - [ ] Testimonials
    - [x] Map
    - [ ] Contact
    - [ ] Contact form
    - [ ] FAQ
    - [x] Footer
    - [ ] About Us
    - [ ] Team

## Website Style

- [ ] Colors ([\_base.scss](./src/sass/_base.scss))
- [ ] Images
- Map
  - [ ] Icon ([markerIconPath](./src/js/Config/mapConfig.js))
  - [ ] Design ([TILES.url](./src/js/Config/mapConfig.js) - providers)
  - [ ] Popup ([\_map.scss](./src/sass/_map.scss))
- Testimonials
  - [ ] Fix arrow buttons (to svg?)
- Nav
  - [ ] Opaque (change color?) on hover ([\_nav.scss](./src/sass/_nav.scss))
  - [ ] Language buttons underline ([\_nav.scss](./src/sass/_nav.scss))
- FAQ
  - [ ] All style ([\_faq.scss](./src/sass/_faq.scss))
- Footer
  - [ ] Social media
- Team
  - [ ] Change description animation

## Other TODOS

- [ ] Polyfilling and transpiling
- [ ] Mobile compatible
- [ ] 'Separate' the sections - only one at a time - add to the url (eg.: .../#team)
- [ ] Lazy-load data using fetch and json (¿¿¿ different languages, different files ???)
- [ ] ¿¿¿ Dark mode ???
- Code
  - [ ] ¿¿¿ Join all load functions in [model.js](./src/js/model.js) ???
  - [ ] ¿¿¿ Create parent class to the nav&footer bars ???
  - [ ] contact us button reference
  - [ ] Update method to work always (special atention at openhours, footer, chrono)

## License

Not yet

## Contributions

### Website

[António Sérgio](https://github.com/AntonioSergioDM)

### Images

[Carlos Daniel](https://)
