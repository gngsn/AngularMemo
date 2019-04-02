import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { MatNativeDateModule, MatSidenavModule, MatListModule, MatToolbarModule } from '@angular/material';


import { AppComponent } from './app.component';
import { BoardComponent } from './component/board/board.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MemoComponent } from './component/memo/memo.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { PostComponent } from './component/post/post.component';
import { D3ChartComponent } from './component/d3-chart/d3-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MemoComponent,
    NavigationComponent,
    PostComponent,
    D3ChartComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    // MatDrawerContainer,
    MatNativeDateModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
