import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./d3.component.css']
})
export class D3Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const svg = d3.select('svg'),
      margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = +svg.attr('width') - margin.left - margin.right,
      height = +svg.attr('height') - margin.top - margin.bottom;

    const x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
      y = d3.scaleLinear().rangeRound([height, 0]);

    var g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    d3.tsv('./assets/data/tsv').then(function (d: any) {
      d.frequency = +d.frequency;
      return d;
    }).then(function (data) {
      console.log(data);
      x.domain(data.map(function (d: { letter: string, frequency: number }) {
        return d.letter;
      }));
      y.domain([0, d3.max(data, function (d: { letter: string, frequency: number }) {
        return d.frequency;
      })]);
      g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

      g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(y).ticks(10, '%'))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Frequency');

      g.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', function (d: { letter: string, frequency: number }) {
          return x(d.letter);
        })
        .attr('y', function (d: { letter: string, frequency: number }) {
          return y(d.frequency);
        })
        .attr('width', x.bandwidth())
        .attr('height', function (d: { letter: string, frequency: number }) {
          return height - y(d.frequency);
        });
    });
  }
}
