import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDisponibiliteComponent } from './dialog-disponibilite.component';

describe('DialogDisponibiliteComponent', () => {
  let component: DialogDisponibiliteComponent;
  let fixture: ComponentFixture<DialogDisponibiliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDisponibiliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDisponibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
