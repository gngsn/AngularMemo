import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BoardComponent} from './component/board/board.component';
import {PostComponent} from './component/post/post.component';
import {D3ChartComponent} from './component/d3-chart/d3-chart.component';
import {MemoDetailComponent} from './component/board/memo-detail/memo-detail.component';

const routes: Routes = [
    {
        path: 'memo', children: [
            {path: '', component: BoardComponent},
            {path: ':id', component: MemoDetailComponent}
        ],
    },
    {path: 'posts', component: PostComponent},
    {path: 'd3', component: D3ChartComponent}
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


