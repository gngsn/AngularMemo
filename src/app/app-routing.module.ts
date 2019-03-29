import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BoardComponent} from './board/board.component';
import {PostComponent} from './post/post.component';
import {D3Component} from './d3/d3.component';

const routes: Routes = [
  { path: 'memos', component: BoardComponent },
  { path: 'posts', component: PostComponent },
  { path: 'd3', component: D3Component}
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


