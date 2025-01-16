import { Injectable } from '@angular/core';
import { Bike } from '../../model/entity.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  bikes: Bike[] = [];

  constructor(private http:HttpClient) {
    this.getAllBikesAvailable();
  }

  getAllBikesAvailable(){
    console.log("Getting all bikes for the user")
  }

}
