# HelloWorld Lorenzo's Personal Assistant 🤖

A simple Node.js + Express chatbot that integrates with the OpenAI API to provide conversational responses directly from a user-facing HTML UI.

> 🚧 **Work in progress**: This chatbot will soon support Retrieval-Augmented Generation (RAG) to respond with insights about my resume and work history.

---

## 🧠 Features

- Node.js + Express backend
- Basic HTML/CSS/JavaScript frontend
- Integration with OpenAI Chat API
- Simple chat interface with user input/output
- Planned: RAG integration with custom knowledge (resume, work experience)

---

## 📁 Project Structure
```
├── public/
│ ├── index.html # Chat UI
│ ├── style.css # Basic styling
│ └── script.js # Handles UI logic + API calls
├── .env # OpenAI API key (not committed)
├── .gitignore
├── openai.js # OpenAI Class Wrapper to handle functionality 
├── package.json
├── server.js # Express app
└── README.md
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**
git clone https://github.com/lorenzocovarrubiasjr/hw-lorenzo-chatbot-assistant
cd hw-lorenzo-chatbot-assistant

2. ** Install dependencies **
npm install

3. ** Set up Environment Variables **
Create a .env file in the root: `OPENAI_API_KEY=your_openai_api_key_here`

4. ** Start the server **
node server.js

5. ** Open in browser **
Visit: http://localhost:3000



## 💡 Future Plans
## ✅ Basic OpenAI chat integration

🧠 Add custom RAG pipeline (e.g., using langchain, vectordb, or custom embeddings)

📄 Load resume data for personalized answers

🔒 Secure input validation and rate limiting

📦 Optional deployment to platforms like Render or Vercel