import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage = { text: inputText, sender: 'user' };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setInputText('');

      // Reply with a random message
      const randomReply = getRandomReply();
      const replyMessage = { text: randomReply, sender: 'bot' };
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, replyMessage]);
      }, 1000);
    }
  };

  const getRandomReply = () => {
    const replies = [
      "Hello! How can I assist you?",
      "Nice to hear from you!",
      "How may I help you today?",
      "I'm here to assist you.",
      "That's great! How can I assist you?",
    ];
    const randomIndex = Math.floor(Math.random() * replies.length);
    return replies[randomIndex];
  };

  return (
    <div className="flex flex-col h-full w-full border-l">
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`${message.sender === 'user' ? 'ml-auto' : ''} max-w-2/3`}>
            <div className={`rounded-lg p-2 ${message.sender === 'user' ? 'bg-green-300 text-black w-max' : 'bg-blue-300 w-max ml-auto text-black'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
          className="flex-grow p-2 mr-2 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button onClick={handleSendMessage} className="bg-green-500 text-black px-4 py-2 rounded-lg">Send</button>
      </div>
    </div>
  );
};

export default Chat;
