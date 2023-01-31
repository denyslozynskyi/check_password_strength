import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { StrengthIndicatorsComponent } from './strength-indicators/strength-indicators.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    StrengthIndicatorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
