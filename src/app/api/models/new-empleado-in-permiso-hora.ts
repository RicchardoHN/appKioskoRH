/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Empleado, 'idEmpleado'>, 'permisoHoraId'>, schemaOptions: { title: 'NewEmpleadoInPermisoHora', exclude: [ 'idEmpleado' ], optional: [ 'permisoHoraId' ] })
 */
export interface NewEmpleadoInPermisoHora {
  departamento: string;
  marcarId?: string;
  nombreCompleto: string;
  permisoDiaId?: string;
  permisoHoraId?: string;
  puesto: string;
  turnosId?: string;
  vacacionesId?: string;
}
