import { useState } from 'react';
import axios from 'axios' 
import './subscriptionform.css'; // Ensure the correct path

const FeedbackForm = () => {
  
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [feedback,setFeedback]=useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(name,email,feedback);
    const data={
      Name:name,
      Email:email,
      Feedback:feedback
    }
    axios.post('ENTER LINK HERE',data).then((response)=>{
      console.log(response);
      setName('');
      setEmail('');
      setFeedback('');
      setShowSuccessPopup(true); // Show popup after success
    }).catch((error) => {
      console.error('Error submitting feedback:', error);
    });
  };

  const closePopup = () => {
    setShowSuccessPopup(false); // Close the popup
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
            value={name} 
            onChange={(e)=>setName(e.target.value)} 
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
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
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
            value={feedback} 
            onChange={(e)=>setFeedback(e.target.value)} 
            required
            style={{ height: '150px', width: '100%' }} // Fixed height and full width
          />
        </div>
        
        <div className="feedback-form-field-button" style={{ textAlign: 'left' }}>
          <input className="feedback-form-submit" type="submit" value="Submit Feedback"/>
        </div>
      </form>

      {/* Success Popup Modal */}
      {showSuccessPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Feedback Submitted Successfully!</h3>
            <p>Thank you for your valuable feedback.</p>
            <button className="popup-close" onClick={closePopup}>OK</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default FeedbackForm;
