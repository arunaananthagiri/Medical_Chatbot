import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p className="disclaimer">
            This chatbot is intended for informational purposes only and should not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;