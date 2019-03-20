import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BoardComponent} from './board/board.component';

const routes: Routes = [
  { path: 'memos', component: BoardComponent },
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


