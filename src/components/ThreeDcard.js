import React from 'react';
import Tilt from 'react-vanilla-tilt'
import './ThreeDcard.css'
import { motion } from 'framer-motion'




function ThreeDcard({ shoeObj, visibleCard, x }) {
  const variants = {
    initial: { opacity: 0, x: x },
    animate: { opacity: 1, x: 0 , transition : {duration : 0.8}},
  }

  
  return (
    <motion.div variants={variants}
      initial='initial'
      animate={visibleCard ? 'animate' : 'initial'}
      style={{float : 'inherit'}}
    >
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
        <div className="buy ripple">Buy Now</div>
      </Tilt>
    </motion.div>
  );
}

export default ThreeDcard;