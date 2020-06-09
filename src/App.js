import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mpls-images">
        <img src="https://www.minneapolis.org/imager/s3_amazonaws_com/meet-minneapolis/craft/cms/Wilde-Cafe-and-Spirits-Espresso-Drink_91c7136b7dbf0638940ad0abbc980596.jpg" alt="coffee mug" />
        <img src="https://static1.squarespace.com/static/53231184e4b0490250611c21/53a0d935e4b0d840eaef8bf8/561eb856e4b0df8c21c0bc79/1496175426554/?format=1500w" alt="cherry statue" />
        <img src="https://www.guthrietheater.org/globalassets/4-support/expandcallout_guthriebuildingrh1598-38.jpg" alt="guthrie" />
      </div>
      <div>
        <h1>minneapolis weekend planner</h1>
        <h3>We hope that this site can provide inspiration and ideas for your next hangout!</h3>
      </div>
      <div class="input-container">
        <input placeholder="Username" />
        <input placeholder="Password" />
      </div>
      <div class="button-container">
      <button>LOGIN</button>
      </div>
    </div>
  );
}

export default App;
