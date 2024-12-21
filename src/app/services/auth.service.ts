import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = '';
  API_HOST: string= 'http://localhost:8080/'
  loginRoute : string =  'api/v1/auth/login'

  constructor() { }

  async logIn(email: string, password: string): Promise<string | Error>{
    let response = await fetch(`${this.API_HOST}${this.loginRoute}`,{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({email,password})
    })
    
    if(response.status!= 200){
      return new Error('')
    }

    let body = response.json();
    return body

  }
}
