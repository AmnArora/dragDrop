import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-assignment-item',
  templateUrl: './assignment-item.component.html',
  styleUrls: ['./assignment-item.component.scss']
})
export class AssignmentItemComponent implements OnInit {
  @Input("questionData") question: Object;
  @Input("questionIndex") questionIndex: any;
  
  constructor() { }

  ngOnInit() {
  }

}
