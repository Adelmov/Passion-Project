import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeAComponent } from './about-me-a.component';

describe('AboutMeAComponent', () => {
  let component: AboutMeAComponent;
  let fixture: ComponentFixture<AboutMeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
