import {Component, Input, OnInit} from '@angular/core';
import {Memo} from '../../memo';
import {MemoService} from '../memo.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css'],
  animations: [
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
    trigger('createMemo', [
      state('initial', style({
        transform: 'translateX(-10%)',
      })),
      state('final', style({
        transform: 'translateX(0%)',
      })),
      transition('final=>initial', animate('500ms cubic-bezier(0.64, 0.57, 0.73, 1.53)')),
      transition('initial=>final', animate('500ms cubic-bezier(0.64, 0.57, 0.67, 1.53)'))
    ]),
  ]
})
export class MemoComponent implements OnInit {
  memos: Memo[];
  constructor(private memoService: MemoService) { }

  ngOnInit() {
    this.getMemos();
  }
  getMemos(): void {
    this.memoService
      .getMemos()
      .subscribe(memos => this.memos = memos);
  }
  onRemove(selectedMemo: number): void {
    // this.memos = this.memoService.onRemove();
    // let idx = this.memos.indexOf(id);
  }

  onToggle(id: number): void {
    this.memoService.onToggle(id);
  }

}
