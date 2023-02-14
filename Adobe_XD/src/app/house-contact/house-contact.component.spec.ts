import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseContactComponent } from './house-contact.component';

describe('HouseContactComponent', () => {
  let component: HouseContactComponent;
  let fixture: ComponentFixture<HouseContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
