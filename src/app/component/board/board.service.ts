import {Injectable} from '@angular/core';
import {MEMOS} from '../../../memo-list';

import {Observable, of} from 'rxjs';
import {Memo} from '../../../memo';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  memos: Memo[];
  constructor(private boardService: BoardService) {
    this.memos = MEMOS;
  }

  selectedId: number;
  lastId: number;

  getMemos(): Observable<Memo[]> {
    return of(this.memos);
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

  getMemo(id: number): Observable<Memo> {
    return of(MEMOS.find(memo => memo.id === id));
  }

  openDetail(id: number) {
    this.selectedId = id;
  }
  setInputValue(id): string {
    return this.memos.find( memo => memo.id === id).content;
  }

  onEdit(id: number, value: string): Memo[] {
    const data = { id, userName: 'Anne Marie', content: 'Hi, my name is Marie', created: Date.now() };
    return this.memos.map(
      info => id === info.id ?  { id, userName: info.userName, content: value, created: Date.now() } : info);
  }
  onRemove(id: number): Memo[] {
    return this.memos = this.memos.filter( memo => memo.id !== id);
    console.log(this.memos);
  }
}
