import React from 'react';
import mask from "../img/welcome.png";

export default function Welcome() {
  return (
    <div className="welcome">
          <div className="greet">
            <h1>Welcome my lords!</h1>
            <h3>no admittance <br/>except on party business</h3>
            <p>This site was made possible by The One API so here is a big shout out to Rike.</p>
          </div>
          <div className="pic">
            <img className="frodo" src={mask} alt=""/>
          </div>
    </div>
  )
}
