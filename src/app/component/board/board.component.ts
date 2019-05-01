import {Component, Input, OnInit} from '@angular/core';
import {BoardService} from './board.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['../../../assets/css/board.component.scss']
})
export class BoardComponent implements OnInit {
  title = 'angular-memo';
  @Input() inputMemo: string;
  newId: number;

  constructor(private boardService: BoardService
  ) {
  }

  ngOnInit() {
  }

  onCreate(): void {
    if (this.inputMemo) {
      this.boardService.onCreate(this.inputMemo).subscribe(newId => this.newId = newId);
      this.inputMemo = '';
    }
  }
}
