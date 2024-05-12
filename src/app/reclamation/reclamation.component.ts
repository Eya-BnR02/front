import { Component, EventEmitter, Output } from '@angular/core';
import { Reclamation } from '../Model/Reclamation';
import { ReclamationServiceService } from '../Services/reclamation-service.service';
@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrl: './reclamation.component.css'
})
export class ReclamationComponent {
  @Output() reclamationCreated = new EventEmitter<Reclamation>();

  formData: Reclamation = new Reclamation();

  constructor(private reclamationService: ReclamationServiceService) {}

  submitReclamation(): void {
    this.reclamationService.createReclamation(this.formData).subscribe(
      (createdReclamation) => {
        console.log('Reclamation created successfully:', createdReclamation);
        alert('Reclamation created successfully');
        this.reclamationCreated.emit(createdReclamation); // Emit the newly created reclamation
        this.formData = new Reclamation(); // Reset the form data
      },
      (error) => {
        console.error('Error creating reclamation:', error);
      }
    );
  }
}
