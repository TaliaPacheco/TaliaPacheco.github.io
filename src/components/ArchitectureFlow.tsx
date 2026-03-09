import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/ArchitectureFlow.css';

gsap.registerPlugin(ScrollTrigger);

export interface TechIcon {
  icon: string;
  name: string;
}

export interface FlowStep {
  icon: string;
  name: string;
  roleKey: string;
  description: string;
  detail: string;
  accent: string;
  techIcons?: TechIcon[];
}

interface ArchitectureFlowProps {
  titleKey: string;
  subtitleKey: string;
  githubUrl: string;
  image: string;
  imageAlt: string;
  steps: FlowStep[];
  dockerIcon?: string;
}

export default function ArchitectureFlow({
  titleKey,
  subtitleKey,
  githubUrl,
  image,
  imageAlt,
  steps,
  dockerIcon,
}: ArchitectureFlowProps) {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rows = section.querySelectorAll('.arch-row');
    const connectorPaths = section.querySelectorAll('.arch-connector-path');

    rows.forEach((row) => {
      const node = row.querySelector('.arch-node');
      const detail = row.querySelector('.arch-detail');

      if (node) {
        gsap.fromTo(
          node,
          { opacity: 0, x: -40, scale: 0.92 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (detail) {
        gsap.fromTo(
          detail,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            delay: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    connectorPaths.forEach((path) => {
      const svgPath = path as SVGPathElement;
      const length = svgPath.getTotalLength();
      gsap.set(svgPath, { attr: { 'stroke-dasharray': length, 'stroke-dashoffset': length } });
      gsap.to(svgPath, {
        attr: { 'stroke-dashoffset': 0 },
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: svgPath.closest('.arch-connector'),
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    });

    const header = section.querySelector('.arch-header');
    if (header) {
      gsap.fromTo(
        header,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    const dockerWrapper = section.querySelector('.docker-wrapper');
    if (dockerWrapper) {
      gsap.fromTo(
        dockerWrapper,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: dockerWrapper,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (section.contains(st.trigger as Element)) {
          st.kill();
        }
      });
    };
  }, []);

  return (
    <div className="arch-section" ref={sectionRef}>
      <div className="arch-header">
        <div className="arch-header-text">
          <h2 className="arch-title">{t(titleKey)}</h2>
          <p className="arch-subtitle">{t(subtitleKey)}</p>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="arch-github-link"
          >
            GitHub →
          </a>
        </div>
        <div className="arch-header-image">
          <img src={image} alt={imageAlt} />
        </div>
      </div>

      <div className="docker-wrapper">
        <div className="docker-header">
          <div className="docker-header-dots">
            <span></span><span></span><span></span>
          </div>
          {dockerIcon && <img src={dockerIcon} alt="Docker" className="docker-header-icon" />}
          <span className="docker-header-label">docker-compose up</span>
        </div>

        <div className="arch-pipeline">
          {steps.map((step, index) => (
            <div key={step.name} className="arch-step">
              {index > 0 && (
                <div className="arch-connector" style={{ '--accent': step.accent } as React.CSSProperties}>
                  <svg viewBox="0 0 40 84" preserveAspectRatio="none">
                    <path
                      className="arch-connector-path"
                      d="M20 0 C20 22, 8 30, 8 42 S20 62, 20 84"
                    />
                    <circle className="arch-connector-glow" cx="0" cy="0">
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path="M20 0 C20 22, 8 30, 8 42 S20 62, 20 84"
                      />
                    </circle>
                  </svg>
                </div>
              )}

              <div className="arch-row" style={{ '--node-accent': step.accent } as React.CSSProperties}>
                <div className="arch-node">
                  <div className="arch-node-icon">
                    <img src={step.icon} alt={step.name} />
                  </div>
                  <div className="arch-node-info">
                    <h3 className="arch-node-name">{step.name}</h3>
                    <span className="arch-node-role">{t(step.roleKey)}</span>
                    <p className="arch-node-desc">{step.description}</p>
                    {step.techIcons && (
                      <div className="arch-node-techs">
                        {step.techIcons.map((tech) => (
                          <div key={tech.name} className="arch-tech-chip">
                            <img src={tech.icon} alt={tech.name} />
                            <span>{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="arch-node-badge" style={{ background: step.accent }}>
                    {index + 1}
                  </div>
                </div>

                <div className="arch-detail">
                  <p>{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
