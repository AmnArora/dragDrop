import { Injectable } from '@angular/core';
import { Question } from "./question";
@Injectable()
export class AssignmentService {
  assignmentQuestions: Array<Question>
  constructor() {
    this.assignmentQuestions = [];
  }
  addQuestion(question) {
    this.assignmentQuestions.push(question);
  }
  getAssignmentQuestions(): Array<Question> {
    return this.assignmentQuestions;
  }
}
