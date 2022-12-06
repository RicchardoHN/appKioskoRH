/* tslint:disable */
/* eslint-disable */
import { EmpleadoWithRelations } from './empleado-with-relations';

/**
 * (tsType: MarcarWithRelations, schemaOptions: { includeRelations: true })
 */
export interface MarcarWithRelations {
  empleados?: Array<EmpleadoWithRelations>;
  horaEntrada: string;
  horaSalida: string;
  idEmpleado?: string;
  nombreCompleto: string;
}
