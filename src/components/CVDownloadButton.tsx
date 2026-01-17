import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CurriculoPT from '../assets/Talia Pacheco Curriculo .pdf';
import CurriculoEN from '../assets/Talia-Pacheco-Resume.pdf';
import '../styles/CVDownloadButton.css';

export default function CVDownloadButton() {
  const { t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDownload = (curriculoFile: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = curriculoFile;
    link.download = fileName;
    link.click();
    setShowDropdown(false);
  };

  return (
    <div className="cv-download-container">
      <button
        className="cv-download-btn"
        onClick={() => setShowDropdown(!showDropdown)}
        aria-label={t('hero.downloadCV')}
      >
        {t('hero.downloadCV')}
        <span className={`arrow ${showDropdown ? 'open' : ''}`}>▼</span>
      </button>

      {showDropdown && (
        <div className="cv-dropdown">
          <button
            className="cv-option"
            onClick={() => handleDownload(CurriculoPT, 'Talia_Pacheco_Curriculo.pdf')}
          >
            <span className="flag">🇧🇷</span>
            <span>{t('hero.downloadCVPortuguese')}</span>
          </button>
          <button
            className="cv-option"
            onClick={() => handleDownload(CurriculoEN, 'Talia_Pacheco_Resume.pdf')}
          >
            <span className="flag">🇺🇸</span>
            <span>{t('hero.downloadCVEnglish')}</span>
          </button>
        </div>
      )}
    </div>
  );
}
