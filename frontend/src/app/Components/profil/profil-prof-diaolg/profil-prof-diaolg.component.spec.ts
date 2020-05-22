import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfilProfDiaolgComponent} from './profil-prof-diaolg.component';

describe('ProfDiaolgComponent', () => {
  let component: ProfilProfDiaolgComponent;
  let fixture: ComponentFixture<ProfilProfDiaolgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilProfDiaolgComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilProfDiaolgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
