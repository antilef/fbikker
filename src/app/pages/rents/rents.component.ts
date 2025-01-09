import { Component } from '@angular/core';
import { AddButtonComponent } from '../../components/add-button/add-button.component';

@Component({
  selector: 'app-rents',
  imports: [AddButtonComponent],
  templateUrl: './rents.component.html',
  styleUrl: './rents.component.css'
})
export class RentsComponent {
  name: string = "Rent"
}
