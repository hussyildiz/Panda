import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.scss'],
  host: {
    '(window:resize)': 'onResize()'
  },
})
export class HeaderLogoComponent implements OnInit {

  menuLinkData:any[] = [];
  deviceType:string = "desktop";

  constructor(private deviceService: DeviceDetectorService) {
    this.getDeviceInfo();
  }

  getDeviceInfo(){
    this.deviceType = this.deviceService.deviceType;
  }

  onResize(){
    this.getDeviceInfo();
    window.location.reload();
  }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(){
    this.menuLinkData.push(
      { 
        Name:'Menu 1',
        Link: '#'
      },
      { 
        Name:'Menu 2',
        Link: '#'
      },
      { 
        Name:'Menu 3',
        Link: '#'
      },
      { 
        Name:'Menu 4',
        Link: '#'
      },
      { 
        Name:'Menu 5',
        Link: '#'
      },
    );
  }

}
