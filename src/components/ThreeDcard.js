import React from 'react';
import Tilt from 'react-vanilla-tilt'
import './ThreeDcard.css'
import { motion } from 'framer-motion'


const variants = {
  initial: { opacity: 0, y: -40, transition: { duration: 0.8 } },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}


function ThreeDcard({ shoeObj, visibleCard }) {


  return (
    <motion.div variants={variants}
      initial='initial'
      animate={visibleCard ? 'animate' : 'initial'}
    >
      <Tilt className='box' style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        height: 500,
        background: 'white',
        borderRadius: 20,
        transformStyle: 'preserve-3d',
      }} options={{ max: 45, speed: 400 }}>
        <div className='name'>
          {shoeObj.name}
        </div>
        <div className="circle" style={{ background: shoeObj.color }}>
          <div style={{
            backgroundImage: `url('${shoeObj.img}')`}}
            className='product' />
        </div>
        <div className="buy ripple">Buy Now</div>
      </Tilt>
    </motion.div>
  );
}

export default ThreeDcard;