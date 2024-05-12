import { Component, OnInit } from '@angular/core';
import { ChatService } from '../Services/chat-service.service';
import { ChatMessage } from '../Model/Chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  chatHistory: ChatMessage[] | undefined;
  messageText: string = '';
  formData: any; // Define formData here

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.getChatHistory();
    this.formData = {}; // Initialize formData, structure it as needed
  }

  getChatHistory(): void {
    this.chatService.getChatHistory()
      .subscribe(history => this.chatHistory = history);
  }

  sendMessage(): void {
    if (!this.messageText.trim()) {
    }

    const message: ChatMessage = {
      content: this.messageText,
      sender: '' 
    };
console.log(message)
    this.chatService.sendMessage(message)
      .subscribe(() => {
        this.getChatHistory(); 
      });

    this.messageText = ''; 
  }
}
