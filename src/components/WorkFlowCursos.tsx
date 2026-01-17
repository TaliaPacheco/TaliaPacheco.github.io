import { CursosDoc } from '../Base';
import { useTranslation } from 'react-i18next';
import type { WorkFlowSectionProps, APIEndpoint } from '../types/workflow';

const cursosDoc = CursosDoc as Record<string, APIEndpoint[]>;

export default function WorkFlowCursos({ workflow }: WorkFlowSectionProps) {

  const { t } = useTranslation();

  if (!workflow) return null;

  const isMobile = window.innerWidth <= 768;

  return (
    <div >
        <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? "8px" : "10px",
          width: "100%",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "1.3rem" : "2rem",
            fontWeight: 800,
            padding: "20px 0 20px 15px"
          }}
        >
          {t('workflow.apiEndpoints')}
        </h2>
        {
          Object.entries(cursosDoc).map(([GroupName, GroupItens]) => {
            return (
              <div
                style={{
                  display: 'flex',
                  gap: isMobile ? "8px" : "10px",
                  flexDirection: 'column',
                  width: "100%",
                  marginBottom: 10
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      backgroundColor: "#fca6ec ",
                      height: 25,
                      width: "5px",
                      borderRadius: 3,
                    }}
                  />
                  <h2
                    style={{
                      fontSize: 24,
                    }}
                  >
                    {GroupName}
                  </h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: 8,
                    padding: isMobile ? "0" : "10px",
                    
                  }}
                >
                  {GroupItens.map((Item: APIEndpoint) => (
                    <div
                      style={{
                        width: "100%",
                        minHeight: isMobile ? "auto" : 80,
                        borderRadius: 20,
                        backgroundColor: "#F0F0F010",
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: isMobile ? "flex-start" : "center",
                        justifyContent: "flex-start",
                        padding: isMobile ? "12px 16px" : "24px",
                        marginBottom: 3,
                        gap: isMobile ? "8px" : "0"
                      }}
                    >
                      <div
                        style={{
                          width: isMobile ? "100%" : "13%"
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "#C5A7FC20",
                            width: 'fit-content',
                            padding: 8,
                            borderRadius: 10,
                            border: "1px solid #362752",
                            color: "#C5A7FC",
                            fontWeight: "bold",
                            fontSize: isMobile ? "0.85rem" : "1rem"
                          }}
                        >
                          {Item.method}
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <p style={{ fontWeight: "400", fontSize: isMobile ? "0.95rem" : "1.2rem",  marginBottom: 4 }}>{Item.route}</p>
                        <p style={{ fontSize: isMobile ? "0.85rem" : "1rem", fontWeight: "200", }}>{Item.description}</p>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
