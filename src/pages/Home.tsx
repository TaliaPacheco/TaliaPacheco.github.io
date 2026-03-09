import '../styles/Home.css';
import '../styles/animations.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

import reactSVG from '../assets/icons/react.svg';
import reactNativeSVG from '../assets/icons/reactNative.svg';
import typescriptSVG from '../assets/icons/typescript.svg';
import html5SVG from '../assets/icons/html.svg';
import css3SVG from '../assets/icons/css.svg';
import nodeJSSVG from '../assets/icons/nodejs.svg';
import postgresSVG from '../assets/icons/postgresql.svg';
import dockerSVG from '../assets/icons/docker.svg';
import nextJSSVG from '../assets/icons/nextjs.svg';
import expressjsSVG from '../assets/icons/expressjs.svg';
import githubSVG from '../assets/icons/github.svg';
import mysqlSVG from '../assets/icons/mysql.svg';
import tailwindSVG from '../assets/icons/tailwind.svg';
import userSVG from '../assets/icons/user-check.svg';
import linkedinSVG from '../assets/icons/linkedin.svg';
import nestjsSVG from '../assets/icons/nestjs.svg';
import pythonSVG from '../assets/icons/python.svg';
import rabbitmqSVG from '../assets/icons/rabbitmq.svg';
import goSVG from '../assets/icons/go.svg';
import databaseSVG from '../assets/icons/database.svg';
import viteSVG from '../assets/icons/vite.svg';

import cuboPNG from '../assets/icons/cubo.svg';

import TaliaIMG from '../assets/Perfil-profissional(sem-fundo).png';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactModal from '../components/ContactModal';
import ArchitectureFlow from '../components/ArchitectureFlow';
import ContactSection from '../components/ContactSection';
import CVDownloadButton from '../components/CVDownloadButton';
import climaImg from '../assets/images/climaImg.png';

export default function Home() {
  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navigate = useNavigate();

  useScrollAnimations();

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="home-container">
      <header className="navbar">
        <div className="navbar-content">
          <nav className="nav-links nav-links--left">
            <a href="#habilidades">{t('navbar.skills')}</a>
            <span className="nav-dot"></span>
            <a href="#Projetos">{t('navbar.projects')}</a>
          </nav>

          <div className="logo">
            <img src={cuboPNG} alt="Logo" />
          </div>

          <nav className="nav-links nav-links--right">
            <a href="#contato" onClick={(e) => { e.preventDefault(); openContactModal(); }}>{t('navbar.contact')}</a>
            <span className="nav-dot"></span>
            <a href="https://github.com/taliapacheco" target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>
        </div>
      </header>

      <div className="hero-grid-texture"></div>
      <section className="hero">
        <div className="hero-text">
          <p className="hero-label hero-text-reveal">{t('hero.greeting')}</p>
          <h1 className="hero-name hero-text-reveal">{t('hero.name')}</h1>
          <p className="hero-subtitle hero-subtitle-reveal">{t('hero.subtitle')}</p>

          <div className="hero-buttons hero-buttons-reveal">
            <CVDownloadButton />
            <button className="btn btn-primary" onClick={() => navigate('/projects')}>{t('hero.viewProjects')}</button>
            <button className="btn btn-secondary" onClick={openContactModal}>{t('hero.talkWithMe')}</button>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="hero-orb">
            <div className="hero-orb-ring hero-orb-ring--1"></div>
            <div className="hero-orb-ring hero-orb-ring--2"></div>
            <div className="hero-orb-ring hero-orb-ring--3"></div>
            <div className="hero-orb-core"></div>
          </div>
          <img src={TaliaIMG} alt="Talia Pacheco" className="hero-portrait-img" />
        </div>
      </section>

    <SkillsSection
      filterButtons={[
        { label: t('skills.frontend'), category: "frontend" },
        { label: t('skills.backend'), category: "backend" },
        { label: t('skills.databases'), category: "databases" },
        { label: t('skills.tools'), category: "Ferramentas" },
      ]}
      skills={[
        { id: 1, icon: reactSVG, title: "React", proficiency: "Intermediario", alt: "React", category: "frontend" },
        { id: 2, icon: typescriptSVG, title: "TypeScript", proficiency: "Intermediario", alt: "TypeScript", category: "frontend" },
        { id: 3, icon: html5SVG, title: "HTML5", proficiency: "Avancado", alt: "HTML5", category: "frontend" },
        { id: 4, icon: css3SVG, title: "CSS3", proficiency: "Avancado", alt: "CSS3", category: "frontend" },
        { id: 5, icon: reactNativeSVG, title: "React Native", proficiency: "Intermediario", alt: "React Native", category: "frontend" },
        { id: 6, icon: nextJSSVG, title: "Next.js", proficiency: "intermediario", alt: "Next.js", category: "frontend" },
        { id: 7, icon: nodeJSSVG, title: "Node.js", proficiency: "Avancado", alt: "Node.js", category: "backend" },
        { id: 8, icon: postgresSVG, title: "PostgreSQL", proficiency: "Intermediario", alt: "PostgreSQL", category: "databases" },
        { id: 9, icon: dockerSVG, title: "Docker", proficiency: "Intermediario", alt: "Docker", category: "Ferramentas" },
        { id: 10, icon: expressjsSVG, title: "Express.js", proficiency: "Intermediario", alt: "Express.js", category: "backend" },
        { id: 11, icon: githubSVG, title: "GitHub", proficiency: "Avancado", alt: "GitHub", category: "Ferramentas" },
        { id: 12, icon: mysqlSVG, title: "MySQL", proficiency: "Intermediario", alt: "MySQL", category: "databases" },
        { id: 13, icon: tailwindSVG, title: "Tailwind CSS", proficiency: "Avancado", alt: "Tailwind CSS", category: "frontend" },
        { id: 14, icon: userSVG, title: "JWT", proficiency: "Intermediario", alt: "JWT", category: "backend" },
        { id: 15, icon: nestjsSVG, title: "NestJS", proficiency: "Intermediario", alt: "NestJS", category: "backend" },
      ]}
    />

    <ProjectsSection
      featuredProjects={
        <ArchitectureFlow
          titleKey="projects.monitoringTitle"
          subtitleKey="projects.monitoringDetails"
          githubUrl="https://github.com/TaliaPacheco/Monitoramento-meteorol-gico"
          image={climaImg}
          imageAlt="Weather Monitoring Dashboard"
          dockerIcon={dockerSVG}
          steps={[
            { icon: pythonSVG, name: 'Python', roleKey: 'workflow.workflowSection.collector', description: 'OpenWeather API → 60s interval', detail: 'Cron job que coleta dados climáticos da API OpenWeather a cada 60 segundos e publica as mensagens na fila.', accent: '#3776AB' },
            { icon: rabbitmqSVG, name: 'RabbitMQ', roleKey: 'workflow.workflowSection.messageBroker', description: 'AMQP · Queue: weather', detail: 'Broker de mensagens que desacopla o coletor do processamento, garantindo entrega confiável com durabilidade e TTL.', accent: '#FF6600' },
            { icon: goSVG, name: 'Go', roleKey: 'workflow.workflowSection.worker', description: '1000+ msg/s · ~50MB RAM', detail: 'Consumer de alta performance que consome mensagens da fila e envia os dados processados para a API via HTTP.', accent: '#00ADD8' },
            { icon: nestjsSVG, name: 'NestJS', roleKey: 'workflow.workflowSection.api', description: 'REST · JWT · Mongoose', detail: 'API RESTful com autenticação JWT, integração com OpenAI para insights climáticos e recomendações Pokémon por clima.', accent: '#E0234E' },
            { icon: databaseSVG, name: 'MongoDB', roleKey: 'workflow.workflowSection.database', description: 'weatherDB · TTL 30d', detail: 'Armazena histórico de dados meteorológicos e usuários com indexação otimizada e expiração automática.', accent: '#47A248' },
            { icon: reactSVG, name: 'Frontend', roleKey: 'interface.technologiesTitle', description: 'Dashboard · Mapa · Charts', detail: 'Dashboard responsivo com mapa interativo Leaflet, indicadores em tempo real e exportação em Excel/CSV.', accent: '#61DAFB', techIcons: [
              { icon: reactSVG, name: 'React' }, { icon: viteSVG, name: 'Vite' }, { icon: tailwindSVG, name: 'Tailwind' },
            ]},
          ]}
        />
      }
    />

    <ContactSection />

      <footer>
        <div className="footer-content detail">
          <a href="https://github.com/taliapacheco" target="_blank" rel="noopener noreferrer">
            <img src={githubSVG} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/talia-pacheco/1" target="_blank" rel="noopener noreferrer">
            <img src={linkedinSVG} alt="LinkedIn" />
          </a>
        </div>
        <div className="footer-content">
          <p>&copy; {t('footer.copyright')}</p>
        </div>
      </footer>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}
