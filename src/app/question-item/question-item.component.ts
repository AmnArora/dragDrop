import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent implements OnInit {
  @Input("questionData") question: Object;
  @Input() isAlreadyAdded: Boolean;
  @Output() questionAdded = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addQuestion(question) {
    this.questionAdded.emit(question);
  }
}
