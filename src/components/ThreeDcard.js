import React from 'react';
import Tilt from 'react-vanilla-tilt'
import './ThreeDcard.css'

function ThreeDcard({ shoeObj }) {
  return (
    <div>
      <Tilt options={{ max: 25, speed: 400 }}>
        <div style={{ width: 400, height: 600, backgroundColor: 'black' }}></div>
      </Tilt>
    </div>

  );
}

// VanillaTilt.init(document.querySelectorAll(".box"), {
//   max: 25,
//   speed: 400
// })

export default ThreeDcard;