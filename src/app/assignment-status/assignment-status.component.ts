import { Component, Input } from '@angular/core';
import { Question } from "../question";
@Component({
  selector: 'app-assignment-status',
  templateUrl: './assignment-status.component.html',
  styleUrls: ['./assignment-status.component.scss']
})
export class AssignmentStatusComponent {
  @Input() totalScore;
  @Input() totalCount;
  constructor() {}
}
