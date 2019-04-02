import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['../../../assets/css/navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  showList = false;
  constructor() {
  }

  ngOnInit() {
    // this.getWidth();
  }

  // getWidth() {
  //   console.log(screenWidth + '  타입은  ' + typeof(screenWidth));
  // }

}
