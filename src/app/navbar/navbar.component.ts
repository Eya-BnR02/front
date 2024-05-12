import { Component, Input } from '@angular/core';
import { LogoutService } from '../Services/logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() niveaux: string[] = []; // Input property to receive niveaux array

  constructor(
    private logoutService: LogoutService,
    private router: Router
  ) {}

  logout() {
    this.logoutService.logout();
  }

  navigateToNiveau(niveau: string): void {
    // Perform routing based on niveau
    console.log(niveau)
    if (niveau ==='السنة أولى إبتدائي'	) {
      this.router.navigate(['/oula_tr1']);
    } else if (niveau === 'السنة ثانية إبتدائي') {
      this.router.navigate(['/thenya-tr1']);
    }
    else if (niveau === 'السنة ثانية إبتدائي') {
      this.router.navigate(['/thenya-tr1']);
  }
  else if (niveau === 'السنة ثانية إبتدائي') {
    this.router.navigate(['/thenya-tr1']);
  }
}
}