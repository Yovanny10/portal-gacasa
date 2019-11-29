import  Swal  from 'sweetalert2';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { pipe } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
//import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { environment } from 'environments/environment';
import { LoginService } from 'app/pages/content-layout-page/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CasaService {
  private urlService: any = environment;

  constructor(private http:Http, 
              public router: Router,
              private loginService:LoginService ) { }

  // Headers
  private headersREST(): Headers {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const token = this.loginService.revelarToken(sessionStorage.getItem('token'));
    myHeaders.append('Authorization','Bearer '+token.tokenValid);
    return myHeaders;

    }
    private handleError(error: Response) {
    const setError = (error['_body']) ? JSON.parse(error['_body']) : error.statusText;
    const json = {
      Errors: setError,
      Resultado: [],
      EsExitoso: false,
      Status: error.status
    };
    return Observable.throw(json);
    }

    public validateCasa(dataCasa):Observable<any>{
      const url = 'http://localhost:3000/casa'
      return this.http.post(url, dataCasa,
      { headers: this.headersREST() })
       .pipe(map(response => {        
          return response.json();
        }), pipe(catchError(this.handleError)))
      }
      
    //Get obtener salon
    public obtenerCasa(): Observable<any> {
    const url='http://localhost:3000/casa'
      return this.http.get(url,
      { headers: this.headersREST() }).pipe(
        map(response => {        
          return response.json();
        }), pipe(catchError(this.handleError)))
    }
     

}
