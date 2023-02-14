import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseWebpageComponentComponent } from './house-webpage-component.component';

describe('HouseWebpageComponentComponent', () => {
  let component: HouseWebpageComponentComponent;
  let fixture: ComponentFixture<HouseWebpageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseWebpageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseWebpageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
