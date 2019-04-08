import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',  // css selector syntax
  // template: '<h2>{{ "Title:" + getTitle() }}</h2>',  /// String interpolation {{ }}
  template: `
    <h2>{{ "Title: " + getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = 'List of courses';
  courses;

  // Dependency injection: injecting dependency in the constructor
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }
}
