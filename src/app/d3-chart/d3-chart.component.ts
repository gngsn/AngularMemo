import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';


export interface IData {
  letter: string;
  frequency: number;
}

@Component({
  selector: 'app-d3-chart',
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.css']
})
export class D3ChartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    /*
    * selector는 html파일에서 찾을 태그명 혹은 태그가 갖고 있는 속성 중 id
    * width, height 에 태그에 넣어줬던 크기에 mrgin 사이즈를 고려해서 그래프 크기를 지정해줌.
    */

    const svg = d3.select('#bar-chart'),
      margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = +svg.attr('width') - margin.left - margin.right,
      height = +svg.attr('height') - margin.top - margin.bottom;

    // 가로축과 세로축의 범위를 설정함.
    const x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
      y = d3.scaleLinear().rangeRound([height, 0]);

    // g 라는 이름을 가진 태그를 하나 만들어 지정해준 크기만큼 translate 한다.
    var g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // tab-separated values
    d3.tsv('./assets/data.tsv').then(function (d: any) {
      // d.frequency = +d.frequency;
      return d;
    }).then(
      function (data) {
        // console.log(data);
        x.domain(data.map(function (d: { letter: string, frequency: number }) {
          return d.letter;
        }));
        y.domain([0, d3.max(data, function (d: { letter: string, frequency: number }) {
          return d.frequency;
        })]);
        g.append('g')
          // .attr('class', 'axis axis--x')
          .attr('transform', 'translate(0,' + height + ')')
          .call(d3.axisBottom(x));

        g.append('g')
          // .attr('class', 'axis axis--y')
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
