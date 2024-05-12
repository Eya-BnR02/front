const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: '<img src="assets/chatbot/images/icons/chat.jpg" />',
    isNotClicked: '<img src="assets/chatbot/images/icons/chat.jpg" />'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);