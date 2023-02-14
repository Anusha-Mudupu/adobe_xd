import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseFeaturesComponent } from './house-features.component';

describe('HouseFeaturesComponent', () => {
  let component: HouseFeaturesComponent;
  let fixture: ComponentFixture<HouseFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
