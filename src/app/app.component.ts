import { Component } from '@angular/core';
import { PasswordCheckResult } from './interfaces/passwordCheckResult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private passwordCheckResultFasle: PasswordCheckResult = {
    shortPassword: false,
    easyPasswordStrength: false,
    mediumPasswordStrength: false,
    strongPasswordStrength: false,
    isEmpty: false,
  };
  private lengthRegExp = /(?=.{8,})/;
  private easyPassRegExp = /(?=.*[a-zA-Z])|(?=.*[0-9])|(?=.*[^A-Za-z0-9])/;
  private mediumPassRegExp =
    /((?=.*[a-zA-Z])(?=.*[0-9]))|((?=.*[a-zA-Z])(?=.*[^A-Za-z0-9]))|((?=.*[0-9])(?=.*[^A-Za-z0-9]))/;
  private strongPassRegExp = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/;
  private baseMessage = 'Your password is ';
  private messageEnding =
    ' Check if your password contain letters, digits and special symbols';

  userMessage = '';
  passwordCheckResult: PasswordCheckResult = {
    shortPassword: false,
    easyPasswordStrength: false,
    mediumPasswordStrength: false,
    strongPasswordStrength: false,
    isEmpty: false,
  };

  checkPasswordStrength(password: string) {
    if (!password) {
      this.passwordCheckResult = {
        ...this.passwordCheckResultFasle,
        isEmpty: true,
      };
      this.userMessage = '';
      return;
    }

    if (!password.trim()) {
      this.userMessage = 'Try to input not space characters';
      return;
    }

    if (!this.lengthRegExp.test(password)) {
      this.passwordCheckResult = {
        ...this.passwordCheckResultFasle,
        shortPassword: true,
      };
      this.userMessage =
        this.baseMessage + 'too short. Try to write more then 8 characters';
      return;
    }

    if (this.strongPassRegExp.test(password)) {
      this.passwordCheckResult = {
        ...this.passwordCheckResultFasle,
        strongPasswordStrength: true,
      };
      this.userMessage = this.baseMessage + 'strong';
      return;
    }

    if (this.mediumPassRegExp.test(password)) {
      this.passwordCheckResult = {
        ...this.passwordCheckResultFasle,
        mediumPasswordStrength: true,
      };
      this.userMessage = this.baseMessage + 'medium.' + this.messageEnding;
      return;
    }

    if (this.easyPassRegExp.test(password)) {
      this.passwordCheckResult = {
        ...this.passwordCheckResultFasle,
        easyPasswordStrength: true,
      };
      this.userMessage = this.baseMessage + 'easy.' + this.messageEnding;
    }
  }
}
