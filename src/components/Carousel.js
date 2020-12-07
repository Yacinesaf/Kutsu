import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import picture1 from '../assets/photo-1582588678413-dbf45f4823e9.jpg'
import picture2 from '../assets/photo-1542291026-7eec264c27ff.jpg'
import picture3 from '../assets/photo-1491553895911-0055eca6402d.jpg'

const variants = {
  initial: { opacity: 0, },
  animate: { opacity: 1, },
  exit: { opacity: 0, },
}


function Carousel() {
  return (
    <AnimatePresence >
      <motion.div variants={variants} transition={{ duration: 0.8 }} initial='initial' animate='animate' exit='exit' className='col-12 px-0'>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className='d-block d-md-none' style={{
            boxShadow: '0 3px 4px rgba(0,0,0,0.06), 0 3px 4px rgba(0,0,0,0.13)',
            color: 'white',
            fontSize: '1.15rem',
            fontWeight: 500,
            backgroundColor: '#E84545',
            padding: '10px 25px',
            borderRadius: 25,
            position: 'absolute',
            right: 'calc(50% - (141.52px /2))',
            bottom: 40,
            zIndex : 1,
          }}>
            Shop Now
      </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-block w-100" style={{
                backgroundImage: `url(${picture1})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: 'calc(100vh - 64px)',
              }} />
              <div className="carousel-caption py-md-5" style={{paddingBottom : '5rem'}}>
                <h5 style={{ fontWeight: 600, textShadow: '2px 2px 2px rgba(23,10,6,0.3)' }}>Nike ProRun</h5>
                <div style={{ letterSpacing: 1, textShadow: '2px 2px 2px rgba(23,10,6,0.3)' }}>Feel the comfort</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-block w-100" style={{
                backgroundImage: `url(${picture2})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: 'calc(100vh - 64px)',
              }} />
              <div className="carousel-caption py-md-5" style={{paddingBottom : '5rem'}}>
                <h5 style={{ fontWeight: 600, textShadow: '2px 2px 2px rgba(23,10,6,0.3)' }}>Nike FREE</h5>
                <div style={{ letterSpacing: 1, textShadow: '2px 2px 2px rgba(23,10,6,0.3)' }}>Feel the power</div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-block w-100" style={{
                backgroundImage: `url(${picture3})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: 'calc(100vh - 64px)',
              }} />
              <div className="carousel-caption py-md-5" style={{paddingBottom : '5rem'}} >
                <h5 style={{ fontWeight: 600, textShadow: '2px 2px 2px rgba(23,10,6,0.3)' }}>Nike AirRun</h5>
                <div style={{ letterSpacing: 1, textShadow: '2px 2px 2px rgba(23,10,6,0.3)' }}>Feel the lightness</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Carousel;