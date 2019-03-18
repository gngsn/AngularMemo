import {Component, OnInit} from '@angular/core';
import {Memo} from '../../memo';
import {MEMOS} from '../../memo-list';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  memos = MEMOS;

  constructor() {
  }

  ngOnInit() {
  }

}
