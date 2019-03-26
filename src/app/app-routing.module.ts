import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BoardComponent} from './board/board.component';
import {PostComponent} from './post/post.component';

const routes: Routes = [
  { path: 'memos', component: BoardComponent },
  { path: 'posts', component: PostComponent}
  // { path: 'memos/:id', component: MemoDetailCompo}
];

@NgModule({
  declarations: [  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}


