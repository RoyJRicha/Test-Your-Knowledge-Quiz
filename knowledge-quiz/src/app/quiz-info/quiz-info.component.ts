import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrls: ['./quiz-info.component.css']
})
export class QuizInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headers = ["Quiz Number", "Education Level", "Depth of Knowledge"];

  rows = [
    {
      "Quiz Number" : "Quiz #1",
      "Education Level" : "Beginning Elementary",
      "Depth of Knowledge" : "1"
    },
    {
      "Quiz Number" : "Quiz #2",
      "Education Level" : "End of Elemantary",
      "Depth of Knowledge" : "1"
    },
    {
      "Quiz Number" : "Quiz #3",
      "Education Level" : "Beginning Middle School",
      "Depth of Knowledge" : "1"
    },
    {
      "Quiz Number" : "Quiz #4",
      "Education Level" : "End of Middle School",
      "Depth of Knowledge" : "2"
    },
    {
      "Quiz Number" : "Quiz #5",
      "Education Level" : "Beginning High School",
      "Depth of Knowledge" : "2"
    },
    {
      "Quiz Number" : "Quiz #6",
      "Education Level" : "Middle of High School",
      "Depth of Knowledge" : "3"
    },
    {
      "Quiz Number" : "Quiz #7",
      "Education Level" : "End of High School",
      "Depth of Knowledge" : "3"
    },
    {
      "Quiz Number" : "Quiz #8",
      "Education Level" : "Beginning College",
      "Depth of Knowledge" : "3"
    },
    {
      "Quiz Number" : "Quiz #9",
      "Education Level" : "Middle of College",
      "Depth of Knowledge" : "4"
    },
    {
      "Quiz Number" : "Quiz #8",
      "Education Level" : "End of College",
      "Depth of Knowledge" : "4"
    }
  ]

}
