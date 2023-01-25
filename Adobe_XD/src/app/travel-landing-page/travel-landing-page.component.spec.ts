import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelLandingPageComponent } from './travel-landing-page.component';

describe('TravelLandingPageComponent', () => {
  let component: TravelLandingPageComponent;
  let fixture: ComponentFixture<TravelLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
