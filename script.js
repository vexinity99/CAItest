document.getElementById("send-button").addEventListener("click", async () => {
    const userInput = document.getElementById("user-input").value;
    if (!userInput.trim()) return;

    const chatBox = document.getElementById("chat-box");

    // Display the user's message
    const userMessage = document.createElement("div");
    userMessage.textContent = `You: ${userInput}`;
    chatBox.appendChild(userMessage);

    // Clear the input field
    document.getElementById("user-input").value = "";

    // Call the AI API
    try {
        const response = await fetch("https://api.google.com/your-endpoint", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer AIzaSyBnhSdZimX_XP_1WdPVCoI18yfPKoiWx1g`
            },
            body: JSON.stringify({
                prompt: userInput,
                max_tokens: 50
            })
        });

        const data = await response.json();
        const aiMessage = document.createElement("div");
        aiMessage.textContent = `AI: ${data.choices[0].text.trim()}`;
        chatBox.appendChild(aiMessage);

        // Auto-scroll the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
        console.error("Error:", error);
        const errorMessage = document.createElement("div");
        errorMessage.textContent = "AI: Sorry, something went wrong!";
        chatBox.appendChild(errorMessage);
    }
});
