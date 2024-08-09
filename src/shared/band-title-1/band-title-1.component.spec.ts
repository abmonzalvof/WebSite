import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandTitle1Component } from './band-title-1.component';

describe('BandTitle1Component', () => {
  let component: BandTitle1Component;
  let fixture: ComponentFixture<BandTitle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BandTitle1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BandTitle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
