/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Empleado, 'idEmpleado'>, 'vacacionesId'>, schemaOptions: { title: 'NewEmpleadoInVacaciones', exclude: [ 'idEmpleado' ], optional: [ 'vacacionesId' ] })
 */
export interface NewEmpleadoInVacaciones {
  departamento: string;
  marcarId?: string;
  nombreCompleto: string;
  permisoDiaId?: string;
  permisoHoraId?: string;
  puesto: string;
  turnosId?: string;
  vacacionesId?: string;
}
