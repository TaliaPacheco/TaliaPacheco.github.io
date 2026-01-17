import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';

const resources = {
  'pt-BR': { translation: ptBR },
  'en-US': { translation: enUS }
};

// Detectar idioma do navegador ou usar português como padrão
const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
    return savedLanguage;
  }
  
  const browserLanguage = navigator.language;
  if (browserLanguage.startsWith('en')) {
    return 'en-US';
  }
  
  return 'pt-BR';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false // React já protege contra XSS
    }
  });

export default i18n;
