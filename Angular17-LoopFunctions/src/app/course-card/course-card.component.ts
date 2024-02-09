import { Component, Input } from '@angular/core';
import { Course } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {
  @Input()
  course!: Course;
  @Input({ required: true })
  index!: number;
}
