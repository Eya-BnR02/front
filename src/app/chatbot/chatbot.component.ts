import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages: { content: string, isUserMessage: boolean }[] = [];
  userInput: string = '';
  chatVisible: boolean = false;

  toggleChatContainer() {
    this.chatVisible = !this.chatVisible;}

  async sendMessage() {
    if (this.userInput.trim() === '') return;
    try {
      const response = await axios.get('https://chatgpt4-api.p.rapidapi.com/gpt', {
        params: {
          content: this.userInput
        },
        headers: {
          'X-RapidAPI-Key': '5e289e52e2msh947c082c1d3fd36p1f4881jsnf3f6cf4694de',
          'X-RapidAPI-Host': 'chatgpt4-api.p.rapidapi.com'
        }
      });
      this.messages.push({ content: this.userInput, isUserMessage: true });
      this.messages.push({ content: JSON.stringify(response.data.content), isUserMessage: false }); // Stringify response.data
      this.userInput = '';
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}
