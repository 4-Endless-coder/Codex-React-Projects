import { Calculator, TrendingUp, BookOpen, Award } from "lucide-react";
import SGPACalculator from "../components/SGPACalculator";
import PercentageConverter from "../components/PercentageConverter";
import CGPACalculator from "../components/CGPACalculator";
import GradingTable from "../components/GradingTable";
import { useState } from "react";
import "../styles.css";

const Index = () => {
  const [activeTab, setActiveTab] = useState("conversion");

  return (
    <div className="app-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="container text-center hero-content">
          <div className="hero-icon">
            <Calculator className="icon-large" />
          </div>
          <h1>SGPA & CGPA Calculator</h1>
          <p className="hero-description">
            Calculate your SGPA, CGPA, and convert marks to percentage for Odisha Universities
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <BookOpen className="feature-icon" />
              <span>Utkal University Format</span>
            </div>
            <div className="feature-item">
              <TrendingUp className="feature-icon" />
              <span>Instant Results</span>
            </div>
            <div className="feature-item">
              <Award className="feature-icon" />
              <span>Accurate Calculations</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container main-content">
        <div className="tabs-wrapper">
          <div className="tabs-list">
            <button 
              className={`tab-trigger ${activeTab === 'conversion' ? 'active' : ''}`}
              onClick={() => setActiveTab('conversion')}
            >
              Conversion
            </button>
            <button 
              className={`tab-trigger ${activeTab === 'sgpa' ? 'active' : ''}`}
              onClick={() => setActiveTab('sgpa')}
            >
              SGPA Calculator
            </button>
            <button 
              className={`tab-trigger ${activeTab === 'cgpa' ? 'active' : ''}`}
              onClick={() => setActiveTab('cgpa')}
            >
              CGPA Calculator
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'conversion' && <PercentageConverter />}
            {activeTab === 'sgpa' && <SGPACalculator />}
            {activeTab === 'cgpa' && <CGPACalculator />}
          </div>
        </div>

        {/* Grading Reference */}
        <div className="grading-section">
          <GradingTable />
        </div>
      </main>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="card contact-card">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-description">
              Have questions or feedback? Send us a message.
            </p>
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');
              
              const mailtoLink = `mailto:YOUR_EMAIL@example.com?subject=Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
              window.location.href = mailtoLink;
              
              e.currentTarget.reset();
            }}>
              <div className="form-group">
                <label htmlFor="name" className="label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  maxLength="100"
                  className="input"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  maxLength="255"
                  className="input"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  maxLength="1000"
                  className="input textarea"
                  placeholder="Your message..."
                />
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Based on Utkal University Grading System | For educational purposes</p>
          <p>SGPA & CGPA Calculator</p>
          <p>&copy; {new Date().getFullYear()} Ashesh Dash. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
