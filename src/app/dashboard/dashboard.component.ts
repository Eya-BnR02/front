import { Component, OnInit } from '@angular/core';
import { EleveService } from '../Services/eleve.service';
import { AllTComponent } from '../all-t/all-t.component';
import { ReclamationServiceService } from '../Services/reclamation-service.service';
import { Reclamation } from '../Model/Reclamation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  eleves: any[] = [];
  reclamations: any[] = [];

  selectedEleve: any;
  formData: any = {
    id: null,
    firstname: '',
    lastname: '',
    niveau: '',
   // Add other fields here based on your table
  };
  recData : any ={
    id: null,
    title: '',
    description: '',
    status: '',
    createdAt: Date,
    updatedAt: Date,
  }
  eleveCount: number = 0;
  isFormVisible: boolean = false;
  editFormData: Reclamation = new Reclamation();
isEditFormVisible: boolean = false;

  constructor(private eleveService: EleveService,private reclamationService: ReclamationServiceService) {}

  ngOnInit(): void {
    this.loadEleves(); 
    this.loadReclamations();
   
  }

  loadEleves(): void {
    this.eleveService.getAllEleves().subscribe(
      (data) => {
        this.eleves = data; 
        this.eleveCount = this.eleves.length;// Assign the fetched data to the eleves array
      },
      (error) => {
        console.error('Error fetching eleves:', error);
      }
    );
  }

  editEleve(eleve: any): void {
    this.selectedEleve = eleve;
    this.formData = { ...eleve }; // Copy eleve data to form data
    this.isFormVisible = true; // Show the form for editing
  }

  updateEleve(): void {
    this.eleveService.editEleve(this.selectedEleve.id, this.formData).subscribe(
      (response) => {
        console.log('Eleve updated successfully:', response);
        alert('Eleve updated successfully');
        this.selectedEleve = null; // Reset selectedEleve
        this.formData = { id: null, firstname: '', lastname: '', niveau: '' }; // Reset form
        this.loadEleves(); // Reload eleves after updating
        this.isFormVisible = false; // Hide the form after updating
      },
      (error) => {
        console.error('Error updating eleve:', error);
      }
    );
  }

  deleteEleve(id: number): void {
    this.eleveService.deleteEleve(id).subscribe(
      (response) => {
        console.log('Eleve deleted successfully:', response);
        alert('Eleve deleted successfully');
        this.eleves = this.eleves.filter(eleve => eleve.id !== id);
      },
      (error) => {
        console.error('Error deleting eleve:', error);
      }
    );
  }
  loadReclamations(): void {
    this.reclamationService.getReclamations().subscribe(
      (data) => {
        this.reclamations = data as any[]; // type assertion
      },
      (error) => {
        console.error('Error fetching reclamations:', error);
      }
    );
  }
  deleteReclamation(id: number): void {
    this.reclamationService.deleteReclamation(id).subscribe(
      () => {
        console.log('Reclamation deleted successfully');
        alert('Reclamation deleted successfully');
        // Find the index of the reclamation with the given id
        const index = this.reclamations.findIndex(reclamation => reclamation.id === id);
        // Remove the reclamation from the array if found
        if (index !== -1) {
          this.reclamations.splice(index, 1);
        } else {
          console.error('Reclamation not found in the array');
        }
      },
      (error: any) => {
        console.error('Error deleting reclamation:', error);
      }
    );
  }
  updateReclamation(): void {
    this.reclamationService.updateReclamation(this.editFormData.id, this.editFormData).subscribe(
      () => {
        console.log('Reclamation updated successfully');
        alert('Reclamation updated successfully');
        this.loadReclamations(); // Reload reclamations after updating
        this.isEditFormVisible = false; // Hide the edit form after updating
      },
      (error) => {
        console.error('Error updating reclamation:', error);
      }
    );
  }
  


  editReclamation(reclamation: Reclamation): void {
    this.editFormData = { ...reclamation }; // Copy reclamation data to the edit form data
    this.isEditFormVisible = true; // Show the edit form
  }
  cancelEdit(): void {
    this.isEditFormVisible = false; // Hide the edit form
  }
}


