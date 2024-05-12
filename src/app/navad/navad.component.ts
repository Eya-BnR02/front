import { Component } from '@angular/core';
import { LogoutService} from '../Services/logout.service';

@Component({
  selector: 'app-navad',
  templateUrl: './navad.component.html',
  styleUrl: './navad.component.css'
})
export class NavadComponent {
  constructor(private logoutservice: LogoutService) {}

  logout() {
    this.logoutservice.logout();
  }
}