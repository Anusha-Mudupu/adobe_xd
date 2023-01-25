import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidoAdventureComponent } from './raido-adventure.component';

describe('RaidoAdventureComponent', () => {
  let component: RaidoAdventureComponent;
  let fixture: ComponentFixture<RaidoAdventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidoAdventureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaidoAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
