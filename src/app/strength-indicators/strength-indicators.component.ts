import { Component, Input } from '@angular/core';
import { PasswordCheckResult } from '../interfaces/passwordCheckResult';

@Component({
  selector: 'app-strength-indicators',
  templateUrl: './strength-indicators.component.html',
  styleUrls: ['./strength-indicators.component.scss'],
})
export class StrengthIndicatorsComponent {
  @Input() checkResult: PasswordCheckResult = {
    shortPassword: false,
    easyPasswordStrength: false,
    mediumPasswordStrength: false,
    strongPasswordStrength: false,
    isEmpty: false,
  };
}
