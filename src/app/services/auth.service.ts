import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  token: string = '';
  API_HOST: string= 'http://localhost:8080/'
  loginRoute : string =  'api/v1/auth/login'

  constructor(private http: HttpClient) { }

  logIn(email: string, password: string):Observable<any>{

    return this.http.post(`${this.API_HOST}${this.loginRoute}`
      ,JSON.stringify({ email,password}),{
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }
    )


  }
}
