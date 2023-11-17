import React from 'react';
import './App.css';


function App(key, title, image, brand, price) {
  console.log(key)
  return (
    <div className="card" key={key}>
    <img src={image} alt="iphone" />
    <div className="card-content">
      <h3>{title}</h3>
      <p>{brand}</p>
      <p>
        <b>${price}</b>
      </p>
    </div>
  </div>
    );
}

export default App;
