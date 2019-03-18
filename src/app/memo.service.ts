import { Injectable } from '@angular/core';
import {MEMOS} from '../memo-list';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  constructor(private memoService: MemoService) { }

  onCreate(input: string): void {
    MEMOS.push(
      { userName: 'user1', content: input, created: Date.now() }
    );
    console.log(MEMOS);
  }
}
