import 'server-only'

// Definimos los diccionarios disponibles
const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  // Si el idioma no es 'en' ni 'es', forzamos 'es'
  const validLocale = locale === 'en' ? 'en' : 'es';
  
  return dictionaries[validLocale]();
}