import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmantzHomePageComponent } from './dmantz-home-page.component';

describe('DmantzHomePageComponent', () => {
  let component: DmantzHomePageComponent;
  let fixture: ComponentFixture<DmantzHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmantzHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmantzHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
