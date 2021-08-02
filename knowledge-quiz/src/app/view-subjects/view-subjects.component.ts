import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-subjects',
  templateUrl: './view-subjects.component.html',
  styleUrls: ['./view-subjects.component.css']
})
export class ViewSubjectsComponent implements OnInit {

  buttons = [
    { name: 'Math',},
    { name: 'Science',},
    { name: 'Computer Science',},
    { name: 'History',},
    { name: 'English',}
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
