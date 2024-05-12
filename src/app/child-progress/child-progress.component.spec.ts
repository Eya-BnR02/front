import { Component } from '@angular/core';

@Component({
  selector: 'app-child-progress',
  templateUrl: './child-progress.component.html',
  styleUrls: ['./child-progress.component.css']
})
export class ChildProgressComponent {
  // Define child data
  children = [
    { name: 'Child 1', progress: 70 },
    { name: 'Child 2', progress: 45 },
    { name: 'Child 3', progress: 90 }
  ];

  // Function to determine the circle color based on progress
  getCircleColor(progress: number): string {
    if (progress <= 30) {
      return 'red';
    } else if (progress <= 70) {
      return 'orange';
    } else {
      return 'green';
    }
  }
}
