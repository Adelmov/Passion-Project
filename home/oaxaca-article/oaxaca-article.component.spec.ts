import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OaxacaArticleComponent } from './oaxaca-article.component';

describe('OaxacaArticleComponent', () => {
  let component: OaxacaArticleComponent;
  let fixture: ComponentFixture<OaxacaArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OaxacaArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OaxacaArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
