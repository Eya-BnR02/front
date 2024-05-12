export interface ChatMessage {
  id?: string; // Optional unique identifier for the message
  sender: string; // Username or identifier of the sender
  content: string; // The text content of the message
  timestamp?: Date; // Optional timestamp when the message was sent
  // You can add more fields as needed, such as 'receiver', 'isRead', etc.
}
