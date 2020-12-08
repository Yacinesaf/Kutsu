import React, { useState } from 'react';
import Tilt from 'react-vanilla-tilt'
import './ThreeDcard.css'
import { motion } from 'framer-motion'


const variants = {
  initial: { opacity: 0, y: 40, transition: { duration: 0.8 } },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}
const priceAndSizeVariants = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3 } },
}


function ThreeDcard({ shoeObj, visibleCard }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={()=> {setIsHovered(true)}}
      // onHoverEnd={() => { setIsHovered(false) }}
      // whileHover={() => { setIsHovered(true) }} variants={variants}
      initial='initial'
      animate={visibleCard ? 'animate' : 'initial'}
    >
      <Tilt className='box' style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        minWidth: 300,
        height: 520,
        background: 'white',
        borderRadius: 20,
        transformStyle: 'preserve-3d',
      }} options={{ max: 45, speed: 400 }}>
        <div className='name'>
          {shoeObj.name}
        </div>
        <div className="circle" style={{ background: shoeObj.color }}>
          <div style={{
            backgroundImage: `url('${shoeObj.img}')`
          }}
            className='product' />
        </div>
        <div style={{
          textAlign: 'center',
          position: 'absolute',
          bottom: 85,
          fontWeight: 600,
          fontSize: 20,
        }}>{'$' + shoeObj.price}</div>
        <div className="buy ripple" style={{ bottom: isHovered ? 40 : 25 }}>Buy Now</div>
      </Tilt>
    </motion.div>
  );
}


// <motion.div
// variants={priceAndSizeVariants}
// initial='initial'
// animate={isHovered ? 'animate' : 'initial'}
// style={{
//   textAlign : 'center',
//   position: 'absolute',
//   bottom: 85,
//   fontWeight: 600,
//   fontSize: 20
// }}>
// <div>{'$' + shoeObj.price}</div>
// </motion.div>

export default ThreeDcard;