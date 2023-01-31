import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should check password', () => {
    component.checkPasswordStrength('');
    expect(component.passwordCheckResult).toEqual({
      shortPassword: false,
      easyPasswordStrength: false,
      mediumPasswordStrength: false,
      strongPasswordStrength: false,
      isEmpty: true,
    });
    expect(component.userMessage).toEqual('');

    component.checkPasswordStrength('     ');
    expect(component.userMessage).toEqual('Try to input not space characters');

    component.checkPasswordStrength('12345');
    expect(component.passwordCheckResult).toEqual({
      shortPassword: true,
      easyPasswordStrength: false,
      mediumPasswordStrength: false,
      strongPasswordStrength: false,
      isEmpty: false,
    });
    expect(component.userMessage).toEqual(
      'Your password is too short. Try to write more then 8 characters'
    );

    component.checkPasswordStrength('123456789');
    expect(component.passwordCheckResult).toEqual({
      shortPassword: false,
      easyPasswordStrength: true,
      mediumPasswordStrength: false,
      strongPasswordStrength: false,
      isEmpty: false,
    });
    expect(component.userMessage).toEqual(
      'Your password is easy. Check if your password contain letters, digits and special symbols'
    );

    component.checkPasswordStrength('aaaaaaaa8');
    expect(component.passwordCheckResult).toEqual({
      shortPassword: false,
      easyPasswordStrength: false,
      mediumPasswordStrength: true,
      strongPasswordStrength: false,
      isEmpty: false,
    });
    expect(component.userMessage).toEqual(
      'Your password is medium. Check if your password contain letters, digits and special symbols'
    );

    component.checkPasswordStrength('aaaaaaaa8/');
    expect(component.passwordCheckResult).toEqual({
      shortPassword: false,
      easyPasswordStrength: false,
      mediumPasswordStrength: false,
      strongPasswordStrength: true,
      isEmpty: false,
    });
    expect(component.userMessage).toEqual('Your password is strong');
  });
});
