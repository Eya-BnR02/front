import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EleveService {
  private apiUrl = 'http://localhost:8087/eleve';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getEleves(): Observable<any[]> {
    const token = this.authService.getToken();
    const id = this.authService.getid();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.get<any[]>(`${this.apiUrl}/getByUserId/${id}`, { headers: headers });
  }

  createEleve(eleveData: any): Observable<any> {
    const token = this.authService.getToken();
    const id = this.authService.getid();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(`${this.apiUrl}/add?userid=${id}`, eleveData, { headers: headers });
  }

  editEleve(id: number, eleveData: any): Observable<any> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.put<any>(`${this.apiUrl}/update/${id}`, eleveData, { headers: headers });
  }

  deleteEleve(id: number): Observable<any> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`, { headers: headers });
  }
  getEleveById(id: number): Observable<any> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(`${this.apiUrl}/get/${id}`, { headers: headers });
  }
  getAllEleves(): Observable<any[]> {
    const token = this.authService.getToken();
    const id = this.authService.getid();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.get<any[]>(`${this.apiUrl}/get`, { headers: headers });
  }
  updateProgress(eleveId: number, progress: number): Observable<any> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.put<any>(`${this.apiUrl}/${eleveId}/progress?progress=${progress}`, {}, { headers: headers });
  }

  getProgress(eleveId: number): Observable<number> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.get<number>(`${this.apiUrl}/${eleveId}/progress`, { headers: headers });
  }
  saveProgress(eleveId: number, progress: number): Observable<any> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(`${this.apiUrl}/${eleveId}/progress`, { progress }, { headers: headers });
  }
}
