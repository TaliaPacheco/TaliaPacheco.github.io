import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Project {
  icon?: string;
  title?: string;
  description?: string;
  alt?: string;
  onClick?: () => void;
  isMoreProjects?: boolean;
}


interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  return (
    <section className="projects" id="Projetos">
      <h2>{t('projects.title')}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            icon={project.icon}
            title={project.title}
            description={project.description}
            alt={project.alt}
            isMoreProjects={project.isMoreProjects}
            onClick={project.isMoreProjects ? () => navigate('/projects') : project.onClick}
          />
        ))}
      </div>
    </section>
  );
}