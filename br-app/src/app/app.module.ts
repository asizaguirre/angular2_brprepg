import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChartModule, CalendarModule, SharedModule, PanelModule, DataTableModule, DialogModule } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PanelModule,
    FormsModule,
    DataTableModule,
    DialogModule
  ],
  exports:[DialogModule],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
