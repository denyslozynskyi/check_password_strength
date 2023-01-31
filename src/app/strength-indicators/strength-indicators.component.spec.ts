import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthIndicatorsComponent } from './strength-indicators.component';

describe('StrengthIndicatorsComponent', () => {
  let component: StrengthIndicatorsComponent;
  let fixture: ComponentFixture<StrengthIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthIndicatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrengthIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
