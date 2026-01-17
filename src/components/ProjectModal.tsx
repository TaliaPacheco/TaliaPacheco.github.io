import '../styles/ProjectModal.css';
import { useTranslation } from 'react-i18next';

import imageClima from '../assets/images/climaImg.png'
import arquivoSVG from '../assets/icons/arquivo.svg';
import WorkFlowSection from './WorkFlowSection';
import WorkFlowRefund from './WorkFlowRefund';
import WorkFlowRestaurante from './WorkFlowRestaurant';
import WorkFlowCursos from './WorkFlowCursos';
import WorkFlowTickets from './WorkFlowTickets';

interface ProjectDetails {
  title: string;
  description: string;
  details?: string;
  technologies?: string[];
  features?: string[];
  link?: string;
  image?: string;
  WorkFlow?: React.ReactNode;
  id?: number;
}

interface ProjectModalProps {
  isOpen: boolean;
  project: ProjectDetails | null;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, project, onClose, }: ProjectModalProps) {
  const { t } = useTranslation();

    if (!isOpen || !project) return null;

    const isMobile = window.innerWidth <= 768;
    

    return (
        <div 
            style={{
                flex:1,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
                padding: isMobile ? "10px" : "0",
            }}
        >
            <div  className="project-modal-content"
                style={{

                    position: "relative",
                    background: "linear-gradient(135deg, #1a1f2e 0%, #2d1b4e 100%)",
                    height: isMobile ? "90vh" : "70vh",
                    width: isMobile ? "95vw" : "70vw",
                    borderRadius: 20,
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    overflow:"hidden",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
                    animationName: `slideUp`,
                    animationDuration: `0.4s`,
                    animationTimingFunction: `ease-out`,
                    animationFillMode: `fadeIn`,
                }}
            >
                {project.link && (
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-action-button"
                        style={{
                            position: "absolute",
                            bottom: isMobile ? "15px" : "30px",
                            right: isMobile ? "15px" : "30px",
                            background: "linear-gradient(135deg, #fca6ec 0%, #ff88e0 100%)",
                            color: "#000",
                            border: "none",
                            padding: isMobile ? "10px 20px" : "12px 28px",
                            borderRadius: "50px",
                            fontSize: isMobile ? "12px" : "14px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            transition: "all 0.3s ease",
                            boxShadow: "0 4px 15px rgba(252, 166, 236, 0.4)",
                            textDecoration: "none",
                            zIndex: 10,
                        }}
                    >
                        {isMobile ? t('projects.clickToLearn') : t('projects.viewFullProject')} <span style={{ fontSize: isMobile ? "14px" : "16px" }}>↗</span>
                    </a>
                )}
                <div style={{ height: isMobile ? "10%" : "100%", width: isMobile ? "100%" : "30%" }}>
                    <img src={project.image || imageClima}
                        style={{ height: "100%", width: "100%", objectFit: "cover" }}
                        alt="" />
                </div>
                <div style={{ height: isMobile ? "95.5%" : "100%", width: isMobile ? "100%" : "70%" }}>
                    <div
                        style={{
                            width: "100%",
                            height: isMobile ? "auto" : "14%",
                            padding: isMobile ? "20px" : "40px"
                        }}
                    >

                        <h1 style={{fontSize: isMobile ? "28px" : "48px", marginBottom: 16}}> {project.title} </h1>
                    </div>
                    <div
                       
                        style={{
                            width: isMobile ? "100%" : "98%",
                            height: "72.5%",
                            overflowY: "auto",
                            padding: isMobile ? "15px" : "19px",
                            marginLeft: isMobile ? "0" : "10px",
                            boxShadow: "inset 0 -15px 15px 0 rgba(0, 0, 0, 0.199)",
                            zIndex: 100000

                        }}
                    >
                        <h3 style={{fontSize: isMobile ? "14px" : "18px", 
                                fontWeight: "normal", 
                                color: "#fca6ec", 
                                marginBottom: "20px", 
                                marginLeft: isMobile ? "0" : "10px"}}>
                                    {t('projects.technologies')}
                        </h3>
                        <div style={{ display: "flex", 
                            flexWrap: "wrap", 
                            gap: isMobile ? "6px" : "8px", 
                            marginLeft: isMobile ? "0" : "15px"
                            }}>
                            {project.technologies?.map((tech, index) => (
                                        <span 
                                            key={index}
                                            style={{
                                                backgroundColor: "#362752",
                                                color: "#ffffff",
                                                padding: isMobile ? "4px 8px" : "6px 12px",
                                                borderRadius: "50px",
                                                border: "1px solid #C5A7FC",
                                                fontSize: isMobile ? "10px" : "12px",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                        </div>
                            <div style={{ padding: isMobile ? "15px 0" : "30px" }}>
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <img style={{ 
                                        width: isMobile ? "24px" : "30px", 
                                        height: isMobile ? "24px" : "10%", 
                                        marginRight: "8px" 
                                        }}
                                         src={arquivoSVG} alt="icone de arquivo" 
                                    />
                                    <h2 style={{ fontSize: isMobile ? "1.3rem" : "2rem", fontWeight: 700,  marginBottom: "0px" }}>{t('projects.aboutProject')}</h2>
                                </div>
                                <p 
                                    style=
                                        {{color: "#ffffff", 
                                        fontSize: isMobile ? "0.95rem" : "1.2rem", 
                                        marginLeft: isMobile ? "0" : "10px",
                                        marginTop: "12px",
                                        padding: isMobile ? "0" : "6px 12px",
                                        lineHeight: "1.5"
                                        }}
                                    >
                                        {project.details}
                                    </p>
                            </div>
                            {project.id === 1 && <WorkFlowSection workflow={project.WorkFlow} />}
                            {project.id === 2 && <WorkFlowRefund workflow={project.WorkFlow} />}
                            {project.id === 3 && <WorkFlowRestaurante workflow={project.WorkFlow} />}
                            {project.id === 4 && <WorkFlowCursos workflow={project.WorkFlow} />}
                            {project.id === 5 && <WorkFlowTickets workflow={project.WorkFlow} />}
                    </div>
                    
                </div>
                
               <button className="close-button" onClick={onClose}>×</button>
            </div>
        </div>
    );
}
