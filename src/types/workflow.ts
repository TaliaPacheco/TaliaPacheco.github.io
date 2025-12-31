/**
 * Tipos para os workflows de projetos
 */

export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';

export interface APIEndpoint {
  route: string;
  method: HTTPMethod | string;
  description: string;
}

export type APIEndpointGroup = APIEndpoint[];

export interface WorkflowDocumentation {
  [groupName: string]: APIEndpointGroup;
}

export interface WorkFlowSectionProps {
  workflow?: React.ReactNode;
}
