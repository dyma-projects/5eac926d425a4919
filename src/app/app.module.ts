import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exercice2Component} from './exercice2/exercice2.component';
import { Exercice1 } from './exercice1/exercice1.component';
import { Exercice3 } from './exercice3/exercice3.component';
import { Exercice4 } from './exercice4/exercice4.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercice2Component,
    Exercice1,
    Exercice3,
    Exercice4
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
