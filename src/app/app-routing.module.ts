import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BoardComponent} from './component/board/board.component';
import {PostComponent} from './component/post/post.component';
import {D3ChartComponent} from './component/d3-chart/d3-chart.component';
import {MemoDetailComponent} from './component/board/memo-detail/memo-detail.component';
import {CircleChartComponent} from './component/d3-chart/circle-chart/circle-chart.component';
import {MainComponent} from './component/main/main.component';

const routes: Routes = [
  {
    path: 'memo', children: [
      {path: '', component: BoardComponent},
      {path: ':id', component: MemoDetailComponent}
    ],
  },
  {path: '', component: MainComponent},
  {path: 'posts', component: PostComponent},
  {path: 'd3', component: D3ChartComponent},
  {path: 'd3/circle', component: CircleChartComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


