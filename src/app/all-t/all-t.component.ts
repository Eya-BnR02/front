import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-all-t',
  templateUrl: './all-t.component.html',
  styleUrls: ['./all-t.component.css']
})
export class AllTComponent implements OnInit {
  profData: any[] | undefined;
  showEditForm: boolean = false;
  selectedProf: any = {};
  TCount: number = 0;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.fetchProfData();
  }

  fetchProfData(): void {
    this.adminService.getProf().subscribe(data => {
      this.profData = data;
      this.TCount = this.profData.length;
    });
  }

  editProf(id: number): void {
    this.adminService.getProfById(id).subscribe((data) => {
      this.selectedProf = data;
      this.showEditForm = true;
    });
  }

  updateProf(): void {
    this.adminService.editProf(this.selectedProf.id, this.selectedProf).subscribe(() => {
      this.showEditForm = false;
      this.fetchProfData();
    });
  }

  cancelEdit(): void {
    this.showEditForm = false;
  }
deleteProf(id: number): void {
    if (confirm('Are you sure you want to delete this teacher?')) {
      this.adminService.deleteProf(id).subscribe(() => {
        // Refresh the list after deletion
        this.fetchProfData();
      });
    }
  }

}
