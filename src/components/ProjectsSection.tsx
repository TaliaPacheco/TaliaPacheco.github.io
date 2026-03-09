import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ProjectsSectionProps {
  featuredProjects?: React.ReactNode;
}

export default function ProjectsSection({ featuredProjects }: ProjectsSectionProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="projects" id="Projetos">
      <h2 className="section-heading-reveal">{t('projects.title')}</h2>

      {featuredProjects}

      <div className="view-more-container">
        <button className="view-more-btn" onClick={() => navigate('/projects')}>
          <span className="view-more-text">{t('projects.viewMore')}</span>
          <span className="view-more-arrow">→</span>
        </button>
      </div>
    </section>
  );
}