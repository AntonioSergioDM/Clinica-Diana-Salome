export type LinkItem = { id: string; title: string; intro: string };

export type SiteData = {
  language: 'pt' | 'en';
  labels: Record<string, { title?: string; intro?: string } | string>;
  openHours: Record<string, { label?: string; open?: string[]; close?: string[] }> & { closeLabel: string };
  chrono: unknown[];
  services: { title: string; image: string; icon: string; text: string; link: string }[];
  testimonials: { title: string; text: string; image: string; author: string; stars: number }[];
  faq: { question: string; answer: string }[];
  nav: LinkItem[];
  footer: LinkItem[];
  team: { name: string; image: string; description: string }[];
  contacts: { title: string; value: string; text: string; link: string; image: string }[];
  home: { title: string; text: string; image: string; href: string } | { title: string; text: string; image: string; href: string }[];
  agreements: { title: string; image?: string }[];
  header: string[];
  learnMore: string;
};
