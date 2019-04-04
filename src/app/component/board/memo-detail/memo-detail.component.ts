import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Memo} from '../../../../memo';
import {BoardService} from '../board.service';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {select} from 'd3-selection';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-memo-detail',
  templateUrl: './memo-detail.component.html',
  styleUrls: ['../../../../assets/css/board.component.scss']
})
export class MemoDetailComponent implements OnInit {
  id = -1;
  seleted: Memo = new Memo();

  constructor(private boardService: BoardService,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.boardService
      .getMemo(this.id)
      .subscribe(memo => this.seleted = memo);
  }
}

// getMemo(): void {
//   this.boardService
//     .getMemo(this.id)
//     .subscribe(memo => this.seleted = memo);
// }

// goBack(): void {
//   this.location.back();
// }
