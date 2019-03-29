import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BoardComponent} from './board/board.component';
import {PostComponent} from './post/post.component';
import {D3ChartComponent} from './d3-chart/d3-chart.component';

const routes: Routes = [
  { path: 'memos', component: BoardComponent },
  { path: 'posts', component: PostComponent },
  { path: 'd3', component: D3ChartComponent}
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


