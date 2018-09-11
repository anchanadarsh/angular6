import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormElementComponent } from './form-element/form-element.component';
import { MemberElementComponent } from './member-element/member-element.component';

@NgModule({
  declarations: [
    AppComponent,
    FormElementComponent,
    MemberElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
