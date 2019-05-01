import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import {line} from 'd3';

export interface IData {
  date: string;
  close: number;
}

@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['../../../../assets/css/d3-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CircleChartComponent implements OnInit {

  title = 'D3 practice - line';

  constructor() {
  }

  ngOnInit(): void {
    const svg = d3.select('#line-chart'),
      margin = {top: 40, right: 0, bottom: 60, left: 50},
      // width = +svg.attr('width'),
      // height = +svg.attr('height')
      width = +svg.attr('width') - margin.right ,
      height = +svg.attr('height') - margin.top - margin.bottom;
    // const x = d3.scaleTime().range([margin.left, width - margin.right]);
    const x = d3.scaleBand().rangeRound([0, width]);
    const y = d3.scaleLinear().rangeRound([height, 0]);
    const g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


    // tab-separated values
    d3.csv('./assets/aapl.csv')
      .then(function(d: any) {
        return d;
      }).then(
      function(data) {
        x.domain(data.map(function(d: IData) {
          return d.date;
        }));
        y.domain([250, d3.max(data, function(d: IData) {
          return d.close;
        })]);

        const line1 = d3.line()
          .x(function(d: any) {
            return x(d.date);
          })
          .y(function(d: any) {
            return y(d.close);
          });



        g.append('g')
          .attr('transform', 'translate(0,' + height + ')')
          .call(d3.axisBottom(x))
          .selectAll('text')
          .attr('transform', 'translate(0,40)rotate(-65)');
            // .tickSizeInner(25));
        g.append('g')
          .call(d3.axisLeft(y))
          .append('text')
          .attr('fill', '#000')
          .attr('transform', 'rotate(-90)')
          .attr('dy', '0.71em')
          .attr('text-anchor', 'end')
          .text('close');

        g.append('path')
          .datum(data)
          .attr('fill', 'none')
          .attr('stroke', 'steelblue')
          .attr('stroke-width', 1.5)
          .attr('stroke-linejoin', 'round')
          .attr('stroke-linecap', 'round')
          .attr('d', line1);
      });
  }
}
