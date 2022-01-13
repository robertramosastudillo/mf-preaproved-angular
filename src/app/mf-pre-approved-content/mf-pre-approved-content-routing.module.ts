import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { MfPreApprovedContentComponent } from './mf-pre-approved-content.component';
import { OtpViewComponent } from './otp-view/otp-view.component';

const routes: Routes = [
  {
    path: '',
    component: MfPreApprovedContentComponent,
    children: [
      {
        path: '',
        component: HomeViewComponent,
      },
      {
        path: 'confirm-otp',
        component: OtpViewComponent,
      },
      { path: '**', component: HomeViewComponent }
    ],
  },

  { path: '**', component: MfPreApprovedContentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MfPreApprovedContentRoutingModule {}
