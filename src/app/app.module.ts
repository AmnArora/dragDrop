import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionContainerComponent } from './question-container/question-container.component';

import { DragulaModule } from "ng2-dragula";
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { QuestionItemComponent } from './question-item/question-item.component';
import { AssignmentContainerComponent } from './assignment-container/assignment-container.component';
import { AssignmentItemComponent } from './assignment-item/assignment-item.component'

import { DataService } from "./data.service";
import { AssignmentService } from "./assignment.service";

@NgModule({
  declarations: [
    AppComponent,
    QuestionContainerComponent,
    QuestionItemComponent,
    AssignmentContainerComponent,
    AssignmentItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule,
    TooltipModule.forRoot()
  ],
  providers: [DataService, AssignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
