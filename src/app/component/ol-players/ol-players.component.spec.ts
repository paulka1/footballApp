import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlPlayersComponent } from './ol-players.component';

describe('OlPlayersComponent', () => {
  let component: OlPlayersComponent;
  let fixture: ComponentFixture<OlPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
