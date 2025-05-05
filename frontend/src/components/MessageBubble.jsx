import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './MessageBubble.css';

function MessageBubble({ from, text }) {
  const isUser = from === 'user';
  
  return (
    <motion.div 
      className={`message-bubble ${isUser ? 'user' : 'bot'}`}
      initial={{ opacity: 0, x: isUser ? 20 : -20, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="message-bubble-header">
        <div className="avatar">
          {isUser ? (
            <div className="user-avatar">
              <span>You</span>
            </div>
          ) : (
            <div className="bot-avatar">
              <span>AI</span>
            </div>
          )}
        </div>
      </div>
      <div className="message-text">{text}</div>
    </motion.div>
  );
}

MessageBubble.propTypes = {
  from: PropTypes.oneOf(['user', 'bot']).isRequired,
  text: PropTypes.string.isRequired
};

export default MessageBubble;