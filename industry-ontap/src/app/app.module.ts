import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BeerService } from './beer.service';

import { AppComponent } from './app.component';
import { BeerIndexComponent } from './beer-index/beer-index.component';
import { BeerFormComponent } from './beer-form/beer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerIndexComponent,
    BeerFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }