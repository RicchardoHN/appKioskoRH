/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Empleado, 'idEmpleado'>, schemaOptions: { title: 'NewEmpleado', exclude: [ 'idEmpleado' ] })
 */
export interface NewEmpleado {
  departamento: string;
  marcarId?: string;
  nombreCompleto: string;
  permisoDiaId?: string;
  permisoHoraId?: string;
  puesto: string;
  turnosId?: string;
  vacacionesId?: string;
}
