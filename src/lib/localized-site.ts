import type { SiteData } from '../types/site';

// Portuguese owns the site's shape and all non-copy values. English may only
// replace these text fields, and only where the Portuguese value exists.
const translatableFields = new Set([
  'title', 'intro', 'label', 'closeLabel', 'text', 'question', 'answer',
  'description', 'learnMore',
]);

function overlayTranslations(source: unknown, translations: unknown, key = '', path = ''): unknown {
  if (Array.isArray(source)) {
    if (!Array.isArray(translations)) return source;
    return source.map((item, index) => overlayTranslations(item, translations[index], '', `${path}[${index}]`));
  }

  if (source && typeof source === 'object') {
    const sourceRecord = source as Record<string, unknown>;
    const translationRecord = translations && typeof translations === 'object'
      ? translations as Record<string, unknown>
      : {};

    return Object.fromEntries(Object.entries(sourceRecord).map(([childKey, value]) => [
      childKey,
      overlayTranslations(value, translationRecord[childKey], childKey, path ? `${path}.${childKey}` : childKey),
    ]));
  }

  if (typeof source === 'string' && translatableFields.has(key) && !path.startsWith('agreements[')
    && typeof translations === 'string' && translations.length > 0) {
    return translations;
  }

  return source;
}

export function englishSite(portuguese: SiteData, english: SiteData): SiteData {
  const merged = overlayTranslations(portuguese, english) as SiteData;
  merged.language = 'en';
  return merged;
}
