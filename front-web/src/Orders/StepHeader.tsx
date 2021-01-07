import React from 'react';

function StepsHeader(){
   return( 
    <header className="orders-steps-container">
        <div className="orders-steps-content">
            <h1 className="steps-title">
                FOLLOW THE <br/>STEPS
            </h1>
            <ul className="steps-items">
                <li>
                    <span className="steps-number">1</span>
                    SELECT THE PRODUCTS AND LOCATION
                </li>
                <li>
                    <span className="steps-number">2</span>
                    THEN CLICK <strong>"SEND REQUEST"</strong>
                </li>
            </ul>
        </div>
    </header>
   );
}

export default StepsHeader;