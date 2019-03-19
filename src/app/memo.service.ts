import { Injectable } from '@angular/core';
import {MEMOS} from '../memo-list';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemoService {
<<<<<<< HEAD
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
=======

  constructor(private memoService: MemoService) { }

  onCreate(input: string): void {
    MEMOS.push(
      { userName: 'user1', content: input, created: Date.now() }
    );
    console.log(MEMOS);
>>>>>>> db3947d67c69e05500a00aa678b43c905a38eb0c
  }
}
