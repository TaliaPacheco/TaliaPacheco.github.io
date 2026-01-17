import { useTranslation } from 'react-i18next';

interface SkillCardProps {
  icon: string;
  title: string;
  proficiency: string;
  alt: string;
}

export default function SkillCard({ icon, title, proficiency, alt }: SkillCardProps) {
  const { t } = useTranslation();

  const getProficiencyTranslation = (level: string) => {
    const normalized = level.toLowerCase().replace(/[àáãâäó]/g, 'a').replace(/[èéêë]/g, 'e').replace(/[ìíîï]/g, 'i').replace(/ç/g, 'c');
    
    if (normalized.includes('beginner') || normalized.includes('iniciante')) {
      return t('proficiency.beginner');
    } else if (normalized.includes('intermediate') || normalized.includes('intermediario')) {
      return t('proficiency.intermediate');
    } else if (normalized.includes('advanced') || normalized.includes('avancado')) {
      return t('proficiency.advanced');
    }
    return level;
  };

  return (
    <div className="skill-card">
      <img src={icon} alt={alt} className="skill-icon" />
      <h3>{title}</h3>
      <p className="proficiency">{getProficiencyTranslation(proficiency)}</p>
    </div>
  );
}
