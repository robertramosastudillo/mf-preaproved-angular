import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local-service.service';

@Component({
  selector: 'or-otp-view',
  templateUrl: './otp-view.component.html',
  styleUrls: ['./otp-view.component.scss'],
})
export class OtpViewComponent implements OnInit {
  constructor(private localService: LocalService) {}

  ngOnInit(): void {
    console.log(this.localService.getJsonValue('key')|| {});
  }

  clearData(){
    localStorage.clear();
  }
}
