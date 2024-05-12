import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Long } from 'mongodb';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8087'; // Your Spring Boot backend URL
  router: any;
  isLoggedIn = false;

  constructor(private http: HttpClient) {
    
   }

  login(credentials: { username: string, password: string }): Observable<any> {
    
    return this.http.post(`${this.apiUrl}/login`, credentials);
    this.isLoggedIn = true;
 
  }

  getToken(): string | null {
    const a = localStorage.getItem('token')
    return localStorage.getItem('token');
    console.log(a)
  }
  getid() : string |null{
    return localStorage.getItem('userid')
  }
      
  clearToken():void{
    localStorage.removeItem('token');
    localStorage.removeItem('nom');
    localStorage.removeItem('prenom');
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }
    }


