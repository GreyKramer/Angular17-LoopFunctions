import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { CommonModule } from '@angular/common';

export interface Course {
  id: number;
  description: string;
  longDescription: string;
  category: string;
  lessonCount?: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular17-LoopFunctions';
  courses: Course[] = [
    {
      id: 1,
      description: 'Angular Core Course',
      longDescription:
        'A detailed walk through of angular and its core features',
      category: 'Intermediate',
      lessonCount: 5,
    },
    {
      id: 2,
      description: 'RXJS Practice Course',
      longDescription: 'Understand rxjs observables and operators',
      category: 'Beginner',
      lessonCount: 10,
    },
    {
      id: 3,
      description: 'Angular for Beginners',
      longDescription:
        'Learn Angular funcdementals and learn what goes on under Angulars hood',
      category: 'Beginner',
      lessonCount: 12,
    },
  ];
  // creating our own tracking funciton
  // the pourpose of this funciton is to create a unique identifier
  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
