import '../styles/Projects.css';
import '../styles/ProjectModal.css';

import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';
import { useTranslation } from 'react-i18next';

import climaSVG from '../assets/icons/clima.svg';
import carteiraSVG from '../assets/icons/carteira.svg';
import cuboPNG from '../assets/icons/cubo.svg';
import mesaSVG from '../assets/icons/mesa.svg';
import livroSVG from '../assets/icons/livro.svg';
import githubSVG from '../assets/icons/github.svg';
import linkedinSVG from '../assets/icons/linkedin.svg';
import headSVG from '../assets/icons/headphone.svg';

import climaImg from '../assets/images/climaImg.png';
import reembolsoJPG from '../assets/images/reembolso.jpg';
import mesaImg from '../assets/images/mesa.jpg';
import livroImg from '../assets/images/livro.jpg';
import FoneImg from '../assets/images/fone.jpg';


import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import WorkFlowSection from '../components/WorkFlowSection';
import WorkFlowRefund from '../components/WorkFlowRefund';
import WorkFlowRestaurante from '../components/WorkFlowRestaurant';
import WorkFlowCursos from '../components/WorkFlowCursos';
import WorkFlowTickets from '../components/WorkFlowTickets';

interface Project {
  id: number;
  icon: string;
  title: string;
  description: string;
  alt: string;
  details: string;
  features?: string[];
  technologies?: string[];
  link?: string;
  image?: string;
  WorkFlow?: React.ReactNode;
  isGitHubLink?: boolean;
}

export default function Projects() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectsData: Project[] = [
    {
      id: 1,
      icon: climaSVG,
      title: t('projects.monitoringTitle'),
      description: t('projects.clickToLearn'),
      alt: "monitoramento meteorológico",
      details: t('projects.monitoringDetails'),
      technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "Leaflet", "NestJS", "Go", "Python", "RabbitMQ", "MongoDB", "Docker", "OpenAI"],
      link: "https://github.com/TaliaPacheco/Monitoramento-meteorol-gico",
      image: climaImg,
      WorkFlow: <WorkFlowSection />,
    },
    {
      id: 2,
      icon: carteiraSVG,
      title: t('projects.refundTitle'),
      description: t('projects.clickToLearn'),
      alt: "Sistema de Reembolso",
      details: t('projects.refundDetails'),
      technologies: ["React","Vite", "Typescript", "tailwindCSS"],
      link: "https://github.com/TaliaPacheco/Projeto-Sistema-de-reembolso",
      image: reembolsoJPG,
      WorkFlow: <WorkFlowRefund />,
    },
    {
      id: 3,
      icon: mesaSVG,
      title: t('projects.restaurantTitle'),
      description: t('projects.clickToLearn'),
      alt: "API Restaurante",
      details: t('projects.restaurantDetails'),
      technologies: ["NodeJS", "Express", "TypeScript", "Knex", "SQLite", "Zod"],
      link: "https://github.com/TaliaPacheco/api-restaurante",
      image: mesaImg,
      WorkFlow: <WorkFlowRestaurante />,
    },
    
    {
      id: 4,
      icon: livroSVG,
      title: t('projects.coursesTitle'),
      description: t('projects.clickToLearn'),
      alt: "API Gerenciamento de Cursos",
      details: t('projects.coursesDetails'),
      technologies: ["Node.js", "TypeScript", "Express", "SQLite3", "Knex"],
      link: "https://github.com/TaliaPacheco/api-gerenciamento-cursos",
      image: livroImg,
      WorkFlow: <WorkFlowCursos />,
    },
    {
      id: 5,
      icon: headSVG,
      title: t('projects.ticketsTitle'),
      description: t('projects.clickToLearn'),
      alt: "Api para gerenciamento de tickets",
      details: t('projects.ticketsDetails'),
      technologies: ["Node.js", "Módulo nativo HTTP", "Sistema de arquivos (File System) para persistência de dados"],
      link: "https://github.com/TaliaPacheco/suport-tickets",
      image: FoneImg,
      WorkFlow: <WorkFlowTickets />,
    },
    {
      id: 6,
      icon: githubSVG,
      title: t('projects.moreProjectsTitle'),
      description: t('projects.moreProjectsDesc'),
      alt: "GitHub",
      details: "Acesse meu perfil no GitHub para ver mais projetos",
      link: "https://github.com/TaliaPacheco",
      isGitHubLink: true,
    },
  ];

  const handleProjectClick = (project: Project) => {
    if (project.isGitHubLink && project.link) {
      window.open(project.link, '_blank');
    } else {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="projects-page">
      <header className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <img src={cuboPNG} alt="Logo" />
            <span>Projetos</span>
          </div>

          <nav className="nav-links">
          </nav>
          <button className="cta-button" onClick={() => navigate('/')}>{t('navbar.backHome') || 'Voltar a home'}</button>
        </div>
      </header>

      <section className="projects-full" id="Projetos">
        <div className="projects-header">
          <h1>{t('projects.title')}</h1>
          <p>{t('projects.pageDescription') || 'Uma seleção de projetos que demonstram minhas habilidades em desenvolvimento web, design e tecnologia.'}</p>
        </div>
        
        <div className="projects-grid-full">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              icon={project.icon}
              title={project.title}
              description={project.description}
              alt={project.alt}
              onClick={() => handleProjectClick(project)}
              isGitHubLink={project.isGitHubLink}
            />
          ))}
        </div>
      </section>

      <ProjectModal 
        isOpen={isModalOpen} 
        project={selectedProject} 
        onClose={handleCloseModal}
      />

      <footer >
        <div className="footer-content detail ">
          <a href="https://github.com/taliapacheco" target="_blank" rel="noopener noreferrer">
            <img src={githubSVG} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/taliapacheco/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinSVG} alt="LinkedIn" />
          </a>
        </div>
        <div className="footer-content">
          <p>&copy; {t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
}
