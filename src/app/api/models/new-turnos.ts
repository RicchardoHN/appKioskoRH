/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Turnos, 'idTurno'>, schemaOptions: { title: 'NewTurnos', exclude: [ 'idTurno' ] })
 */
export interface NewTurnos {
  idEmpleado: string;
  matutino: string;
  mixto: string;
  nocturno: string;
  vespertino: string;
}
