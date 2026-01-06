
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function saveContactToSheet(data: ContactFormData): Promise<void> {
  try {
    // Usar import.meta.env diretamente (Vite carrega automaticamente)
    const SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
    const SECRET = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_SECRET;

    console.log('Verificando configuração:', {
      URL_exists: !!SCRIPT_URL,
      URL: SCRIPT_URL
    });

    if (!SCRIPT_URL) {
      throw new Error('URL do Google Apps Script não configurada. Configure VITE_GOOGLE_APPS_SCRIPT_URL no arquivo .env.local');
    }

    console.log('Enviando dados para Google Sheets via Apps Script:', {
      name: data.name,
      email: data.email,
      message: data.message
    });

    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
        timestamp: new Date().toLocaleString('pt-BR'),
        secret: SECRET
      }),
    });

    console.log('Resposta do servidor:', response.status);
    console.log('Dados salvos com sucesso na planilha!');
  } catch (error) {
    console.error('Erro ao salvar na planilha:', error);
    throw error;
  }
}
