// import React from 'react';
// import './subscriptionform.css'; 

// const SubscriptionForm = () => {

//   return (
//     <form method="post" action="#">
//         <input type="hidden" name="nr" value="widget"/>
//         <input type="hidden" name="nlang" value=""/>
//         <div className="tnp-field tnp-field-firstname">
//             <label htmlFor="tnp-1">First name or full name</label>
//             <input className="tnp-name" type="text" name="nn" id="tnp-1" placeholder required/> 
//         </div>
//         <div className="tnp-field tnp-field-email">
//             <label htmlFor="tnp-2">Email</label>
//             <input className="tnp-email" type="email" name="ne" id="tnp-2" placeholder required/>
//         </div>
//         <div>
//             <label>
//                 <input type="checkbox" name="ny" required className="tnp-privacy"/>
//                 By continuing, you accept the privacy policy
//             </label>
//         </div>
//         <div className="tnp-field tnp-field-button" style={{textAlign: 'left'}}>
//             <input className="tnp-submit" type="submit" value="Subscribe"/>
//         </div>
//     </form>
//   );
// };

// export default SubscriptionForm;

import React, { useState } from 'react';
import './subscriptionform.css';  // Ensure the correct path

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
    
    const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';  // Replace with your deployed script URL

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
        setFormData({ name: '', email: '', feedback: '' });  // Reset the form
      } else {
        alert('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('There was an error submitting your feedback');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="nr" value="widget"/>
        <input type="hidden" name="nlang" value=""/>
        
        <div className="tnp-field tnp-field-firstname">

          <h2>Facing any issues with the site?</h2>  {/* Title updated */}
          <p>Submit your valuable feedback and help us improve!</p> {/* Added descriptive text */}

          <br></br>

          <label htmlFor="tnp-1">First name or full name</label>
          <input 
            className="tnp-name" 
            type="text" 
            name="name" 
            id="tnp-1" 
            placeholder="Enter your name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="tnp-field tnp-field-email">
          <label htmlFor="tnp-2">Email</label>
          <input 
            className="tnp-email" 
            type="email" 
            name="email" 
            id="tnp-2" 
            placeholder="Enter your email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="tnp-field tnp-field-feedback">
          <label htmlFor="tnp-3">Feedback</label>
          <textarea 
            name="feedback" 
            id="tnp-3" 
            placeholder="Enter your feedback" 
            value={formData.feedback} 
            onChange={handleChange} 
            required
            style={{ height: '150px', width: '100%' }} // Fixed height and full width
          />
        </div>
        
        <div className="tnp-field tnp-field-button" style={{textAlign: 'left'}}>
          <input className="tnp-submit" type="submit" value="Submit Feedback"/>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;





