import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-slider',
  templateUrl: './info-slider.page.html',
  styleUrls: ['./info-slider.page.scss'],
})
export class InfoSliderPage implements OnInit {

  skipMsg = "Skip"

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

  skip(){
    
  }

}
