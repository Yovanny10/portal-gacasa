import  Swal  from 'sweetalert2';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { pipe } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { Router } from "@angular/router";
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CastigoService {  
  private urlService: any = environment;

  constructor(private http:Http, 
              public router: Router ) { }
  
  // Headers
  private headersREST(): Headers {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
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

    public validateCastigo(dataCastigo):Observable<any>{
      const url = 'http://localhost:3000/castigo'
      return this.http.post(url, dataCastigo,
      { headers: this.headersREST() })
       .pipe(map(response => {        
          return response.json();
        }), pipe(catchError(this.handleError)))
      }

    traerdatosCastogos(){
      var url2 = 'http://localhost:3000/castigo'
      return new Promise(resolve => {
        this.http.get(url2).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    }
  
}
