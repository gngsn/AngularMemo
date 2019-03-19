import { Component, OnInit, Input } from '@angular/core';
import {Memo} from '../../memo';
import {MEMOS} from '../../memo-list';
import {MemoService} from '../memo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() inputMemo: string;
  constructor(private memoService: MemoService) { }
  ngOnInit() {
  }
  onCreate(input: string ): void {
    if (this.inputMemo ) {
      this.memoService.onCreate(this.inputMemo);
      this.inputMemo = '';
    }
  }

}
