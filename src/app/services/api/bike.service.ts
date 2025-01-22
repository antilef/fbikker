import { Injectable } from '@angular/core';
import { Bike } from '../../model/entity.interface';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BikeService {

  private _bikes = new BehaviorSubject<Bike[]>([]);

  public readonly bikes$ = this._bikes.asObservable();

  constructor(private http:HttpClient) {
    
  }


  getAllBikesAvailable(){
    let token = localStorage.getItem('token')

    if (!token) {
      console.error('Token is missing');
      return;
    }
    
    this.http.get<{ bikes: Bike[]}>(environment.BACKEND_API_BASE+"bikes/availables",{

      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': `Bearer ${token}`
      })
    })
    .pipe(
      catchError((error) => {
        console.error(error)
        return throwError(error)
      })
    )
    .subscribe((response)=>{
      this._bikes.next(response.bikes)
    })
  }

}
