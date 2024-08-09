import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModel2Component } from './card-model-2.component';

describe('CardModel2Component', () => {
  let component: CardModel2Component;
  let fixture: ComponentFixture<CardModel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardModel2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardModel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
