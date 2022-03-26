import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComboComponent } from './combo/combo.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CountComponent } from './count/count.component';

@NgModule({
  declarations: [
    AppComponent,
    ComboComponent,
    OutputPropertyComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
