import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { User } from '../model/entity.interface';

export interface LoginResponse {
  token: string,
  expiredIn: number,
  userId:number;
  email:string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginRoute : string =  'auth/login'
  private _user: User = {
    id: 0,
    email: "",
    firstName:"",
    lastName: "",
  };

  constructor(private http: HttpClient) { }

  set user(user: User){
    this._user = user;
  }
  get user(){
    return this._user;
  }

  logIn(email: string, password: string): Observable<LoginResponse>{

    return this.http.post<LoginResponse>(`${environment.BACKEND_API_BASE}${this.loginRoute}`
      ,JSON.stringify({ email,password}),{
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }
    )
    
    .pipe(
      catchError((error)=> {
        return throwError(() => error);
      })
    );


  }

  isAuthenticated(){
    let token = localStorage.getItem('token')
    return token!== null && token !== undefined;
  }
  
}
