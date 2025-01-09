import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  loggIn:boolean= true;

  constructor(private authService: AuthService, private router:Router){
    //this.loggIn = this.authService.isAuthenticated()
  }

  onLogOut(event: any){
    console.log('logOut')
    localStorage.removeItem('token')
    localStorage.removeItem('expiredIn')
    this.loggIn = false
    this.router.navigate(['/'])
  }
}
