import { Component } from '@angular/core';

export interface course {
  id: number;
  description: string;
  longDescription: string;
  category: string;
  lessonCount?: number;
}

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {
  coursesArray: course[] = [
    {
      id: 1,
      description: 'Angular Core Course',
      longDescription:
        'A detailed walk through of angular and its core features',
      category: 'Intermediate',
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
}
