import {Component, OnInit} from '@angular/core';
import {Memo} from '../../memo';
import {MEMOS} from '../../memo-list';
import {MemoService} from '../memo.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  memos = MEMOS;
  memoId: number;

  constructor(private memoService: MemoService ) {
  }

  ngOnInit() {
  }

  onRemove(id: number): void {
    this.memoService.onRemove(id);
  }

  onToggle(id: number): void {
    this.memoService.onToggle(id);
  }

}
