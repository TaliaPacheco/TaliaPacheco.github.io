import '../styles/ContactModal.css';
import { useState } from 'react';
import { saveContactToSheet } from '../services/googleSheets';
import Toast from './Toast';

export default function ContactSection() {
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
      
      setToast({ message: 'Mensagem enviada com sucesso!', type: 'success' });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    } catch (error) {
      console.error('Erro ao enviar:', error);
      console.error('Detalhes do erro:', {
        message: (error as Error).message,
        stack: (error as Error).stack
      });
      setToast({ message: 'Erro ao enviar mensagem. Verifique a configuração do Google Sheets.', type: 'error' });
      setIsSubmitting(false);error
    }
  };

  return (
    <>
      <section className="contact-section" id="contato">
        <div className="contact-modal">
          <div className="modal-content">
            <div className="modal-left">
              <h2>Vamos construir algo <br/>juntos?</h2>
              <p>Estou disponível para novos projetos e colaborações. Sinta-se à vontade para me enviar uma mensagem.</p>
              
              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:taliapacheco0@gmail.com">taliapacheco0@gmail.com</a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">🔗</div>
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/talia-pacheco/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">💻</div>
                  <div>
                    <h4>GitHub</h4>
                    <a href="https://github.com/taliapacheco" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-right">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Seu nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Seu email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="exemplo@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Sua mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Deixe sua mensagem aqui..."
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
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
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
