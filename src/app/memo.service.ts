import { Injectable } from '@angular/core';
import {MEMOS} from '../memo-list';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  constructor(private memoService: MemoService) { }
  lastId = 10;

  onCreate(input: string): void {
    MEMOS.push(
      { id: Number(this.lastId++), userName: 'user1', content: input, created: Date.now() }
    );
  }
  onToggle(id: number): void {
    alert('준비중~.~');
  }
  onRemove(id: number): void {
    alert('준비중~.~');
  }
}
