import { Injectable } from '@angular/core';
import { Question } from "./question";
@Injectable()
export class DataService {
  questions: Array<Question>
  constructor() {
    this.questions = [
      {
        application: "XL",
        activity: "1.06",
        stepText: "Constructing a formula and using the SUM function",
        skill: [
          "Create an Addition(+) Formula"
        ],
        series: "GO",
        chapter: 1,
        score: 10,
        taskID: "A"
      },
      {
        application: "XL",
        activity: "1.07",
        stepText: "Copying a Formula by using the Fill Handle",        
        skill: [
          "Use the SUM Function"
        ],
        series: "GO",
        chapter: 1,
        score: 20,
        taskID: "B"
      },
      {
        application: "XL",
        activity: "1.08",
        stepText: "Formatting Financial Numbers",
        skill: [
          "Use the SUM Function"
        ],
        series: "GO",
        chapter: 1,
        score: 20,
        taskID: "C"
      },
      {
        application: "XL",
        activity: "1.09",
        stepText: "Changing the Workbook Theme",
        skill: [
          "Use the SUM Function"
        ],
        series: "GO",
        chapter: 1,
        score: 20,
        taskID: "D"
      },
      {
        application: "XL",
        activity: "1.10",
        stepText: "Charting Data and Using Recommended Charts to Select and Insert a Column Chart",
        skill: [
          "Use the SUM Function"
        ],
        series: "GO",
        chapter: 1,
        score: 20,
        taskID: "E"
      },
      {
        application: "XL",
        activity: "1.11",
        stepText: "Creating and Formatting Sparklines",
        skill: [
          "Use the SUM Function"
        ],
        series: "GO",
        chapter: 1,
        score: 20,
        taskID: "F"
      },
      {
        application: "XL",
        activity: "1.12",
        stepText: "Creating a Footer and Centering a Worksheet 1",
        skill: [
          "Use the SUM Function"
        ],
        series: "GO",
        chapter: 1,
        score: 20,
        taskID: "G"
      },
      {
        application: "XL",
        activity: "1.13",
        stepText: "Printing a Section of a Worksheet",
        skill: [
          "Use the SUM Function"
        ],
        series: "GO",
        chapter: 1,
        score: 20,
        taskID: "H"
      },
      {
        application: "XL",
        activity: "1.14",
        stepText: "Changing Page Orientation and Displaying and Printing Formulas",
        skill: [
          "Use the SUM Function"
        ],
        series: "GO",
        chapter: 1,
        score: 20,
        taskID: "I"
      },
      {
        application: "XL",
        activity: "1.15",
        stepText: "Checking Spelling in a Worksheet",
        skill: [
          "Use the SUM Function"
        ],
        series: "GO",
        chapter: 1,
        score: 20,
        taskID: "J"
      }
    ]
  }
  getQuestions(): Promise<Question[]> {
    return Promise.resolve(this.questions);
  }
}
