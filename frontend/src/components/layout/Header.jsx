import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

function Header() {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="logo-content"
            >
              <span className="logo-icon">+</span>
              <span className="logo-text">MediChat</span>
            </motion.div>
          </Link>
        </div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/chat" 
                className={location.pathname === '/chat' ? 'active' : ''}
              >
                Chat
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;