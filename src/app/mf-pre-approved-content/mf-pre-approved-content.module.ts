import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MfPreApprovedContentRoutingModule } from './mf-pre-approved-content-routing.module';
import { OtpViewComponent } from './otp-view/otp-view.component';
import { HomeViewComponent } from './home-view/home-view.component';

@NgModule({
  declarations: [
    OtpViewComponent,
    HomeViewComponent
  ],
  imports: [CommonModule, MfPreApprovedContentRoutingModule],
})
export class MfPreApprovedContentModule {}
