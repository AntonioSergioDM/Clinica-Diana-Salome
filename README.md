# Clínica Médica Dentária Diana Salomé :tooth:

## Website Features

- [Section Titles and Intros](./src/js/Views/sectionView.js)
  - [x] Logic
- [Navigation Tab](./src/js/Views/navView.js)
  - [x] Logic
  - [x] Language buttons
- [Header](./src/js/Views/headerView.js)
  - [x] Logic
  - [x] Lazy Load
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
  - [x] Change icon on active
  <!-- - [Contact form](./src/js/Views/modalView.js):
  - [ ] Logic
  - [x] Modal Logic
  - [ ] Choose how to contact:
    - ~~mailto + form~~
    - mailto + name input
    - mailto link + phone link
    - PostMail API
    - Form submition with netlify -->
- [Contact](./src/js/Views/contactsView.js)
  - [x] Logic
- [Footer](./src/js/Views/footerView.js)
  - [x] Logic
  - [x] Decide what to put
  - [x] Action - Do something on click (w/smooth scroll)
- ~~[Chrono](./src/js/Views/chronoView.js)~~(removed)
  - [x] Logic
  - [ ] Action - Smooth scrolling (without nav bar over the year)
  - [ ] Line with rigth heigth
- [Team](./src/js/Views/teamView.js)
  - [x] Logic
- [Agreements](./src/js/Views/agreementsView.js)
  - [x] Logic
  - [x] Lazy-load (not-really)
- Multi-languages
  - [x] Titles and intros
  - [x] Open hours
  - [x] Services
  - [x] Testimonials
  - [x] Map
  - [x] Contact
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
  - [ ] FAQ
  - [x] Footer
  - [ ] About Us
  - [ ] Team

## Website Style

- [x] Colors ([\_base.scss](./src/sass/_base.scss))
- Images
  - [ ] Logo, favicon, ...
  - [x] From clinic
  - [ ] Contacts
- Map
  - [ ] Icon ([markerIconPath](./src/js/Config/mapConfig.js))
  - [ ] Design ([TILES.url](./src/js/Config/mapConfig.js) - providers)
  - [x] Popup ([\_map.scss](./src/sass/_map.scss))
- Testimonials
  - [x] Fix arrow buttons (to svg?)
- Nav
  - [x] Opaque (change color?) on hover ([\_nav.scss](./src/sass/_nav.scss))
  - [x] Language buttons underline ([\_nav.scss](./src/sass/_nav.scss))
- FAQ
  - [x] All style ([\_faq.scss](./src/sass/_faq.scss))
- Footer
  - [x] Social media
- Team
  - ~~[ ] Change description animation (like in the headerView)~~

## Other TODOS

- [x] Google search optimization
- [x] Polyfilling and transpiling
- [ ] Mobile compatible
- [x] 'Separate' the sections - only one at a time - add to the url (eg.: .../#team)
- [x] Lazy-load data using fetch and json (¿¿¿ different languages, different files ???)
- [x] Lazy loading images by only load sections on display.
- ~~[ ] Dark mode ~~
- Code
  - ~~[x] ¿¿¿ Join all load functions in [model.js](./src/js/model.js) ???~~
  - ~~[ ] Create parent class to the nav&footer bars~~
  - [x] contact reference
  - [x] .update() method to work always (special atention at openhours, team, footer, chrono)
- [ ] Remove modal
- [ ] Post about medicina estética facial (Google business)
- [x] About us to include 'Medicos dentistas'

## License

&copy;2022 Clínica Médica Dentária Drª Diana Salomé

## Contributions

### Website

Design and developed by [António Sérgio](https://github.com/AntonioSergioDM)

### Images

<!-- [Carlos Daniel](https://) -->
