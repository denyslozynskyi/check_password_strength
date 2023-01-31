import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
  @Output() valueChange = new EventEmitter<string>();
  inputTypePassword = true;

  emitValueChange(pass: string) {
    this.valueChange.emit(pass);
  }
}
