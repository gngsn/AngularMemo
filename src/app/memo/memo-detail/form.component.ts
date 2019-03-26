import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MemoService} from '../../memo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() inputMemo: string;
  newId: number;
  constructor(private memoService: MemoService) { }
  ngOnInit() {
  }
  onCreate(): void {
    if ( this.inputMemo ) {
      this.memoService.onCreate(this.inputMemo).subscribe(newId => this.newId = newId);
      this.inputMemo = '';
    }
  }

}
