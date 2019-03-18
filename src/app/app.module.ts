import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
