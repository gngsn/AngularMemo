import {Component, OnInit} from '@angular/core';
import {Memo} from '../../memo';
import {MemoService} from '../memo.service';
// import { MatSnackBar, MatSnackBarModule, MatCardModule  } from '@angular/material';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
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
  ],
})
export class BoardComponent implements OnInit {
  isClick = false;
  title = 'AngularMemo';
  memos: Memo[];
  userName = 'user1';

  constructor(private memoService: MemoService) {
  }

  ngOnInit() {
    this.getMemos();
  }

  getMemos(): void {
    this.memoService
      .getMemos()
      .subscribe(memos => this.memos = memos);
  }

  onRemove(selectedMemo: Memo): void {
    // this.memos = this.memoService.onRemove();
    // let idx = this.memos.indexOf(id);
  }

  onToggle(id: number): void {
    this.memoService.onToggle(id);
  }

}
