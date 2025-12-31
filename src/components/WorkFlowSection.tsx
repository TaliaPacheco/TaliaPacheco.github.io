import React from 'react';
import nestSVG from '../assets/icons/nestjs.svg';
import goSVG from '../assets/icons/go.svg';
import pythonSVG from '../assets/icons/python.svg';
import rabbitmqSVG from '../assets/icons/rabbitmq.svg';
import databaseSVG from '../assets/icons/database.svg';
import reactSVG from '../assets/icons/react.svg';
import tailwindSVG from '../assets/icons/tailwind.svg';
import shadcnPNG from '../assets/icons/shadcn.png';
import viteSVG from '../assets/icons/vite.svg';



interface WorkFlowSectionProps {
  workflow?: React.ReactNode;
}

export default function WorkFlowSection({ workflow }: WorkFlowSectionProps) {

  if (!workflow) return null;

  const isMobile = window.innerWidth <= 768;

  return (
    <div style={{ padding: isMobile ? "10px 5px" : "10px", marginLeft: isMobile ? "0" : "10px" }}>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <h2 style={{ fontSize: isMobile ? "1.5rem" : "2rem", fontWeight: 700 }}>Workflow</h2>
      </div>
        <div 
            style={{ 
                width: "100%",
                height: isMobile ? "auto" : "360px",
                border: "1px solid #C5A7FC",
                borderRadius: "8px",
                justifyContent: "center", 
                alignItems: "center",
                backgroundColor: "#362752",
                overflow: "hidden",
                minHeight: isMobile ? "auto" : undefined
                }}
        >
            <h2 
                style={{ 
                    padding: "25px",
                    fontSize: "1.5rem", 
                    fontWeight: "bold", 
                    color: "#C5A7FC" 
                }}
            >
                Backend
            </h2>
            <div
                style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "auto",
                    height: isMobile ? "auto" : "45%",
                    gap: isMobile ? "15px" : "0"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "auto",
                        gap: isMobile ? "15px" : "30px",
                        flexWrap: isMobile ? "wrap" : "nowrap"
                    }}
                >
                    <div 
                        style={{ 
                            display: "flex", 
                            flexDirection: "column",
                            justifyContent: "center", 
                            alignItems: "center", 
                            gap: "8px"
                        }}  
                    >
                    <div 
                        style={{ 
                            display: "flex", 
                            justifyContent: "center", 
                            alignItems: "center", 
                            width: "65px", 
                            height: "65px", 
                            borderRadius: "50%", 
                            backgroundColor: "#4A3F63" 
                        }}  
                    >
                        <img src={pythonSVG} alt="" 
                        style={{ 
                            width: "40px", 
                            height: "40px" 
                        }}  
                        />
                    </div>
                    <h3 style={{ fontSize: "14px", color: "#C5A7FC", margin: "0" }}>Python</h3>
                    <p style={{ fontSize: "12px", color: "#C5A7FC", margin: "0" }}>Collector</p>
                    </div>

                    <p style={{ display: "flex", alignItems: "center", marginTop: isMobile ? "0" : "20px", fontSize: isMobile ? "1.5rem" : "1rem", transform: isMobile ? "rotate(90deg)" : "none" }}>⟶</p>
                    <div 
                        style={{ 
                            display: "flex", 
                            flexDirection: "column",
                            justifyContent: "center", 
                            alignItems: "center",
                            gap: "8px"
                        }}
                    >
                    <div 
                        style={{ 
                            display: "flex", 
                            justifyContent: "center", 
                            alignItems: "center", 
                            width: "65px", 
                            height: "65px", 
                            borderRadius: "50%", 
                            backgroundColor: "#4A3F63" 
                        }}
                    >
                        <img 
                        src={rabbitmqSVG} alt="" 
                            style={{ 
                                width: "40px", 
                                height: "40px" 
                            }} 
                        />
                    </div>
                    <h3 style={{ fontSize: "14px", color: "#C5A7FC", margin: "0" }}>RabbitMQ</h3>
                    <p style={{ fontSize: "12px", color: "#C5A7FC", margin: "0" }}>Message Broker</p>
                    </div>
                    <p style={{ display: "flex", alignItems: "center", marginTop: isMobile ? "0" : "20px", fontSize: isMobile ? "1.5rem" : "1rem", transform: isMobile ? "rotate(90deg)" : "none" }}>⟶</p>
                    <div 
                        style={{ 
                            display: "flex", 
                            flexDirection: "column",
                            justifyContent: "center", 
                            alignItems: "center",
                            gap: "8px"
                        }}
                        >
                    <div 
                        style={{ 
                            display: "flex", 
                            justifyContent: "center", 
                            alignItems: "center", 
                            width: "65px", 
                            height: "65px", 
                            borderRadius: "50%", 
                            backgroundColor: "#4A3F63" 
                        }}
                    >
                        <img src={goSVG} alt="" style={{ width: "40px", height: "40px" }} />
                    </div>
                    <h3 style={{ fontSize: "14px", color: "#C5A7FC", margin: "0" }}>Go</h3>
                    <p style={{ fontSize: "12px", color: "#C5A7FC", margin: "0" }}>Worker</p>
                    </div>
                    <p style={{ display: "flex", alignItems: "center", marginTop: isMobile ? "0" : "20px", fontSize: isMobile ? "1.5rem" : "1rem", transform: isMobile ? "rotate(90deg)" : "none" }}>⟶</p>
                    <div 
                        style={{ 
                            display: "flex", 
                            flexDirection: "column",
                            justifyContent: "center", 
                            alignItems: "center",
                            gap: "8px"
                        }}
                        >
                    <div 
                        style={{ 
                            display: "flex", 
                            justifyContent: "center", 
                            alignItems: "center", 
                            width: "65px", 
                            height: "65px", 
                            borderRadius: "50%", 
                            backgroundColor: "#4A3F63" 
                        }}
                    >
                        <img src={nestSVG} alt="" style={{ width: "40px", height: "40px" }} />
                    </div>
                    <h3 style={{ fontSize: "14px", color: "#C5A7FC", margin: "0" }}>NestJS</h3>
                    <p style={{ fontSize: "12px", color: "#C5A7FC", margin: "0" }}>API</p>
                    </div>
                </div>
            </div>
                <div 
                    style={{
                        display: "flex", 
                        justifyContent: "center",
                        alignItems: "center",
                        padding: isMobile ? "15px 0" : "20px 0 20px 0",
                    }}
                >
                    <div 
                        style={{
                            opacity: "40%",
                            width: "100%",
                            height: "1px",
                            borderTop: "2px dashed #C5A7FC",
                        }}
                    >
                    </div>
                </div> 
                <div 
                    style={{
                       
                        opacity: "50%",
                        display: "flex", 
                        justifyContent: isMobile ? "center" : "flex-end",
                        alignItems: "center",
                        padding: isMobile ? "15px 15px 15px 15px" : "1px 60px 0px 0px",
                        marginTop: isMobile ? "15px" : "0"
                    }}    
                >
                    <div
                        style={{
                            width: isMobile ? "90%" : "30%",
                            height: "50px",
                            borderRadius: "10px",
                            border: "1px solid #C5A7FC",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            paddingLeft: "10px"
                        }}
                    >
                        <img style={{
                            width: "20px",
                            height: "20px",
                            flexShrink: 0
                        }} src={databaseSVG} alt="" />
                        <p style={{ color: "#C5A7FC", margin: "0", flex: "1" }}>Database: <strong>MongoDB</strong></p>
                    </div>
                </div>
        </div>  
        <div 
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px 0"
            }}>
            <span 
                style={{ 
                    fontSize: "3rem", 
                    color: "#C5A7FC",
                }}
            >
                ↓
            </span>
        </div>

        <div 
            style={{ 
                width: "100%",
                height: isMobile ? "auto" : "235px",
                borderRadius: "10px",
                justifyContent: "center", 
                alignItems: "center",
                backgroundColor: "#362752",
                overflow: "hidden",
                padding: isMobile ? "15px" : "25px"
                }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    paddingLeft: isMobile ? "0" : "20px"
                }}
            >
                <h2 style={{  
                        fontSize: isMobile ? "1.2rem" : "1.5rem", 
                        fontWeight: "bold", 
                        color: "#C5A7FC",
                        margin: "0"
                    }}
                >
                    Frontend
                </h2> 
                <p style={{ fontSize: isMobile ? "0.9rem" : "1rem", padding: "10px 0px 10px 0px" }}>A interface foi construida com as seguintes tecnologias:</p>

                <div 
                    style={{
                        backgroundColor: "#2d1b4e",
                        height: isMobile ? "auto" : "40%",
                        border: "1px solid #C5A7FC",
                        borderRadius: "10px",
                        marginTop: "15px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "space-between",
                        padding: isMobile ? "15px" : "20px",
                        gap: isMobile ? "15px" : "0"
                    }}
                >
                    <div 
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center", 
                                        width: "35px", 
                                        height: "35px", 
                                        borderRadius: "50%", 
                                        border: "2px solid #2d1b4e",
                                        backgroundColor: "#4A3F63" 
                                    }}
                                >
                                    <img src={reactSVG} 
                                        style={{   
                                            width: "24px", 
                                            height: "24px" 
                                        }} 
                                        />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center", 
                                        width: "35px", 
                                        height: "35px", 
                                        borderRadius: "50%", 
                                        border: "2px solid #2d1b4e",
                                        backgroundColor: "#4A3F63" 
                                    }}
                                >
                                    <img src={viteSVG} 
                                        style={{   
                                            width: "24px", 
                                            height: "24px" 
                                        }} 
                                        />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center", 
                                        width: "35px", 
                                        height: "35px", 
                                        borderRadius: "50%", 
                                        border: "2px solid #2d1b4e",
                                        backgroundColor: "#4A3F63" 
                                    }}
                                >
                                    <img src={tailwindSVG} 
                                        style={{   
                                            width: "24px", 
                                            height: "24px" 
                                        }} 
                                        />
                                </div>
                                 <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center", 
                                        width: "35px", 
                                        height: "35px", 
                                        borderRadius: "50%", 
                                        border: "2px solid #2d1b4e",
                                        backgroundColor: "#4A3F63" 
                                    }}
                                >
                                    <img src={shadcnPNG} 
                                        style={{   
                                            width: "30px", 
                                            height: "30px" 
                                        }} 
                                        />
                                </div>
                            </div>
                        </div>
                            
                        <div style={{ gap: "8px", marginLeft: "15px" }}>
                            <h4>Tecnologias</h4>
                            <p style={{fontSize: "0.8rem"}}>React ● Vite ● Tailwind ● shadcn/ui</p>
                        </div>
                    </div>
                    <div
                        style={{
                            width: isMobile ? "100%" : "30%",
                            border: "1px solid  rgba(197, 167, 252, 0.541)",
                            backgroundColor: "#362752",
                            borderRadius: "10px",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "8px"
                        }}
                    >
                        <h4 style={{ color: "#C5A7FC", }}>● Conectado ao Nest</h4>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </div>
    
  );
}
