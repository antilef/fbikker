import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-rent-button',
  imports: [],
  templateUrl: './add-rent-button.component.html',
  styleUrl: './add-rent-button.component.css'
})
export class AddRentButtonComponent {
  @Input('name') name: string = ''; 

}
