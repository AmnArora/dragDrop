import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { DragulaService } from "ng2-dragula";
import { AssignmentService } from '../assignment.service'; // For Fetching and Updating the List of Assignment Questions
import { Question } from "../question"; // The Model for the Question Type

declare var autoScroll: any;
@Component({
  selector: 'app-assignment-container',
  templateUrl: './assignment-container.component.html',
  styleUrls: ['./assignment-container.component.scss']
})
export class AssignmentContainerComponent implements OnInit {
  assignmentQuestions: Array<Question>;
  drake: any;
  isElementOver: Boolean;
  @Input() sidebarOpened: boolean;
  totalScore;
  constructor(private dragulaService: DragulaService, private assignmentService: AssignmentService, private ref: ChangeDetectorRef) {
    this.assignmentQuestions = this.assignmentService.getAssignmentQuestions();
    this.drake = dragulaService.find("questions-bag").drake;
    this.isElementOver = false;
    this.totalScore = 0;
    dragulaService.dropModel.subscribe((value) => {
      // slice the bag name(first Arg) and pass the other params to onDropModel handler     
      this.onDropModel(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      // If the Container dragged over is Assignment container then only update the value of isEleemntOver
      if (value[2] === document.getElementById("assignment-container")) {
        this.isElementOver = true;
      }
    })
    dragulaService.out.subscribe((value) => {
      this.isElementOver = false;
    });
  }

  private onDropModel(args) {
    let [el, target, source] = args;
    this.totalScore = this.assignmentQuestions.reduce((sum, value) => {
      return sum = sum + value.score
    }, 0)
    if (source === document.getElementById("assignment-container")) {
      // Run Change detection cycle
      let temp = this.assignmentQuestions;
      this.assignmentQuestions = null;
      this.ref.detectChanges();
      this.assignmentQuestions = temp;
      this.ref.detectChanges();
    }
  }

  ngOnInit() {
    let self = this;
    let scrollOptions = {
      margin: 30,
      maxSpeed: 5,
      scrollWhenOutside: true,
      autoScroll: function () {
        //Only scroll when the pointer is down, and there is a child being dragged. 
        return this.down && self.drake.dragging;
      }
    }
    let scroll = autoScroll([document.getElementById('assignment-container')], scrollOptions);
  }
}
