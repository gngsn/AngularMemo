import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Memo} from '../../../../memo';
import {BoardService} from '../board.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MEMOS} from '../../../../memo-list';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {MemoDetailComponent} from '../memo-detail/memo-detail.component';


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
  @Input() editValue: string;
  editMemo = -1;
  memos: Memo[];
  constructor(private boardService: BoardService,
              private modalService: NgbModal) { }
  openDetail(memo: Memo) {
    this.boardService.openDetail(memo.id);
  }

  openModal(id: string) {
    this.modalService.open(id);
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
    this.memos = this.boardService.onRemove(selectedMemo);
    // let idx = this.memos.indexOf(id);
  }
  onToggle(id: number): void {
    this.editMemo = id;
    this.editValue = this.boardService.setInputValue(id);
    console.log(this.editMemo);
  }
  onEdit(id: number): void {
    this.memos = this.boardService.onEdit(id, this.editValue);
    this.editMemo = -1;
  }
}



