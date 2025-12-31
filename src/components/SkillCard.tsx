interface SkillCardProps {
  icon: string;
  title: string;
  proficiency: string;
  alt: string;
}

export default function SkillCard({ icon, title, proficiency, alt }: SkillCardProps) {
  return (
    <div className="skill-card">
      <img src={icon} alt={alt} className="skill-icon" />
      <h3>{title}</h3>
      <p className="proficiency">{proficiency}</p>
    </div>
  );
}
