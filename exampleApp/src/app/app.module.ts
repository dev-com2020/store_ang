import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableComponent } from './core/table.component';
import { FormComponent } from './core/form.component';
import { registerLocaleData } from '@angular/common';
import localePL from '@angular/common/locales/pl'
import { ModelModule } from './model/model.module';
import { CoreModule } from './core/core.module';
import { MessageModule } from './messages/message.module';
import { MessageComponent } from './messages/message.component';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { TermsGuard } from './terms.guard';
import { OndemandComponent } from './ondemand/ondemand.component';
import { LoadGuard } from './load.guard';

registerLocaleData(localePL);

@NgModule({

  imports: [
    BrowserModule,
    ModelModule,
    CoreModule,
    MessageModule,
    routing
  ],
  declarations: [AppComponent],
  providers: [TermsGuard, LoadGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
