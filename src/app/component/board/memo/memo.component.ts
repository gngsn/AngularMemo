import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Memo} from '../../../../memo';
import {BoardService} from '../board.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MEMOS} from '../../../../memo-list';


@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['../../../../assets/css/memo.component.scss'],
  // animations: [
  //   trigger('myMemo', [
  //     state('initial', style({
  //       backgroundColor: '#ffe7c1',
  //     })),
  //     state('final', style({
  //       backgroundColor: '#ffe7c1',
  //     })),
  //     transition('final=>initial', animate('1000ms')),
  //     transition('initial=>final', animate('1500ms'))
  //   ]),
  //   trigger('createMemo', [
  //     state('initial', style({
  //       transform: 'translateX(-10%)',
  //     })),
  //     state('final', style({
  //       transform: 'translateX(-10%)',
  //     })),
  //     transition('*=>initial', animate('500ms cubic-bezier(0.64, 0.57, 0.73, 1.53)')),
  //     transition('*=>final', animate('500ms cubic-bezier(0.64, 0.57, 0.67, 1.53)'))
  //   ]),
  // ],
})
export class MemoComponent implements OnInit {
  memos: Memo[];
  constructor(private boardService: BoardService) { }
  openDetail(memo: Memo) {
    this.boardService.openDetail(memo.id);
  }

  ngOnInit() {
    this.getMemos();
    console.log(MEMOS);
  }
  createAnimation() {
    return this.boardService.getNewId();
  }

  getMemos(): void {
    this.boardService
      .getMemos()
      .subscribe(memos => this.memos = memos);
  }

  onRemove(selectedMemo: number): void {
    // this.memos = this.boardService.onRemove();
    // let idx = this.memos.indexOf(id);
  }

  onToggle(id: number): void {
    this.boardService.onToggle(id);
  }



}
