import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LabelComponent } from './label/label.component';
import { HttpClientModule } from '@angular/common/http';
import { SpaceImageComponent } from './space-image/space-image.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LabelComponent,
    SpaceImageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
