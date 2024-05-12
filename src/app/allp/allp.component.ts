import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
@Component({
  selector: 'app-allp',
  templateUrl: './allp.component.html',
  styleUrl: './allp.component.css'
})
export class AllpComponent implements OnInit {
  parentData: any[] | undefined;
  showEditForm: boolean = false;
  selectedParent: any = {};

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.fetchParentData();
  }

  fetchParentData(): void {
    this.adminService.getParent().subscribe(data => {
      this.parentData = data;
    });
  }

  editParent(id: number): void {
    this.adminService.getParentById(id).subscribe((data) => {
      this.selectedParent = data;
      this.showEditForm = true;
    });
  }

  updateParent(): void {
    this.adminService.editParent(this.selectedParent.id, this.selectedParent).subscribe(() => {
      this.showEditForm = false;
      this.fetchParentData();
    });
  }

  cancelEdit(): void {
    this.showEditForm = false;
  }
  deleteParent(id: number): void {
    if (confirm('Are you sure you want to delete this teacher?')) {
      this.adminService.deleteParent(id).subscribe(() => {
        // Refresh the list after deletion
        this.fetchParentData();
      });
    }
  }

}
