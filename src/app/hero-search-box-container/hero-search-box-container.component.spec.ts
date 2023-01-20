import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchBoxContainerComponent } from './hero-search-box-container.component';

describe('HeroSearchBoxContainerComponent', () => {
  let component: HeroSearchBoxContainerComponent;
  let fixture: ComponentFixture<HeroSearchBoxContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSearchBoxContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSearchBoxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
