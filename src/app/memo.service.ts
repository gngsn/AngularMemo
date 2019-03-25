import {Injectable} from '@angular/core';
import {MEMOS} from '../memo-list';

import {Observable, of} from 'rxjs';
import {Memo} from '../memo';
import {MemoComponent} from './memo/memo.component';

@Injectable({
  providedIn: 'root'
})
export class MemoService {
  constructor(private memoService: MemoService) {
  }

  lastId: number;

  // isCreate = false;
  getMemos(): Observable<Memo[]> {
    return of(MEMOS);
  }

  getNewId(): number {
    return MEMOS.length;
  }

  onCreate(input: string): Observable<number> {
    this.lastId = MEMOS.length;
    MEMOS.push(
      {id: this.lastId, userName: 'user1', content: input, created: Date.now()}
    );
    return of(this.lastId);
  }

  onToggle(id: number): void {
    alert('준비중~.~');
  }

  // onRemove(id: number): Memo[] {
  //   alert('준비중~.~');
  // }
}
