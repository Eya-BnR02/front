import { Component, OnInit } from '@angular/core';
import { EleveService } from '../Services/eleve.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  formData: any = {
    id: null,
    firstname: '',
    lastname: '',
    niveau: ''
  };
  eleves: any[] = [];
  selectedEleve: any = null;
  isFormVisible: boolean = true;
  niveaux: string[] = []; 

  constructor(private eleveService: EleveService) {}

  ngOnInit(): void {
    this.loadEleves(); 
  }

  loadEleves(): void {
    this.eleveService.getEleves().subscribe(
      (data) => {
        this.eleves = data; // Assign the fetched data to the eleves array
        this.extractNiveaux(); // Extract unique niveau values
      },
      (error) => {
        console.error('Error fetching eleves:', error);
      }
    );
  }

  toggleFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  onSubmit(): void {
    if (this.selectedEleve) {
      // If selectedEleve is not null, it means we are editing an existing eleve
      this.eleveService.editEleve(this.selectedEleve.id, this.formData).subscribe(
        (response) => {
          console.log('Eleve updated successfully:', response);
          alert("Eleve updated successfully")
          this.selectedEleve = null; // Reset selectedEleve
          this.formData = { id: null, firstname: '', lastname: '', niveau: '' }; // Reset form
          this.loadEleves(); // Reload eleves after updating
        },
        (error) => {
          console.error('Error updating eleve:', error);
        }
      );
    } else {
      // If selectedEleve is null, it means we are creating a new eleve
      this.eleveService.createEleve(this.formData).subscribe(
        (response) => {
          console.log('Eleve created successfully:', response);
          alert('Eleve created successfully')
          this.eleves.push(response); // Add the new eleve to the list
          this.formData = { id: null, firstname: '', lastname: '', niveau: '' }; // Reset form
          this.extractNiveaux(); // Extract unique niveau values
        },
        (error) => {
          console.error('Error creating eleve:', error);
        }
      );
    }
  }

  editEleve(id: number): void {
    // Fetch the eleve details by ID
    this.eleveService.getEleveById(id).subscribe(
      (eleve) => {
        this.selectedEleve = eleve; // Set selectedEleve to the fetched eleve
        // Pre-fill form fields with the eleve details
        this.formData = { id: eleve.id, firstname: eleve.firstname, lastname: eleve.lastname, niveau: eleve.niveau };
        this.isFormVisible = true; // Show the form for editing
      },
      (error) => {
        console.error('Error fetching eleve for editing:', error);
      }
    );
  }

  deleteEleve(id: number): void {
    this.eleveService.deleteEleve(id).subscribe(
      (response) => {
        console.log('Eleve deleted successfully:', response);
        alert("Eleve deleted successfully")
        // Remove the deleted eleve from the eleves array
        this.eleves = this.eleves.filter(eleve => eleve.id !== id);
        this.extractNiveaux(); // Extract unique niveau values
      },
      (error) => {
        console.error('Error deleting eleve:', error);
      }
    );
  }

  extractNiveaux(): void {
    
    this.niveaux = [...new Set(this.eleves.map(eleve => eleve.niveau))];
    console.log(this.niveaux)
  }
  
}
