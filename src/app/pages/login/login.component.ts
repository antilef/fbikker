import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',

})
export class LoginComponent {
    
    logInForm: FormGroup;
    authService: AuthService;
    errorMessage: string = '';

    constructor(authService: AuthService, private router: Router){

        this.authService = authService;

        this.logInForm = new FormGroup({
            email: new FormControl('',[
                Validators.required,
                Validators.email
            ]),
            password: new FormControl('',[
                Validators.minLength(8)
            ])
        })

    }

    get email(){
        return this.logInForm.get('email');
    }

    get password(){
        return this.logInForm.get('password')
    }
    
    logIn(){
        let emailSend = this.email;
        let passwordSend = this.password;
        this.authService.logIn(emailSend?.value,passwordSend?.value)
        .subscribe({
            next:(response) => {
                
                localStorage.setItem('token',response.token)
                localStorage.setItem('expiredIn',response.expiredIn.toString())
                this.router.navigate(['/home'])
                
            },
            error:(error)=> {
                this.errorMessage = 'Error at login'
            }
        })
       
        
        
    }

}
