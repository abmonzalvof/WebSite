import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModel1Component } from './card-model-1.component';

describe('CardModel1Component', () => {
  let component: CardModel1Component;
  let fixture: ComponentFixture<CardModel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardModel1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardModel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
