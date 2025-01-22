import { Component, Input, OnInit } from '@angular/core';
import { Bike } from '../../model/entity.interface';
import { BikeService } from '../../services/api/bike.service';

@Component({
  selector: 'app-add-rent-button',
  imports: [],
  templateUrl: './add-rent-button.component.html',
  styleUrl: './add-rent-button.component.css'
})
export class AddRentButtonComponent implements OnInit {
  @Input('name') name: string = ''; 
  bikes: Bike[] = [];


  constructor(private bikeService: BikeService){
  
  }
  ngOnInit(): void {
    this.bikeService.getAllBikesAvailable();
    this.bikeService.bikes$.subscribe((bikes) => {
      this.bikes = bikes;
      console.log("bikes: ..",this.bikes)
    })
  }

}
