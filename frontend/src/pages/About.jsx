import PageTransition from '../components/layout/PageTransition';
import './About.css';

function About() {
  return (
    <PageTransition>
      <div className="about-page">
        <section className="about-section">
          <h1>About MediChat</h1>
          <p className="about-intro">
            MediChat is an AI-powered medical chatbot designed to provide quick and reliable information about general health topics and medical questions.
          </p>
          
          <div className="about-content">
            <div className="about-card">
              <h2>Our Mission</h2>
              <p>
                Our mission is to make basic medical information more accessible to everyone by leveraging artificial intelligence technologies. We aim to help users better understand their health concerns and provide general guidance on common medical topics.
              </p>
            </div>
            
            <div className="about-card">
              <h2>How It Works</h2>
              <p>
                MediChat uses advanced natural language processing to understand your medical questions and provide relevant information. The system is trained on a wide range of medical literature and continuously updated with the latest health information.
              </p>
            </div>
          </div>
        </section>
        
        <section className="disclaimer-section">
          <div className="disclaimer-box">
            <h2>Important Disclaimer</h2>
            <p>
              MediChat is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
            <p>
              If you think you may have a medical emergency, call your doctor or emergency services immediately. MediChat does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned in responses.
            </p>
          </div>
        </section>
        
        <section className="usage-section">
          <h2>How to Use MediChat</h2>
          <div className="usage-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Ask a Question</h3>
              <p>Type your medical or health-related question in the chat interface.</p>
            </div>
            
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Get Information</h3>
              <p>Receive a response with relevant information about your query.</p>
            </div>
            
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Follow Up</h3>
              <p>Ask follow-up questions to get more detailed information if needed.</p>
            </div>
            
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Consult Professionals</h3>
              <p>Remember to consult healthcare professionals for diagnosis and treatment.</p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

export default About;