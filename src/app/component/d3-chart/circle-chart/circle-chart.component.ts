import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';


export interface IData {
  letter: string;
  frequency: number;
}
@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['../../../../assets/css/d3-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CircleChartComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
  }
}
