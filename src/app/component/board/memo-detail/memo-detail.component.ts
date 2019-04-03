import {Component, Input, OnInit} from '@angular/core';
import {Memo} from '../../../../memo';
import {BoardService} from '../board.service';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {select} from 'd3-selection';
@Component({
  selector: 'app-memo-detail',
  templateUrl: './memo-detail.component.html',
  styleUrls: ['./memo-detail.component.css']
})
export class MemoDetailComponent implements OnInit {
  id = -1;
  seletedMemo: Memo;

  constructor(private boardService: BoardService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if ( this.id > -1) {
      this.boardService
        .getMemo(this.id)
        .subscribe(memo => this.seletedMemo = memo);
    }
  }

  // getMemo(): void {
  //   this.boardService
  //     .getMemo(this.id)
  //     .subscribe(memo => this.seletedMemo = memo);
  // }

  // goBack(): void {
  //   this.location.back();
  // }

}
