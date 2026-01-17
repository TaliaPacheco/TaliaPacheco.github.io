import '../styles/ContactModal.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { saveContactToSheet } from '../services/googleSheets';
import Toast from './Toast';

export default function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Enviando dados para Google Sheets:', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      await saveContactToSheet({
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      
      setToast({ message: t('contact.successMessage'), type: 'success' });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    } catch (error) {
      console.error('Erro ao enviar:', error);
      console.error('Detalhes do erro:', {
        message: (error as Error).message,
        stack: (error as Error).stack
      });
      setToast({ message: t('contact.errorMessage'), type: 'error' });
      setIsSubmitting(false);error
    }
  };

  return (
    <>
      <section className="contact-section" id="contato">
        <div className="contact-modal">
          <div className="modal-content">
            <div className="modal-left">
              <h2>{t('contact.title')} <br/>{t('contact.subtitle')}</h2>
              <p>{t('contact.description')}</p>
              
              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div>
                    <h4>{t('contact.email')}</h4>
                    <a href="mailto:taliapacheco0@gmail.com">taliapacheco0@gmail.com</a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">🔗</div>
                  <div>
                    <h4>{t('contact.linkedin')}</h4>
                    <a href="https://www.linkedin.com/in/talia-pacheco/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">💻</div>
                  <div>
                    <h4>{t('contact.github')}</h4>
                    <a href="https://github.com/taliapacheco" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-right">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('contact.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t('contact.namePlaceholder')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact.emailLabel')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t('contact.emailPlaceholder')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={t('contact.messagePlaceholder')}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('contact.sending') : t('contact.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}
