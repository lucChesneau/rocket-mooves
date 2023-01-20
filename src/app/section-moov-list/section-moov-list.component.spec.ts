import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMoovListComponent } from './section-moov-list.component';

describe('SectionMoovListComponent', () => {
  let component: SectionMoovListComponent;
  let fixture: ComponentFixture<SectionMoovListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMoovListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMoovListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
