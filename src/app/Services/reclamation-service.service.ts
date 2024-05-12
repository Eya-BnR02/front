import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReclamationServiceService {

  private apiUrl = 'http://localhost:8087/reclamations';
  

  constructor(private http: HttpClient,private authService: AuthService) { }

  getReclamations() {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
  
  })
  return this.http.get(`${this.apiUrl}/get`,{ headers: headers });}

  deleteReclamation(id: number):Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
  
  })
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`,{ headers: headers });
  }
  createReclamation(reclamationData: any): Observable<any> {
    const token = this.authService.getToken();
    const id = this.authService.getid();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(`${this.apiUrl}/add`, reclamationData, { headers: headers });
  }

  updateReclamation(id: number, reclamation: any) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.put(`${this.apiUrl}/put/${id}`, reclamation ,{ headers: headers });
  }
  getReclamationById(id: number) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.get(`${this.apiUrl}/get/${id}`, { headers: headers });
  }
}

