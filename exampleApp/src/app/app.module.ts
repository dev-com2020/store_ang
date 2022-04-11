import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StaticDataSource } from './model/static.datasource';
import { Model } from './model/repository.model';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Model,StaticDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
