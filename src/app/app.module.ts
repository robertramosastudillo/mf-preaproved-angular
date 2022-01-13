import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MfPreApprovedContentComponent } from './mf-pre-approved-content/mf-pre-approved-content.component';

@NgModule({
  declarations: [AppComponent, MfPreApprovedContentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
