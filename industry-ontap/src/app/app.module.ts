import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeerFormComponent } from './beer-form/beer-form.component';
import { BeerIndexComponent } from './beer-index/beer-index.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerFormComponent,
    BeerIndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
