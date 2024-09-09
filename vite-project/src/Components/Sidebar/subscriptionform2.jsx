// import React from 'react';
import './subscriptionform.css';  // Make sure the path is correct

const SubscriptionForm = () => {

  return (
    <form method="post" action="">
        <input type="hidden" name="nr" value="widget"/>
        <input type="hidden" name="nlang" value=""/>
        <div className="tnp-field tnp-field-firstname">
            <label htmlFor="tnp-1">First name or full name</label>
            <input className="tnp-name" type="text" name="nn" id="tnp-1" placeholder required/> 
        </div>
        <div className="tnp-field tnp-field-email">
            <label htmlFor="tnp-2">Email</label>
            <input className="tnp-email" type="email" name="ne" id="tnp-2" placeholder required/>
        </div>
        <div>
            <label>
                <input type="checkbox" name="ny" required className="tnp-privacy"/>
                By continuing, you accept the privacy policy
            </label>
        </div>
        <div className="tnp-field tnp-field-button" style={{textAlign: 'left'}}>
            <input className="tnp-submit" type="submit" value="Subscribe"/>
        </div>
    </form>
  );
};

export default SubscriptionForm;


