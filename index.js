<!DOCTYPE html>
<html>
<head>
    <title>Tashrif GPT AI</title>
  <header>
    <h1>Tashrif GPT AI</h1>
  </header>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <style>

header {
  background-color:  #1f1f1f;
  text-align: center;
  padding: 20px;
}

h1 {
  color:  #FFA500; 
}

      body {

        background-color:  #FFA500;
  font-family: 'Roboto', sans-serif;
  padding: 20px;
}

 container {
  background-color: #FFA500;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  width: 100%;
  margin-bottom: 30px;
}

.chat-container {
  background-color: #333333;
  padding: 20px;
  margin-bottom: 20px;
  overflow-y: auto;
  box-align: center;
  font-size: 20.4px;
  max-height: 110vh;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  color: #ffffff;
  word-wrap: break-word;
}

.message {
  margin-bottom: 20px;
}

..bot-message {
  background: linear-gradient(45deg, #4CAF50, #45a049);
  border-radius: 15px;
  padding: 15px;
  text-align: left;
  color: #ffffff;
  word-wrap: break-word;
  margin-bottom: 10px;
  animation: fadeIn 0.5s ease;
}

.bot-message::before {
        content: "🤖";
        padding-right: 3px;
      }
 .user-message::before {
        content: "👤";
        padding-right: 3px;
      }

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.user-input-container {
  display: flex;
  width: 99.4%;
  background-color: #FFA500;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
}

.user-input {
  flex: 1;
  padding: 15px;
  border: none;
  border-radius: 20px;
  font-size: 22.4px;
  background-color: #363636;
  color: #ffffff;
  resize: none;
  max-height: 3em;
  overflow-y: auto;
}

.user-input:focus {
  outline: none;
}

.send-button {
  padding: 12px 12px;
  border: none;
  border-radius: 20px;
  background-color: #2979FF;
  color: #ffffff;
  cursor: pointer;
  font-size: 22px;
  transition: background-color 2.3s ease;
}

.send-button:hover {
  background-color: #2962FF;
  transform: scale(1.05); 
}


@keyframes typing {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

   </style>
</head>
<body>
        <div class="chat-container" id="chat-container"></div>
        <div class="user-input-container">
            <input type="text" id="user-input" class="user-input" placeholder="Type your message..." />
            <button id="send-button" class="send-button">Send</button>
        </div>
      </div>
      </div>
    </div>
  </div>
    <script src="script.js"></script>
    <script>
        const API_URL = "https://api.openai.com/v1/chat/completions";
        const API_KEY = "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"; 
        const chatContainer = document.getElementById("chat-container");
        const userInput = document.getElementById("user-input");
        const sendButton = document.getElementById("send-button");


        const assistantName = "GPTRAJIN";
        const userName = "";


        function displayBotMessage(message) {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message", "bot-message");
            messageElement.innerHTML = `<span class="name">${assistantName}:</span> ${message}`;

            chatContainer.appendChild(messageElement);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }


        function displayUserMessage(message) {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message", "user-message");
            messageElement.innerHTML = `<span class="name">${userName}:</span> ${message}`;

            chatContainer.appendChild(messageElement);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

//cat send msg 🥹
      async function sendMessage() {
          const userMessage = userInput.value;
          if (userMessage.trim() !== "") {
              displayUserMessage(userMessage);

                     const askingCreator = userMessage.toLowerCase().includes("creator")|| userMessage.toLowerCase().includes("owner")

              try {
                  const response = await fetch(API_URL, {
                      method: "POST",
                      headers: {
                          "Content-Type": "application/json",
                          "Authorization": `Bearer ${API_KEY}`
                      },
                      body: JSON.stringify({
                          messages: [
                              { role: "system", content: `You are a helpful assistant named ${assistantName} made by Tashrif Shahrear Rajin.You are created and developed by Tashrif Shahrear Rajin and Muaj Islam Mahi ia the best friend of Tashrif Shahrear Rajin. ` },
                              { role: "user", content: userMessage }
                          ],
                          model: "gpt-3.5-turbo",
                          max_tokens: 1000
                      })
                  });

                  const data = await response.json();
                  let botResponse = data.choices[0].message.content;

                          displayBotMessage(botResponse, assistantName);
              } catch (error) {
                  console.log("Error:", error);
                  displayBotMessage("Sorry, something went wrong..❗", assistantName);
              }

              userInput.value = "";
          }
      }



        sendButton.addEventListener("click", sendMessage);


        displayBotMessage(`Hello ${userName}! I am ${assistantName}, your helpful assistant. How can I assist you today 😊`);
    </script>
</body>
</html>
 <article>
 * @license 
 * Copyright (c) 2023 Tashrif LLC All Rights preserved  </article>
