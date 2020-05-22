import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HistoriqueCoursComponent} from './historique-cours.component';

describe('ListCoursComponent', () => {
  let component: HistoriqueCoursComponent;
  let fixture: ComponentFixture<HistoriqueCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriqueCoursComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
