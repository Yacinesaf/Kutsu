import React from 'react';
import Tilt from 'react-vanilla-tilt'
import './ThreeDcard.css'

function ThreeDcard({ shoeObj }) {
  return (
    <Tilt className='box' style={{ backgroundColor: 'none', maxWidth: 300, display: 'flex', justifyContent: 'center' }} options={{ max: 25, speed: 400 }}>
      <div className='name'>
        {shoeObj.name}
      </div>
      <div className="circle" style={{ background: shoeObj.color }}>
        <div style={{
          backgroundImage: `url('${shoeObj.img}')`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
          className='product' />
      </div>
      <div className="buy">Buy Now</div>
    </Tilt>
  );
}

export default ThreeDcard;