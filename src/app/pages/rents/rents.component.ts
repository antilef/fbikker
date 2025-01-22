import { Component, OnInit } from '@angular/core';
import { AddRentButtonComponent } from '../../components/add-rent-button/add-rent-button.component';
import { BikeService } from '../../services/api/bike.service';
import { Bike } from '../../model/entity.interface';

@Component({
  selector: 'app-rents',
  imports: [AddRentButtonComponent],
  templateUrl: './rents.component.html',
  styleUrl: './rents.component.css'
})
export class RentsComponent {
  name: string = "Rent"

}
