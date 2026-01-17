# Guia de Uso do i18n

## Como usar as traduções

O projeto agora está configurado com i18n (internacionalização) para suportar múltiplos idiomas.

### 1. Usando `useTranslation` em componentes

```typescript
import { useTranslation } from 'react-i18next';

export default function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('hero.greeting')}</h1>
      <p>{t('hero.subtitle')}</p>
    </div>
  );
}
```

### 2. Estrutura das chaves de tradução

As traduções estão organizadas em categorias:
- `common` - Termos comuns
- `navbar` - Textos da barra de navegação
- `hero` - Seção hero
- `skills` - Seção de habilidades
- `projects` - Seção de projetos
- `contact` - Seção de contato
- `footer` - Rodapé
- `proficiency` - Níveis de proficiência

### 3. Trocar idioma programaticamente

```typescript
import { useTranslation } from 'react-i18next';

export default function MyComponent() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <button onClick={() => changeLanguage('en-US')}>
      English
    </button>
  );
}
```

### 4. Adicionar novas traduções

1. Abra os arquivos:
   - `src/i18n/locales/pt-BR.json` (português)
   - `src/i18n/locales/en-US.json` (inglês)

2. Adicione a chave em ambos os arquivos

3. Use em seu componente com `t('sua.chave.aqui')`

### 5. Idiomas disponíveis

- **Português Brasileiro (pt-BR)** - Padrão
- **Inglês Americano (en-US)**

### 6. Componente LanguageToggle

O componente `LanguageToggle` está posicionado no topo direito da página e permite que o usuário troque o idioma facilmente.

Está localizado em: `src/components/LanguageToggle.tsx`

## Arquivos modificados

- `src/main.tsx` - Adicionado import do i18n config
- `src/App.tsx` - Adicionado LanguageToggle
- `src/components/LanguageToggle.tsx` - Novo componente
- `src/styles/LanguageToggle.css` - Estilos do botão
- `src/i18n/config.ts` - Configuração do i18n
- `src/i18n/locales/pt-BR.json` - Traduções em português
- `src/i18n/locales/en-US.json` - Traduções em inglês

## Próximos passos

Para completar a internacionalização, você pode atualizar seus componentes para usar `useTranslation()`:

### Exemplo em Home.tsx:

```typescript
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  // ... resto do código

  // Usar: t('hero.greeting'), t('projects.monitoringTitle'), etc.
}
```

### Exemplo em ProjectsSection.tsx:

```typescript
export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t } = useTranslation();
  
  return (
    <section className="projects-section" id="Projetos">
      <h2>{t('projects.title')}</h2>
      {/* ... resto do código */}
    </section>
  );
}
```
