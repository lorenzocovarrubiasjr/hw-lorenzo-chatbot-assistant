const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');

function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const messageParagraph = document.createElement('p');
    messageParagraph.innerText = message;

    messageElement.appendChild(messageParagraph);
    chatLog.appendChild(messageElement);
}

function getChatbotResponse(userMessage) {

    fetch('/getChatbotResponse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMessage }),
    })
        .then(response => response.json())
        .then(data => {

            displayMessage('chatbot', data.chatbotResponse);
        })
        .catch(error => console.error('Error:', error));
}

function sendMessage() {
    const message = userInput.value;
    displayMessage('user', message);
    getChatbotResponse(message);
    userInput.value = '';
}