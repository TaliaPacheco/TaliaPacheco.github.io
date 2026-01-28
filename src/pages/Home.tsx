import '../styles/Home.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

import climaSVG from '../assets/icons/clima.svg';
import carteiraSVG from '../assets/icons/carteira.svg';
import cuboPNG from '../assets/icons/cubo.svg';
import mesaSVG from '../assets/icons/mesa.svg';

import TaliaIMG from '../assets/Talia-foto.png';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ProjectModal from '../components/ProjectModal';
import ContactModal from '../components/ContactModal';
import WorkFlowSection from '../components/WorkFlowSection';
import WorkFlowRefund from '../components/WorkFlowRefund';
import WorkFlowRestaurante from '../components/WorkFlowRestaurant';
import ContactSection from '../components/ContactSection';
import CVDownloadButton from '../components/CVDownloadButton';
import climaImg from '../assets/images/climaImg.png';
import reembolsoImg from '../assets/images/reembolso.jpg';
import mesaImg from '../assets/images/mesa.jpg';

export default function Home() {
  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const navigate = useNavigate();

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const projectsData = [
    {
      id: 1,
      icon: climaSVG,
      titleKey: 'projects.monitoringTitle',
      descKey: 'projects.monitoringDesc',
      detailsKey: 'projects.monitoringDetails',
      alt: "monitoramento meteorológico",
      technologies: ["React", "TypeScript", "Tailwind CSS", "API Weather"],
      features: ["Previsão de 7 dias", "Gráficos em tempo real", "Alertas de clima", "Múltiplas cidades"],
      image: climaImg,
      link: "https://github.com/TaliaPacheco/Monitoramento-meteorol-gico",
      WorkFlow: <WorkFlowSection />
    },
    {
      id: 2,
      icon: carteiraSVG,
      titleKey: 'projects.refundTitle',
      descKey: 'projects.refundDesc',
      detailsKey: 'projects.refundDetails',
      alt: "Sistema de Reembolso",
      technologies: ["React", "Node.js", "PostgreSQL", "Express.js"],
      features: ["Fluxo de aprovação", "Relatórios", "Integração com banco de dados", "Notificações"],
      image: reembolsoImg,
      link: "https://github.com/TaliaPacheco/Projeto-Sistema-de-reembolso",
      WorkFlow: <WorkFlowRefund />
    },
    {
      id: 3,
      icon: mesaSVG,
      titleKey: 'projects.restaurantTitle',
      descKey: 'projects.restaurantDesc',
      detailsKey: 'projects.restaurantDetails',
      alt: "API Restaurante",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT"],
      features: ["Gerenciamento de mesas", "Pedidos em tempo real", "Autenticação segura", "Relatórios"],
      image: mesaImg,
      link: "https://github.com/TaliaPacheco/api-restaurante",
      WorkFlow: <WorkFlowRestaurante />
    }
  ];

  const handleProjectClick = (projectId: number) => {
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
      const projectWithTranslatedTitle = {
        ...project,
        title: t(project.titleKey),
        description: t(project.descKey),
        details: t(project.detailsKey)
      };
      setSelectedProject(projectWithTranslatedTitle);
    }
  };

  return (
    <div className="home-container">
      <header className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <img src={cuboPNG} alt="Logo" />
            <span>Talia Pacheco</span>
          </div>
          
          <nav className="nav-links">
            <a href="#habilidades">{t('navbar.skills')}</a>
            <a href="#Projetos">{t('navbar.projects')}</a>
            <a href="#contato" onClick={(e) => { e.preventDefault(); openContactModal(); }}>{t('navbar.contact')}</a>
          </nav>

          <button className="cta-button" onClick={openContactModal}>{t('navbar.cta')}</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>{t('hero.greeting')} <br/>{t('hero.name')}</h1>
          <p>{t('hero.subtitle')}</p>
          
          <div className="hero-buttons">
            <CVDownloadButton />
            <button className="btn btn-primary" onClick={() => navigate('/projects')}>{t('hero.viewProjects')}</button>
            <button className="btn btn-secondary" onClick={openContactModal}>{t('hero.talkWithMe')}</button>
          </div>
        </div>

        <div className="hero-image">
          <div className="avatar-circle">
            <img src={TaliaIMG} alt="Talia Pacheco" />

          </div>
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
        {
          id: 1,
          icon: reactSVG,
          title: "React",
          proficiency: "Intermediário",
          alt: "React",
          category: "frontend"
        },
        {
          id: 2,
          icon: typescriptSVG,
          title: "TypeScript",
          proficiency: "Intermediário",
          alt: "TypeScript",
          category: "frontend"
        },
        {
          id: 3,
          icon: html5SVG,
          title: "HTML5",
          proficiency: "Avançado",
          alt: "HTML5",
          category: "frontend"
        },
        {
          id: 4,
          icon: css3SVG,
          title: "CSS3",
          proficiency: "Avançado",
          alt: "CSS3",
          category: "frontend"
        },
        {
          id: 5,
          icon: reactNativeSVG,
          title: "React Native",
          proficiency: "Intermediário",
          alt: "React Native",
          category: "frontend"
        },
        {
          id: 6,
          icon: nextJSSVG,
          title: "Next.js",
          proficiency: "intermediário",
          alt: "Next.js",
          category: "frontend"
        },
        {
          id: 7,
          icon: nodeJSSVG,
          title: "Node.js",
          proficiency: "Avançado",
          alt: "Node.js",
          category: "backend"
        },
        {
          id: 8,
          icon: postgresSVG,
          title: "PostgreSQL",
          proficiency: "Intermediário",
          alt: "PostgreSQL",
          category: "databases"
        },
        {
          id: 9,
          icon: dockerSVG,
          title: "Docker",
          proficiency: "Intermediário",
          alt: "Docker",
          category: "Ferramentas"
        },
        {
          id: 10,
          icon: expressjsSVG,
          title: "Express.js",
          proficiency: "Intermediário",
          alt: "Express.js",
          category: "backend"
        },
        {
          id: 11,
          icon: githubSVG,
          title: "GitHub",
          proficiency: "Avançado",
          alt: "GitHub",
          category: "Ferramentas"
        },
        {
          id: 12,
          icon: mysqlSVG,
          title: "MySQL",
          proficiency: "Intermediário",
          alt: "MySQL",
          category: "databases"
        },
        {
          id: 13,
          icon: tailwindSVG,
          title: "Tailwind CSS",
          proficiency: "Avançado",
          alt: "Tailwind CSS",
          category: "frontend"
        },
        {
          id: 14,
          icon: userSVG,
          title: "JWT",
          proficiency: "Intermediário",
          alt: "JWT",
          category: "backend"
        },
        {
          id: 15,
          icon: nestjsSVG,
          title: "NestJS",
          proficiency: "Intermediário",
          alt: "NestJS",
          category: "backend"
        },

      ]}
    />

    <ProjectsSection 
      projects={[
        {
          icon: climaSVG,
          title: t('projects.monitoringTitle'),
          description: t('projects.monitoringDesc'),
          alt: "monitoramento meteorológico",
          onClick: () => handleProjectClick(1)
        },
        {
          icon: carteiraSVG,
          title: t('projects.refundTitle'),
          description: t('projects.refundDesc'),
          alt: "Sistema de Reembolso",
          onClick: () => handleProjectClick(2)
        },
        {
          icon: mesaSVG,
          title: t('projects.restaurantTitle'),
          description: t('projects.restaurantDesc'),
          alt: "API Restaurante",
          onClick: () => handleProjectClick(3)
        },
        {
          title: t('projects.viewMore'),
          isMoreProjects: true,
        },
      ]}
    />      
    
    <ContactSection />
    
      <footer >
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
      <ProjectModal 
        isOpen={selectedProject !== null} 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}