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
  userName = 'user1';
  constructor(private memoService: MemoService ) {
  }

  ngOnInit() {
  }

  onRemove(id: number): void {
    let idx = this.memos.id.indexOf(id);

  }

  onToggle(id: number): void {
    this.memoService.onToggle(id);
  }

}
