import maletaSVG from '../assets/icons/maleta.svg';
import { useTranslation } from 'react-i18next';

import loginIMG from '../assets/Tela-login.png'
import managerIMG from '../assets/Tela-manager.png'
import employeeIMG from '../assets/Tela-employee.png'

interface WorkFlowSectionProps {
  workflow?: React.ReactNode;
}

export default function WorkFlowRefund({ workflow }: WorkFlowSectionProps) {
  const { t } = useTranslation();

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
              >{t('workflow.refund.workflowTitle')}</h2>
          </div>
        <ul 
          style={{
            fontSize: isMobile ? "0.95rem" : "1.2rem", 
            marginLeft: isMobile ? "22.5px" : "45px",
            marginTop: "12px",
            lineHeight: "1.5"
          }}
        >
          <li>{t('workflow.refund.step1')}</li>
          <li>{t('workflow.refund.step2')}</li>
          <li>{t('workflow.refund.step3')}</li>
          <li>{t('workflow.refund.step4')}</li>
          <li>{t('workflow.refund.step5')}</li>
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
              }}>{t('workflow.refund.loginScreen')}</h2>
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
              }}>{t('workflow.refund.managerScreen')}</h2>
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
              }}>{t('workflow.refund.employeeScreen')}</h2>
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