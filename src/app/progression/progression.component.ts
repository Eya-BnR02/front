import { Component, OnInit } from '@angular/core';
import { EleveService } from '../Services/eleve.service';

@Component({
  selector: 'app-progression',
  templateUrl: './progression.component.html',
  styleUrls: ['./progression.component.css']
})
export class ProgressionComponent implements OnInit {
  eleves: any[] = [];
  
  constructor(private eleveService: EleveService) {}

  ngOnInit(): void {
    this.loadEleves(); 
  }

  loadEleves(): void {
    this.eleveService.getAllEleves().subscribe(
      (data) => {
        this.eleves = data; // Assign the fetched data to the eleves array
      },
      (error) => {
        console.error('Error fetching eleves:', error);
      }
    );
  }

  calculateProgress(progress: number): string {
    return progress + '%';
  }

  refreshProgress(): void {
    // Reload eleves to update progression
    this.loadEleves();
  }

  updateProgress(eleveId: number, progress: number): void {
    this.eleveService.updateProgress(eleveId, progress).subscribe(
      (response) => {
        console.log('Progress updated successfully:', response);
        // Handle success (e.g., show a message)
      },
      (error) => {
        console.error('Error updating progress:', error);
        // Handle error (e.g., show an error message)
      }
    );
  }

  saveProgress(eleveId: number, progress: number): void {
    this.eleveService.saveProgress(eleveId, progress).subscribe(
      (response) => {
        console.log('Progress saved successfully:', response);
        // Handle success (e.g., show a message)
      },
      (error) => {
        console.error('Error saving progress:', error);
        // Handle error (e.g., show an error message)
      }
    );
  }
}
