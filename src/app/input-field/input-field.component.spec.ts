import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InputFieldComponent } from './input-field.component';

describe('InputFieldComponent', () => {
  let component: InputFieldComponent;
  let fixture: ComponentFixture<InputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value on input event', () => {
    let actualValue: string | undefined;
    const inputField = fixture.debugElement.query(
      By.css('[data-testId="input"]')
    );
    const event = document.createEvent('Event');
    event.initEvent('input', false, false);
    component.valueChange.subscribe((value) => {
      actualValue = value;
    });
    inputField.nativeElement.value = 'test';
    inputField.nativeElement.dispatchEvent(event);
    expect(actualValue).toEqual('test');
  });
});
