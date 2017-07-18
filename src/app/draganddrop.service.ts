import { Injectable } from '@angular/core';
import { DragulaService } from "ng2-dragula";
import { AssignmentService } from "./assignment.service"
import { Question } from "./question";
@Injectable()
export class DraganddropService {
  assignmentQuestions: Array<Question>;
  constructor(private dragulaService: DragulaService, private assignmentService: AssignmentService) {
    this.assignmentQuestions =this.assignmentService.getAssignmentQuestions();
  }
  init() {
    let self = this; 
    this.dragulaService.setOptions('questions-bag', {
      // Allow only question-container items to be copied
      copy: function (el, source) {
        return source === document.getElementById("question-container")
      },
      // question-items in question container that are not added yet are draggable 
      moves: function (el, source, handle, sibling) {
        let taskID = el.dataset.id;
        if (source === document.getElementById("question-container")) {
          if (self.isQuestionAlreadyAdded(taskID) || handle.classList.contains("preventDrag")) {
            return false;
          }
        }
        return true;
      },
      // Dont Allow Items to be dragged back to the question container. Only assignment container can accept questions
      accepts: function (el, target) {
        return target !== document.getElementById("question-container")
      }
    });
  }
  // If a question is already present in the assignment questions list, return true else return false
  isQuestionAlreadyAdded(taskID) {
    return (this.assignmentQuestions.map((question) => {
      return question.taskID;
    }).indexOf(taskID) !== -1);
  }
}
