# Lab 09: Express Fortune API with curl and Postman
**Course:** CIS 485 - Web Programming II  
**Student:** Sam Lima  

## 🧠 Objective
This lab introduces working with APIs using Express.js, `curl`, and Postman.  
It covers:
- Handling GET and POST requests
- Using query strings vs. body data
- Creating a RESTful API that returns and accepts fortunes

---

## 🚀 How to Run
1. Install dependencies:
   ```bash
   npm install express
Start the server:

bash
Copy
Edit
node app.js
Visit: http://localhost:3000

📌 API Endpoints
🟢 GET /
Returns a welcome page with links to try the API in your browser.

🟢 GET /fortunes
Returns a random fortune.

Examples:

bash
Copy
Edit
curl "http://localhost:3000/fortunes"
curl "http://localhost:3000/fortunes?count=3"
curl "http://localhost:3000/fortunes?id=2"
🟡 POST /submit
Submits a user's name and message.

Example:

bash
Copy
Edit
curl.exe --% -X POST http://localhost:3000/submit -H "Content-Type: application/json" -d "{\"name\":\"Sam\",\"message\":\"Hello Express!\"}"
🟡 POST /fortunes
Adds a new fortune to the list.

Example:

bash
Copy
Edit
curl.exe --% -X POST http://localhost:3000/fortunes -H "Content-Type: application/json" -d "{\"newFortune\":\"This lab is going great!\"}"
✅ Features
In-memory storage of fortunes

Friendly home route with instructions

POST request validation and error messages

PowerShell-friendly curl.exe examples

📚 Reflection
This lab helped me practice:

Building APIs with Express

Testing endpoints via curl and Postman

Handling query strings vs. request bodies

Validating input and returning JSON responses
