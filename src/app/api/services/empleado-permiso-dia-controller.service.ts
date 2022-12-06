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

import { PermisoDia } from '../models/permiso-dia';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoPermisoDiaControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation empleadoPermisoDiaControllerGetPermisoDia
   */
  static readonly EmpleadoPermisoDiaControllerGetPermisoDiaPath = '/empleados/{id}/permiso-dia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPermisoDia()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPermisoDia$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<PermisoDia>>> {

    const rb = new RequestBuilder(this.rootUrl, EmpleadoPermisoDiaControllerService.EmpleadoPermisoDiaControllerGetPermisoDiaPath, 'get');
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
        return r as StrictHttpResponse<Array<PermisoDia>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPermisoDia$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPermisoDia(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<PermisoDia>> {

    return this.getPermisoDia$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PermisoDia>>) => r.body as Array<PermisoDia>)
    );
  }

}
