import {Component, OnInit} from '@angular/core';
import {Memo} from '../../memo';
import {MemoService} from '../memo.service';
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  animations : [
    trigger('myMemo', [
      state('initial', style({
        backgroundColor: 'white',
      })),
      state('final', style({
        backgroundColor: '#ffe7c1',
      })),
      transition('final=>initial', animate('1000ms')),
      transition('initial=>final', animate('1500ms'))
    ]),
  ],
})
export class BoardComponent implements OnInit {
  title = 'AngularMemo';
  newId: number;
  constructor() {
  }

  ngOnInit() {
  }
  isCreate(newId: number): void {
    this.newId = newId;
  }
}
