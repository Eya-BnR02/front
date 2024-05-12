import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatMessage } from '../Model/Chat';
import { AuthService } from './auth.service'; // Make sure the path to AuthService is correct

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  sendMessage(message: ChatMessage): Observable<any> {
    const token = this.authService.getToken(); // Retrieve the token from AuthService
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post('http://localhost:8087/api/chat/send', message, { headers: headers });
  }

  getChatHistory(): Observable<ChatMessage[]> {
    const token = this.authService.getToken(); // Retrieve the token from AuthService
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<ChatMessage[]>('http://localhost:8087/api/chat/history', { headers: headers });
  }
}
