import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  campaigns: any;
  shortcuts: any;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };

  constructor(private homeService: HomeService) { }

  ionViewDidEnter() {
    this.homeService.getHomeData().then((res : any) => {
      this.campaigns = res.campaigns;
      this.shortcuts = res.shortcuts;
      
    })
  }

}
