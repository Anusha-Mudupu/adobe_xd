import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmantzTechnologiesComponent } from './dmantz-technologies.component';

describe('DmantzTechnologiesComponent', () => {
  let component: DmantzTechnologiesComponent;
  let fixture: ComponentFixture<DmantzTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmantzTechnologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmantzTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
