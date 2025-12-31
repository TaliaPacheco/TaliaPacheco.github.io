import RestaurantDoc from './RestaurantDoc.json';
import CursosDoc from './CursosDoc.json';
import TicketsDocs from './TicketsDocs.json';
import type { WorkflowDocumentation } from '../types/workflow';

const restaurantData: WorkflowDocumentation = RestaurantDoc;
const cursosData: WorkflowDocumentation = CursosDoc;
const ticketsData: WorkflowDocumentation = TicketsDocs;

export {
  restaurantData as RestaurantDoc,
  cursosData as CursosDoc,
  ticketsData as TicketsDocs,
};
