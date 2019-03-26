import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Memo} from '../../memo';
import {MemoService} from '../memo.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MEMOS} from '../../memo-list';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss'],
  animations: [
    trigger('myMemo', [
      state('initial', style({
        backgroundColor: '#ffe7c1',
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
        transform: 'translateX(-10%)',
      })),
      transition('*=>initial', animate('500ms cubic-bezier(0.64, 0.57, 0.73, 1.53)')),
      transition('*=>final', animate('500ms cubic-bezier(0.64, 0.57, 0.67, 1.53)'))
    ]),
  ],
})
export class MemoComponent implements OnInit {
  memos: Memo[];
  // rand = Math.random() / 4;
  //
  // heightList = ['15rem', '18rem', '20rem', '13rem'];
  // randomHeight = this.heightList[this.rand];

  constructor(private memoService: MemoService) { }

  ngOnInit() {
    this.getMemos();
    console.log(MEMOS);
  }

  createAnimation() {
    return this.memoService.getNewId();
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
