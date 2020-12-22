import React, { useState } from 'react';
import Tilt from 'react-vanilla-tilt'
import './ThreeDcard.css'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const variants = {
  initial: { opacity: 0, y: 40, transition: { duration: 0.8 } },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}


function ThreeDcard({ shoeObj, visibleCard }) {
  const [isHovered, setIsHovered] = useState(false)
  const history = useHistory()
  const selectedData = useSelector(state => {
    return state.globalData.selectedShoe
  });

  return (
    <motion.div
      onHoverStart={() => { setIsHovered(true) }}
      variants={variants}
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
        <div onClick={() => { history.push(`/${shoeObj.name}`) }} className="buy ripple" style={{ bottom: isHovered ? 40 : 25 }}>Shop Now</div>
        <div
          style={{
            textAlign: 'center',
            position: 'absolute',
            bottom: 85,
            fontSize: 20,
            color: 'black'
          }}>
          <div>{'$' + shoeObj.price}</div>
        </div>
      </Tilt>
    </motion.div>
  );
}




export default ThreeDcard;