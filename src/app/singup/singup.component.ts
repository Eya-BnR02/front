import { Component } from '@angular/core';
import { SignupService } from '../Services/singup.service';
import { Router } from '@angular/router';
import { Compte } from '../Model/Compte';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  user: Compte = new Compte();
  signupForm: any;

  constructor(
    private signupService: SignupService,
    private router: Router
  ) { }

  register() {
    this.signupService.register(this.user).subscribe(response => {
      console.log('User registered successfully:', response);
      alert('Registration successful!');
      this.router.navigate(['/login']);
    }, error => {
      console.error('Registration failed:', error);
    });
  }

}
