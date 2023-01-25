import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsAnimationComponent } from './plants-animation.component';

describe('PlantsAnimationComponent', () => {
  let component: PlantsAnimationComponent;
  let fixture: ComponentFixture<PlantsAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantsAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantsAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
