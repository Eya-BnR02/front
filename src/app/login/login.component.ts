import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };
email: any;
mdp: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {
    this.authService.login(this.credentials).subscribe((response: any) => {
      // Handle successful login response
      console.log('worked');
      localStorage.setItem('token', response.token);
      const id = response.id;
      localStorage.setItem('userid',id.toString())
     
      
      // Check the role of the authenticated user
      console.log(response.role)
      console.log(response.token)
      console.log(response.id)
     console.log(response.data)
     
      if (response.role === 'ADMIN') {

        // Redirect to the admin dashboard
        this.router.navigate(['/dash']);
      }else if (response.role ==='USER') {
        // Redirect to the default user dashboard or any other route
        this.router.navigate(['/parent']);
      } else{
        this.router.navigate(['/']);
      }
    }, error => {
      // Handle login error
      console.error('Login failed:', error);
      alert('Login failed')
    });
  }
}
