interface ProjectCardProps {
  icon?: string;
  title?: string;
  description?: string;
  alt?: string;
  onClick?: () => void;
  isGitHubLink?: boolean;
}

export default function ProjectCard({ icon, title, description, alt, onClick }: ProjectCardProps) {
  const isMoreProjects = title === "VER MAIS PROJETOS";
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <div 
      className={isMoreProjects ? "projects-card more-projects-card" : "projects-card"}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      {!isMoreProjects && (
        <div className="projects-icon">
          <img src={icon} alt={alt} />
        </div>
      )}
      {isMoreProjects && <div className="arrow-icon">➟</div>}
      <h3>{title}</h3>
      {!isMoreProjects && <p>{description}</p>}
    </div>
  );
}
