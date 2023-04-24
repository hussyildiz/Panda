import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
  host: {
    '(window:resize)': 'onResize()'
  },
})
export class HeaderSearchComponent implements OnInit {

  profileImageUrl:string = "https://avatars.githubusercontent.com/u/45887442?v=4";
  deviceType:string = "desktop";

  constructor(private deviceService: DeviceDetectorService) {
    this.getDeviceInfo();
  }

  getDeviceInfo(){
    this.deviceType = this.deviceService.deviceType;
  }

  onResize(){
    this.getDeviceInfo();   
  }

  ngOnInit(): void {
    
  }
}
