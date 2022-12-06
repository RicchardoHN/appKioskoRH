/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Turnos } from '../models/turnos';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoTurnosControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation empleadoTurnosControllerGetTurnos
   */
  static readonly EmpleadoTurnosControllerGetTurnosPath = '/empleados/{id}/turnos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTurnos()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTurnos$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Turnos>>> {

    const rb = new RequestBuilder(this.rootUrl, EmpleadoTurnosControllerService.EmpleadoTurnosControllerGetTurnosPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Turnos>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTurnos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTurnos(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<Turnos>> {

    return this.getTurnos$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Turnos>>) => r.body as Array<Turnos>)
    );
  }

}
