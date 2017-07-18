import { Component, OnInit, Input } from '@angular/core';
import { DragulaService } from "ng2-dragula";
import { AssignmentService } from '../assignment.service'; // For Fetching and Updating the List of Assignment Questions
import { DataService } from "../data.service"; // To Fetch the Complete Questions List
import { Question } from "../question"; // The Model for the Question Type

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
		private assignmentService: AssignmentService) {

		this.questions = [];
		this.assignmentQuestions = this.assignmentService.getAssignmentQuestions();

		let self = this;
		// For All the containers in questions-bag
		dragulaService.setOptions('questions-bag', {
			// Allow only question-container items to be copied
			copy: function (el, source) {
				return source === document.getElementById("question-container")
			},
			// question-items in question container that are not added yet are draggable 
			moves: function (el, source, handle, sibling) {
				let taskID = el.dataset.id;
				if (source === document.getElementById("question-container")) {
					if (self.isQuestionAlreadyAdded(taskID) || self.isHandleAnyofTheButtons(handle)) {
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

	// If a question is already present in the assignment questions list, return true else return false
	isQuestionAlreadyAdded(taskID) {
		return (this.assignmentQuestions.map((question)=> {
			return question.taskID;
		}).indexOf(taskID) !== -1);
	}

	// If the click happened on one of the buttons, then don't drag.
	// This function can be removed if we use jquery is the project. Then Jquery's hasClass can be used instead
	isHandleAnyofTheButtons(handle) {
		let classList = handle.classList;
		let selector = "preventDrag";
		let className = " " + selector + " "
		for (var i = 0, length = classList.length; i < length; i++) {
			if ((" " + classList[i] + " ").replace(/[\n\t\r]/g, " ").indexOf(className) > -1) {
				return true;
			}
		}
		return false;
	}

	// Handle click of the Add Question Button
	handleQuestionAddition(question) {
		this.assignmentService.addQuestion(question);
	}
}
