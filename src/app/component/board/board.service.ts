import {Injectable} from '@angular/core';
import {MEMOS} from '../../../memo-list';

import {Observable, of} from 'rxjs';
import {Memo} from '../../../memo';

@Injectable({
    providedIn: 'root'
})
export class BoardService {
    constructor(private boardService: BoardService) {
    }

    selectedId: number;
    lastId: number;

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

    getMemo(id: number): Observable<Memo> {
        if (id < -1) {
            return of(MEMOS.find(memo => memo.id === id ));
        }
    }

    openDetail(id: number) {
        this.selectedId = id;
    }

    // onRemove(id: number): Memo[] {
    //   alert('준비중~.~');
    // }
}
