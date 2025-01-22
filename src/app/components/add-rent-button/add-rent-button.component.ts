import { Component, inject, Input, OnInit,TemplateRef } from '@angular/core';
import { Bike } from '../../model/entity.interface';
import { BikeService } from '../../services/api/bike.service';
import { NgbDatepickerModule,NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-rent-button',
  imports: [NgbDatepickerModule],
  templateUrl: './add-rent-button.component.html',
  styleUrl: './add-rent-button.component.css'
})
export class AddRentButtonComponent implements OnInit {
  @Input('name') name: string = ''; 
  bikes: Bike[] = [];
  private modalService = inject(NgbModal);

  constructor(private bikeService: BikeService){
  
  }
  ngOnInit(): void {
    this.bikeService.getAllBikesAvailable();
    this.bikeService.bikes$.subscribe((bikes) => {
      this.bikes = bikes;
      console.log("bikes: ..",this.bikes)
    })
  }

  open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'Add rent',centered: true }).result.then(
			(result) => {
				console.log(result)
			},
			(reason) => {
				console.log("reason",reason)
			},
		);
	}

}
