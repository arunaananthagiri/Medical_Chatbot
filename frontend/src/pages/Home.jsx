import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import './Home.css';

function Home() {
  return (
    <PageTransition>
      <div className="home">
        <div className="hero-section">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your AI Medical Assistant
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get instant answers to your medical questions with our AI-powered chatbot
          </motion.p>
          
          <motion.div 
            className="cta-button-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/chat" className="cta-button">Start Chatting</Link>
          </motion.div>
        </div>
        
        <div className="features-section">
          <h2>Why Use MediChat?</h2>
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="feature-icon">🔍</div>
              <h3>Quick Answers</h3>
              <p>Get immediate responses to your medical questions without long waits.</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="feature-icon">🏥</div>
              <h3>Reliable Information</h3>
              <p>Powered by the latest medical knowledge and updated regularly.</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="feature-icon">🔒</div>
              <h3>Private & Secure</h3>
              <p>Your conversations are confidential and never shared with third parties.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Home;