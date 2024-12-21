import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',

})
export class LoginComponent {
    emailSend:string = '';
    passwordSend:string = '';
    logInForm: FormGroup;

    constructor(){
        this.logInForm = new FormGroup({
            email: new FormControl(this.emailSend,[
                Validators.required,
                Validators.email
            ]),
            password: new FormControl(this.passwordSend,[
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

    }

}
