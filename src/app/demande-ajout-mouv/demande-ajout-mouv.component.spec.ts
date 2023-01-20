import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAjoutMouvComponent } from './demande-ajout-mouv.component';

describe('DemandeAjoutMouvComponent', () => {
  let component: DemandeAjoutMouvComponent;
  let fixture: ComponentFixture<DemandeAjoutMouvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeAjoutMouvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeAjoutMouvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
