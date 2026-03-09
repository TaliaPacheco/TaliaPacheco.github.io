import { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

  const handleFilterClick = useCallback((category: string) => {
    const newCategory = selectedCategory === category ? null : category;
    if (newCategory === selectedCategory) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setIsExiting(true);
    timeoutRef.current = setTimeout(() => {
      setSelectedCategory(newCategory);
      setAnimationKey((k) => k + 1);
      setIsExiting(false);
    }, 200);
  }, [selectedCategory]);

  return (
    <section className="habilidades-section" id="habilidades">
      <div className="habilidades-container">
        <h2 className="section-heading-reveal">{t('skills.title')}</h2>
        <p className="section-subtitle section-subtitle-reveal">{t('skills.subtitle')}</p>

        {filterButtons && (
          <div className="filter-buttons">
            {filterButtons.map((btn) => (
              <button
                key={btn.category}
                className={`filter-btn ${selectedCategory === btn.category ? 'active' : ''}`}
                onClick={() => handleFilterClick(btn.category)}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}

        <div className={`skills-grid ${isExiting ? 'skills-grid--exiting' : ''}`} key={animationKey}>
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="skill-card-wrapper skill-card--enter"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                proficiency={skill.proficiency}
                alt={skill.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}