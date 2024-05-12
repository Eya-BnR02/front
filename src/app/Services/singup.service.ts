// signup.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../Model/Compte';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://localhost:8087'; // Your backend authentication API endpoint

  constructor(private http: HttpClient) { }

  register(user: Compte): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}

