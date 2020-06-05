import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourEleveComponent} from './cour-eleve.component';

describe('CourEleveComponent', () => {
  let component: CourEleveComponent;
  let fixture: ComponentFixture<CourEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourEleveComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
