export interface PasswordCheckResult {
  shortPassword: boolean;
  easyPasswordStrength: boolean;
  mediumPasswordStrength: boolean;
  strongPasswordStrength: boolean;
  isEmpty: boolean;
}
