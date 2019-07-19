import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d3-example-chart',
  templateUrl: './d3-example-chart.component.html',
  styleUrls: ['./d3-example-chart.component.css']
})
export class D3ExampleChartComponent implements OnInit {
  title = 'Example Circle Chart';
  constructor() { }

  ngOnInit() {
    this.chartMaker();
  }

  chartMaker(): void {
  }


}
