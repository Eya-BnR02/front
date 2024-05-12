import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8087/users/';

  constructor(private http: HttpClient, private authService: AuthService) { }
  getProf(): Observable<any[]> {
    const token = this.authService.getToken();
    const id = this.authService.getid();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.get<any[]>(`${this.apiUrl}get/prof`, { headers: headers });
  }
  editProf(id: number, profData: any): Observable<any> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.put<any>(`${this.apiUrl}put/${id}`, profData, { headers: headers });
  }
  getProfById(id: number): Observable<any> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(`${this.apiUrl}${id}`, { headers: headers });
  }
  deleteProf(id: number): Observable<any> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    return this.http.delete<any>(`${this.apiUrl}delete/${id}`, { headers: headers });
  }
  getParentById(id: number): Observable<any> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(`${this.apiUrl}${id}`, { headers: headers });
  }
  deleteParent(id: number): Observable<any> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    return this.http.delete<any>(`${this.apiUrl}delete/${id}`, { headers: headers });
  }
  editParent(id: number, parentData: any): Observable<any> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.put<any>(`${this.apiUrl}put/${id}`, parentData, { headers: headers });
  }
  getParent(): Observable<any[]> {
    const token = this.authService.getToken();
    const id = this.authService.getid();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.get<any[]>(`${this.apiUrl}get/parent`, { headers: headers });
  }
}
