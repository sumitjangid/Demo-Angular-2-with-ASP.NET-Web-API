import { HttpModule } from '@angular/http';
import { ProductrecoService } from './productreco.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ProductrecoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
