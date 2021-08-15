import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor( private  http: HttpClient ) { }

  getRequest(route: string, token?: string, strQuery?: string) {
    const config: any = {
      responseType: 'json',
    };
    if (token) {
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      config.headers = header;
      console.log(token);
    }
    if (strQuery) {
      const params = new HttpParams().set('lineMobile', `${strQuery}`);
      config.params = params;
    }
    return this.http.get(route, config);
  }

}
