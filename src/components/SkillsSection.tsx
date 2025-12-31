import { useState } from 'react';
import SkillCard from './SkillCard';

interface Skill {
  id: number;
  icon: string;
  title: string;
  proficiency: string;
  alt: string;
  category: string;
}

interface SkillsSectionProps {
  skills: Skill[];
  filterButtons?: { label: string; category: string }[];
}

export default function SkillsSection({ skills, filterButtons }: SkillsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

  return (
    <section className="habilidades-section" id="habilidades">
      <div className="habilidades-container">
        <h2>Habilidades & Tecnologias</h2>
        <p className="section-subtitle">Tecnologias com as quais trabalho para criar soluções digitais modernas.</p>
        
        {filterButtons && (
          <div className="filter-buttons">
            {filterButtons.map((btn) => (
              <button
                key={btn.category}
                className={`filter-btn ${selectedCategory === btn.category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(selectedCategory === btn.category ? null : btn.category)}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              icon={skill.icon}
              title={skill.title}
              proficiency={skill.proficiency}
              alt={skill.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}