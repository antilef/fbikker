import { Component } from '@angular/core';
import { AddRentButtonComponent } from '../../components/add-rent-button/add-rent-button.component';

@Component({
  selector: 'app-rents',
  imports: [AddRentButtonComponent],
  templateUrl: './rents.component.html',
  styleUrl: './rents.component.css'
})
export class RentsComponent {
  name: string = "Rent"
}
