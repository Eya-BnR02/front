import { Component } from '@angular/core';

@Component({
  selector: 'app-child-progress',
  templateUrl: './child-progress.component.html',
  styleUrls: ['./child-progress.component.css']
})
export class ChildProgressComponent {
  children = [
    { name: 'Child 1', progress: 30 },
    { name: 'Child 2', progress: 50 },
    { name: 'Child 3', progress: 80 }
  ];

  // Function to determine circle color based on progress
  getCircleColor(progress: number): string {
    if (progress < 30) {
      return 'red'; // Example color for low progress
    } else if (progress < 70) {
      return 'orange'; // Example color for medium progress
    } else {
      return 'green'; // Example color for high progress
    }
  }
}
