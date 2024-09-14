import { useState } from 'react';
import './subscriptionform.css'; // Ensure the correct path

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'; // Replace with your deployed script URL

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.status === 'success') {
        alert('Feedback submitted successfully');
        setFormData({ name: '', email: '', feedback: '' }); // Reset the form
      } else {
        alert('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('There was an error submitting your feedback');
    }
  };

  return (
    <div className="feedback-form-container">
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="nr" value="widget"/>
        <input type="hidden" name="nlang" value=""/>
        
        <div className="feedback-form-field-name">
          <h2>Facing any issues with the site?</h2>
          <p>Submit your valuable feedback and help us improve!</p>
          <label htmlFor="feedback-form-name">First name or full name</label>
          <input 
            className="feedback-form-name-input" 
            type="text" 
            name="name" 
            id="feedback-form-name" 
            placeholder="Enter your name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="feedback-form-field-email">
          <label htmlFor="feedback-form-email">Email</label>
          <input 
            className="feedback-form-email-input" 
            type="email" 
            name="email" 
            id="feedback-form-email" 
            placeholder="Enter your email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="feedback-form-field-feedback">
          <label htmlFor="feedback-form-feedback">Feedback</label>
          <textarea 
            name="feedback" 
            id="feedback-form-feedback" 
            className="feedback-form-feedback-input"
            placeholder="Enter your feedback" 
            value={formData.feedback} 
            onChange={handleChange} 
            required
            style={{ height: '150px', width: '100%' }} // Fixed height and full width
          />
        </div>
        
        <div className="feedback-form-field-button" style={{ textAlign: 'left' }}>
          <input className="feedback-form-submit" type="submit" value="Submit Feedback"/>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
