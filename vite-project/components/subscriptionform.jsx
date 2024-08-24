import React from 'react';

const SubscriptionForm = () => {

  return (
    <form method="post" action="">
        <input type="hidden" name="nr" value="widget"/>
        <input type="hidden" name="nlang" value=""/>
        <div class="tnp-field tnp-field-firstname">
            <label for="tnp-1">First name or full name</label>
            <input class="tnp-name" type="text" name="nn" id="tnp-1" value placeholder required/> 
        </div>
        <div class="tnp-field tnp-field-email">
            <label for="tnp-2">Email</label>
            <input class="tnp-email" type="email" name="ne" id="tnp-2" value placeholder required/>
        </div>
        <div>
            <label>
                <input type="checkbox" name="ny" required="" class="tnp-privacy"/>
                "By continuing, you accept the privacy policy"
            </label>
        </div>
        <div class="tnp-field tnp-field-button" style="text-align: left">
            <input class="tnp-submit" type="submit" value="Subscribe" style=""/>
        </div>
    </form>
  );
};

export default SubscriptionForm;

