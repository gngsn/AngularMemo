import {Component, Input, OnInit} from '@angular/core';
import {MemoService} from '../memo/memo.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['../../../assets/css/board.component.scss']
})
export class BoardComponent implements OnInit {
  title = 'angular-blog';
  @Input() inputMemo: string;
  newId: number;

  constructor(private memoService: MemoService) {
  }

  ngOnInit() {
  }

  onCreate(): void {
    if (this.inputMemo) {
      this.memoService.onCreate(this.inputMemo).subscribe(newId => this.newId = newId);
      this.inputMemo = '';
    }
  }
}
