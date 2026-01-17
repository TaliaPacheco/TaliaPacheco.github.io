import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import '../styles/LanguageToggle.css';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const currentLanguage = i18n.language;
  const languages = [
    { code: 'pt-BR', label: 'Português', flag: '🇧🇷' },
    { code: 'en-US', label: 'English', flag: '🇺🇸' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem('language', languageCode);
    setShowDropdown(false);
  };

  return (
    <div className="language-toggle">
      <button
        className="language-btn"
        onClick={() => setShowDropdown(!showDropdown)}
        aria-label="Mudar idioma"
      >
        <span className="flag">{currentLang?.flag}</span>
        <span className="label">{currentLang?.label}</span>
      </button>

      {showDropdown && (
        <div className="language-dropdown">
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`language-option ${lang.code === currentLanguage ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="flag">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
