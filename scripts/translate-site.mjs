import fs from 'node:fs';

const root = new URL('../src/content/site/', import.meta.url);
const pt = JSON.parse(fs.readFileSync(new URL('pt.json', root), 'utf8'));
const en = JSON.parse(fs.readFileSync(new URL('en.json', root), 'utf8'));

const labels = {
  services: ['Treatments', 'Dental care for every stage of life'],
  map: ['Find us', 'Get directions'],
  testimonials: ['Patient stories', 'What our patients say about us'],
  faq: ['Frequently asked questions', 'Answers to common questions'],
  about: ['About us', 'Our clinic is here to give you every reason to smile'],
  team: ['Our team', 'Meet the people caring for your smile'],
  contacts: ['Contact', 'We’re here to help'],
  openhours: ['Opening hours', ''],
  agreements: ['Insurance and partnerships', 'Our agreements and partners'],
};

en.language = 'en';
en.labels = Object.fromEntries(Object.entries(labels).map(([key, [title, intro]]) => [key, { title, intro }]));
en.labels.about.intro = 'Our clinic, located in the centre of Vila Real, is committed to giving you every reason to <b>smile</b>!<br>Our patients’ well-being is what drives us, which is why we provide a specialised service tailored to your wishes and needs.<br>Our team of professionals is guided by dedication, care, trust and excellence.<br><br>Making you smile is our goal every day!<br>Come and smile with us!';
en.labels.logo = '/images/logo/logo.png';
en.openHours = Object.fromEntries(Object.entries(pt.openHours).map(([key, day]) => [key, key === 'closeLabel' ? 'Closed' : {
  ...day,
  label: ({ sun: 'Sunday & public holidays', mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday', sat: 'Saturday' })[key],
  open: day.open.map(time => time ? ({ '09h30': '9:30 am', '14h30': '2:30 pm' })[time] || time : ''),
  close: day.close.map(time => time ? ({ '12h30': '12:30 pm', '19h30': '7:30 pm' })[time] || time : ''),
}]));
en.chrono = pt.chrono;
en.services = [
  ['Orthodontics', 'Specialised care to correct the position and alignment of the teeth.<br>We offer a range of braces, including discreet cosmetic options and Invisalign clear aligners.'],
  ['Dental voucher programme', 'The Portuguese National Health Service dental voucher provides eligible patients with free preventive and restorative treatment. It is available to children and young people up to age 18, pregnant women, older people receiving the Solidarity Supplement, and people living with HIV.'],
  ['Paediatric dentistry', 'Dental care for babies, children and teenagers.<br>Preventive treatment helps children maintain good oral health throughout their lives.'],
  ['Facial aesthetics', 'Botulinum toxin (Botox) treatments for expression lines, bruxism, gummy smile, excessive sweating, neck pain and tension headaches.<br>Hyaluronic acid fillers are also available for natural-looking facial and lip rejuvenation.'],
  ['Oral rehabilitation', 'Restore comfort and everyday function after tooth loss. Dental implants and fixed or removable dentures can help bring back your bite, chewing and speech.'],
  ['Home visits', 'Home appointments may be available for patients who have difficulty travelling to the clinic.'],
  ['Teeth whitening', 'For a brighter smile, ask us about safe and simple whitening treatments that do not wear down the teeth.'],
].map(([title, text], i) => ({ ...pt.services[i], title, text }));
en.testimonials = [
  ['Wonderful team', 'Excellent care, combined with great kindness and gentleness. Outstanding professionals. I recommend them.', 'Sara Cristina Faria Amorim'],
  ['The best team in Vila Real', '', 'João Sousa'],
  ['Highly recommended, the best dental clinic in Vila Real!', 'Excellent service. The team’s warmth makes you feel at ease. I loved the result of my treatment.', 'Sara Cristina Faria Amorim'],
].map(([title, text], i) => ({ ...pt.testimonials[i], title, text }));
en.faq = [
  ['Who is eligible for a dental voucher?', 'Children and young people up to age 18, pregnant women, older people receiving the Solidarity Supplement, and people living with HIV may be eligible.'],
  ['When should a child first visit the dentist?', 'When the first baby teeth appear. A first appointment should be a positive experience, before there is decay or pain, helping children avoid developing a fear of the dentist.'],
  ['Why should baby teeth be treated?', 'Baby teeth support normal chewing, speech, appearance and breathing. A decayed baby tooth can cause infection, affect the adult teeth developing beneath it and impact general health.'],
  ['Which insurance plans and agreements do you accept?', 'See our insurance and partner agreements <a class="nav__lang" href="#agreements">here</a>.'],
  ['Can I pay for treatment in instalments?', 'We offer interest-free instalments arranged directly with the clinic. For more information, <a class="nav__lang" href="#contacts">contact us</a>.'],
  ['How much do treatments cost?', 'The cost depends on the treatment needed. At your assessment appointment, we will explain a treatment plan tailored to you and its associated fees.'],
  ['How often should I visit the dentist?', 'You should have a check-up at least every six months. Prevention is the best treatment.'],
  ['Is it safe to visit the dentist during pregnancy?', 'Yes. You can see your dentist safely. Our professionals will adapt any treatment to your needs.'],
  ['How many times a day should I brush my teeth?', 'Brush at least twice a day, especially before bed. Young children should be helped by an adult so they can develop good oral hygiene habits.'],
  ['What is the safest way to whiten teeth?', 'A gentler option is custom trays with whitening gel, used gradually at home according to your dentist’s instructions.'],
  ['My gums are bleeding. What should I do?', 'Bleeding gums can be a sign of inflammation caused by plaque build-up. Visit your dentist so the problem does not progress to gum disease such as gingivitis or periodontitis.'],
  ['What causes bad breath?', 'Around 90% of bad breath cases have an oral cause, such as plaque, gum disease, tooth decay or retained roots. Other causes can include medication, nasal obstruction and other health conditions.'],
  ['What should I know about Botox?', 'Botulinum toxin is one of the most common aesthetic treatments. The application is generally painless and results are natural-looking and quick to appear. It relaxes muscles, softens expression lines and can help with facial asymmetry, bruxism, gummy smile and excessive sweating.'],
  ['What should I know about hyaluronic acid?', 'Hyaluronic acid helps hydrate and improve skin elasticity, softening lines for a firmer, more youthful appearance. Lip filler is a generally comfortable treatment with immediate, natural-looking results.'],
  ['I have another question…', 'You are welcome to call or visit us.&nbsp;<a class="nav__lang" href="#contacts">Get in touch</a>.'],
].map(([question, answer]) => ({ question, answer }));

const navTitles = { about: 'About', services: 'Treatments', team: 'Team', faq: 'FAQ', contacts: 'Contact', agreements: 'Agreements' };
en.nav = pt.nav.map(item => ({ ...item, title: navTitles[item.id] }));
en.footer = pt.footer.map(item => ({ ...item, title: navTitles[item.id] }));
en.team = pt.team.map((person, i) => ({
  ...person,
  name: ['Dr Diana Salomé', 'Dr Afonso Silva', 'Cristina Costa'][i],
  description: [
    'Clinical Director<br>Master’s degree in Dental Medicine, FMDUP<br>Certified in Facial Aesthetics<br>Certified in Implantology and Oral Rehabilitation<br>Certified in Aesthetic Dentistry<br>Certified in Endodontics<br>Further training in ceramic veneers<br>A paediatric dentist by vocation',
    'Dentist specialising in orthodontics<br>Many years of experience in dentistry, implantology and orthodontics<br>Extensive academic and professional training<br>Known for dedication and a constant commitment to learning and development',
    'Medical and dental practice assistant<br>Training in clinical support and patient service<br>Emergency response training<br>Extensive experience in the field<br>Known for kindness and dedication',
  ][i],
}));
en.contacts = pt.contacts.map((contact, i) => ({
  ...contact,
  title: ['Mobile', 'Telephone', 'Email'][i],
  value: i === 0 ? '+351 932 220 731' : i === 1 ? '+351 259 104 774' : contact.value,
  text: ['Call us now!', 'Call us now!', 'Send us<br>an email!'][i],
  link: i === 0 ? 'tel:+351932220731' : i === 1 ? 'tel:+351259104774' : contact.link,
}));
en.home = pt.home.map(item => ({ ...item, title: 'Treatments', text: 'Discover how we can help you', href: 'services' }));
en.agreements = pt.agreements.map(item => ({ ...item }));
en.header = [...pt.header];
en.learnMore = 'Learn more';

fs.writeFileSync(new URL('en.json', root), `${JSON.stringify(en, null, 2)}\n`, 'utf8');
