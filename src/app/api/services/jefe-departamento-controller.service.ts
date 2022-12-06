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

import { Departamento } from '../models/departamento';

@Injectable({
  providedIn: 'root',
})
export class JefeDepartamentoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation jefeDepartamentoControllerGetDepartamento
   */
  static readonly JefeDepartamentoControllerGetDepartamentoPath = '/jefes/{id}/departamento';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDepartamento()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDepartamento$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Departamento>>> {

    const rb = new RequestBuilder(this.rootUrl, JefeDepartamentoControllerService.JefeDepartamentoControllerGetDepartamentoPath, 'get');
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
        return r as StrictHttpResponse<Array<Departamento>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDepartamento$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDepartamento(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<Departamento>> {

    return this.getDepartamento$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Departamento>>) => r.body as Array<Departamento>)
    );
  }

}
