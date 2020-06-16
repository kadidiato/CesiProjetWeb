import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDisponibiliteComponent } from './detail-disponibilite.component';

describe('DetailDisponibiliteComponent', () => {
  let component: DetailDisponibiliteComponent;
  let fixture: ComponentFixture<DetailDisponibiliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDisponibiliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDisponibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
