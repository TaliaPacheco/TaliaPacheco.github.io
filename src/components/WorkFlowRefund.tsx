import maletaSVG from '../assets/icons/maleta.svg';

import loginIMG from '../assets/Tela-login.png'
import managerIMG from '../assets/Tela-manager.png'
import employeeIMG from '../assets/Tela-employee.png'

interface WorkFlowSectionProps {
  workflow?: React.ReactNode;
}

export default function WorkFlowRefund({ workflow }: WorkFlowSectionProps) {

  if (!workflow) return null;

  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          color: 'white',
          padding: isMobile ? "15px 0" : "30px",
          }}
      >
          <div 
            style={{
              display: 'flex',
              gap: isMobile ? "8px" : "10px",
            }}
          >
            <img style={{ 
                  width: isMobile ? "23px" : "29px", 
                  height: isMobile ? "24px" : "15%", 
                  flex: "start"
                }}
                  src={maletaSVG} alt="icone de maleta" 
            />
            <h2 
              style={{ 
                fontSize: isMobile ? "1.3rem" : "2rem", 
                fontWeight: 600,  
                }}
              >Fluxo de Trabalho do Projeto</h2>
          </div>
        <ul 
          style={{
            fontSize: isMobile ? "0.95rem" : "1.2rem", 
            marginLeft: isMobile ? "22.5px" : "45px",
            marginTop: "12px",
            lineHeight: "1.5"
          }}
        >
          <li> O funcionário acessa o sistema e preenche o formulário de reembolso.</li>
          <li> O sistema valida os dados inseridos e envia para aprovação do gerente.</li>
          <li> O gerente revisa o pedido e aprova ou rejeita o reembolso.</li>
          <li> Se aprovado, o departamento financeiro processa o pagamento ao funcionário.</li>
          <li> O funcionário é notificado sobre o status do reembolso.</li>
        </ul>
      </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
                    display: "flex",
                    width: "100%",
                    marginTop: isMobile ? "20px" : "40px",
                    height: isMobile ? "auto" : "450px",
                    border: "1px solid #C5A7FC",
                    alignItems: "flex-start",
                    borderRadius: "8px",
                    flexDirection: "column",
                    backgroundColor: "#362752",
                    overflow: "hidden",
                    minHeight: isMobile ? "auto" : undefined,
                    padding: "16px"
            }}  
          >
            <h2  
              style={{
                padding: "15px 0",
                color: "#C5A7FC",
              }}>Tela de login:</h2>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              width: "100%"
            }}>
              <img src={loginIMG} alt=""
                style={{
                  borderRadius: "20px",
                  width: "70%",
                  height: isMobile ? "auto" : "85%",
                  objectFit: "cover",
                }}
                />
            </div>
          </div>

        </div>
        <div
            style={{
                    display: "flex",
                    width: "100%",
                    marginTop: isMobile ? "20px" : "40px",
                    height: isMobile ? "auto" : "450px",
                    border: "1px solid #C5A7FC",
                    alignItems: "flex-start",
                    borderRadius: "8px",
                    flexDirection: "column",
                    backgroundColor: "#362752",
                    overflow: "hidden",
                    minHeight: isMobile ? "auto" : undefined,
                    padding: "16px"
            }}  
        >
            <h2  
              style={{
                padding: "15px 0",
                color: "#C5A7FC",
              }}>Tela Manager:</h2>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              width: "100%"
            }}>
              <img src={managerIMG} alt=""
                style={{
                  borderRadius: "20px",
                  width: "70%",
                  height: isMobile ? "auto" : "85%",
                  objectFit: "cover",
                }}
                />
            </div>
        </div>

        <div
            style={{
                    display: "flex",
                    width: "100%",
                    marginTop: isMobile ? "20px" : "40px",
                    height: isMobile ? "auto" : "450px",
                    border: "1px solid #C5A7FC",
                    alignItems: "flex-start",
                    borderRadius: "8px",
                    flexDirection: "column",
                    backgroundColor: "#362752",
                    overflow: "hidden",
                    minHeight: isMobile ? "auto" : undefined,
                    padding: "16px"
            }}  
        >
            <h2  
              style={{
                padding: "15px 0",
                color: "#C5A7FC",
              }}>Tela Employee:</h2>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              width: "100%"
            }}>
              <img src={employeeIMG} alt=""
                style={{
                  borderRadius: "20px",
                  width: "70%",
                  height: isMobile ? "auto" : "85%",
                  objectFit: "cover",
                }}
                />
            </div>
        </div>
    </div>
  );
}