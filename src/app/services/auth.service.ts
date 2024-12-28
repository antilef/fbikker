import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export interface LoginResponse {
  token: string,
  expiredIn: number
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  API_HOST: string= 'http://localhost:8080/'
  loginRoute : string =  'api/v1/auth/login'

  constructor(private http: HttpClient) { }

  logIn(email: string, password: string): Observable<LoginResponse>{

    return this.http.post<LoginResponse>(`${this.API_HOST}${this.loginRoute}`
      ,JSON.stringify({ email,password}),{
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }
    ).pipe(
      catchError((error)=> {
        return throwError(() => error);
      })
    );


  }
}
