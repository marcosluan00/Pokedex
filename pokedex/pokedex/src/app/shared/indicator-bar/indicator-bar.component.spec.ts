import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorBarComponent } from './indicator-bar.component';

describe('IndicatorBarComponent', () => {
  let component: IndicatorBarComponent;
  let fixture: ComponentFixture<IndicatorBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicatorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
