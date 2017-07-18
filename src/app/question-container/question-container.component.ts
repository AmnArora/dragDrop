import { Component, OnInit, Input } from '@angular/core';
import { DragulaService } from "ng2-dragula";
import { AssignmentService } from '../assignment.service'; // For Fetching and Updating the List of Assignment Questions
import { DataService } from "../data.service"; // To Fetch the Complete Questions List
import { Question } from "../question"; // The Model for the Question Type
import { DraganddropService } from "../draganddrop.service";
@Component({
	selector: 'app-question-container',
	templateUrl: './question-container.component.html',
	styleUrls: ['./question-container.component.scss']
})
export class QuestionContainerComponent implements OnInit {
	questions: Array<Question>;
	assignmentQuestions: Array<Question>;
	@Input() sidebarOpened: boolean;
	drake: any;
	constructor(private dragulaService: DragulaService,
		private dataService: DataService,
		private assignmentService: AssignmentService,
		private dds: DraganddropService) {
		this.questions = [];
		this.assignmentQuestions = this.assignmentService.getAssignmentQuestions();
		this.dds.init();
	}
	ngOnInit() {
		this.dataService.getQuestions().then(questions => {
			this.questions = questions;
		});
		this.drake = this.dragulaService.find("questions-bag").drake;
		this.drake.on("cloned", this.modifyCloneDOM);
	}

	modifyCloneDOM(clone, original, type) {
		if (type === "mirror") {
			let cloneElement = clone.childNodes[0];
			cloneElement.style.backgroundColor = "#F8F3E0";
		} else if (type === "copy") {
			let ShadowElement = clone.childNodes[0];
			ShadowElement.innerHTML = "Drop Question Here";
			ShadowElement.style.border = "1px dashed yellow";
			ShadowElement.style.color = "yellow";
			ShadowElement.style.textAlign = "center";
			ShadowElement.style.height = "100px";
			ShadowElement.style.lineHeight = "75px";
			ShadowElement["style"].margin = "1rem 0";
		}
	}

	disableAlreadyAddedQuestion(data) {
		this.assignmentQuestions.push(data)
	}

	// Handle click of the Add Question Button
	handleQuestionAddition(question) {
		this.assignmentService.addQuestion(question);
	}

	isQuestionAlreadyAdded(taskID) {
		return this.dds.isQuestionAlreadyAdded(taskID);
	}
}
