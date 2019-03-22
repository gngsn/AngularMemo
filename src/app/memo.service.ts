import { Injectable } from '@angular/core';
import {MEMOS} from '../memo-list';

import {Observable, of} from 'rxjs';
import {Memo} from '../memo';

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  constructor(private memoService: MemoService) { }
  lastId = 10;

  getMemos(): Observable<Memo[]> {
    return of(MEMOS);
  }

  onCreate(input: string): Observable<number> {
    const newId = Number(this.lastId++);
    MEMOS.push(
      { id: newId, userName: 'user1', content: input, created: Date.now() }
    );
    return of(newId);
  }

  onToggle(id: number): void {
    alert('준비중~.~');
  }
  // onRemove(id: number): Memo[] {
  //   alert('준비중~.~');
  // }
}
