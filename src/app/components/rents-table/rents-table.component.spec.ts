import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentsTableComponent } from './rents-table.component';

describe('RentsTableComponent', () => {
  let component: RentsTableComponent;
  let fixture: ComponentFixture<RentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
