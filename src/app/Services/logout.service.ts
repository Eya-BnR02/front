import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  constructor(private router: Router) {}

  logout() {
    // Clear authentication token or session
    localStorage.removeItem('token'); // Example: If using localStorage for token storage
    
    // Redirect to login page
    this.router.navigate(['/login']);
  }

  // Other authentication-related methods (e.g., login, check authentication status) can be defined here
}
