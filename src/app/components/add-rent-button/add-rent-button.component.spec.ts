import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentButtonComponent } from './add-rent-button.component';

describe('AddButtonComponent', () => {
  let component: AddRentButtonComponent;
  let fixture: ComponentFixture<AddRentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRentButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
