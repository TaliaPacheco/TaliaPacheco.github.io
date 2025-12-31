import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router-dom';

interface Project {
  icon?: string;
  title?: string;
  description?: string;
  alt?: string;
  onClick?: () => void;
}


interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const navigate = useNavigate();
  
  return (
    <section className="projects" id="Projetos">
      <h2>Meus projetos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            icon={project.icon}
            title={project.title}
            description={project.description}
            alt={project.alt}
            onClick={project.title === "VER MAIS PROJETOS" ? () => navigate('/projects') : project.onClick}
          />
        ))}
      </div>
    </section>
  );
}