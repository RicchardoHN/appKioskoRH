/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Empleado, 'idEmpleado'>, 'turnosId'>, schemaOptions: { title: 'NewEmpleadoInTurnos', exclude: [ 'idEmpleado' ], optional: [ 'turnosId' ] })
 */
export interface NewEmpleadoInTurnos {
  departamento: string;
  marcarId?: string;
  nombreCompleto: string;
  permisoDiaId?: string;
  permisoHoraId?: string;
  puesto: string;
  turnosId?: string;
  vacacionesId?: string;
}
