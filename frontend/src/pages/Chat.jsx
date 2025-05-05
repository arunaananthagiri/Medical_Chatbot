import { useState, useEffect, useRef } from 'react';
import MessageBubble from '../components/MessageBubble';
import TypingIndicator from '../components/TypingIndicator';
import PageTransition from '../components/layout/PageTransition';
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatWindowRef = useRef(null);

  // Auto-scroll to bottom of chat when messages change
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Add welcome message when component mounts
  useEffect(() => {
    const welcomeMessage = { 
      from: 'bot', 
      text: 'Hello! I\'m your AI medical assistant. How can I help you today?' 
    };
    setMessages([welcomeMessage]);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
  
    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setError(null);
    setIsLoading(true);
  
    // Check for greetings
    const normalizedInput = input.trim().toLowerCase();
    if (["hi", "hello", "hey"].includes(normalizedInput)) {
      const botMessage = { from: 'bot', text: 'Hello! How may I assist you?' };
      setTimeout(() => {
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }, 500); // Simulate quick typing
      return;
    }
  
    try {
      const response = await fetch('http://127.0.0.1:8080/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      const botMessage = { from: 'bot', text: data.response };
  
      setTimeout(() => {
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      console.error('Error:', err);
      setError('Sorry, there was an error connecting to the server. Please try again.');
      setIsLoading(false);
    }
  };
  

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <PageTransition>
      <div className="chat-page">
        <div className="chat-container">
          <div className="chat-header">
            <h2>Medical Assistant</h2>
            <p className="chat-subtitle">Ask me anything about your health</p>
          </div>
          
          <div className="chat-window" ref={chatWindowRef}>
            {messages.map((msg, idx) => (
              <MessageBubble key={idx} from={msg.from} text={msg.text} />
            ))}
            {isLoading && <TypingIndicator />}
            {error && (
              <div className="error-message">
                <p>{error}</p>
              </div>
            )}
          </div>
          
          <div className="chat-input">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your medical question..."
              disabled={isLoading}
              rows={1}
            />
            <button 
              onClick={sendMessage} 
              disabled={isLoading || !input.trim()}
              className={`send-button ${isLoading ? 'loading' : ''}`}
            >
              {isLoading ? (
                <span className="loading-icon">...</span>
              ) : (
                <span className="send-icon">→</span>
              )}
            </button>
          </div>
        </div>
        
        <div className="chat-info">
          <div className="info-card">
            <h3>Usage Tips</h3>
            <ul>
              <li>Be specific about your symptoms</li>
              <li>Mention relevant medical history</li>
              <li>Ask about preventative measures</li>
              <li>Inquire about treatment options</li>
            </ul>
          </div>
          
          <div className="disclaimer-card">
            <h3>Important Note</h3>
            <p>
              This AI assistant provides general information only and should not replace professional medical advice. 
              Always consult with a healthcare provider for diagnosis and treatment.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Chat;