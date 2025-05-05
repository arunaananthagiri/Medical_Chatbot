import { motion } from 'framer-motion';
import './TypingIndicator.css';

function TypingIndicator() {
  return (
    <div className="typing-indicator-container">
      <div className="typing-indicator">
        <div className="typing-avatar">
          <span>AI</span>
        </div>
        <div className="typing-bubbles">
          <motion.div 
            className="dot"
            initial={{ y: 0 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay: 0 }}
          />
          <motion.div 
            className="dot"
            initial={{ y: 0 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
          />
          <motion.div 
            className="dot"
            initial={{ y: 0 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
}

export default TypingIndicator;