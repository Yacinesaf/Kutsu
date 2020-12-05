import React, { useRef } from 'react';
import Carousel from '../../components/Carousel';
import ThreeDcard from '../../components/ThreeDcard';
import { shoes } from '../../app/myData'
import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, },
  animate: { opacity: 1, transition: { duration: 0.8 } },
}
const child = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}


function LandingPage({ smDown }) {
  const ref = useRef('secondPage')
  return (
    <div>
      {/*      <Carousel smDown={smDown} />
      <div onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} className='d-none d-md-block' style={{ position: 'fixed', bottom: 25, right: '50%', cursor: 'pointer' }}>
        <svg style={{ transform: 'scale(1.80)' }} width="1rem" height="1rem" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
        </svg>
  </div>*/}
      <div ref={ref} style={{ padding: '4rem', minHeight: '100vh' }}>
        <div className='d-none d-md-flex row mx-0 justify-content-center align-items-center' style={{padding : '100px 0px'}}>
          <div className="col-6 col-md-5 px-0">
            <ThreeDcard shoeObj={shoes[0]} />
          </div>
          <div className=" col-6 col-md-4 d-flex align-items-center p-0" style={{ position: 'relative' }}>
            <motion.div style={{
              color: '#333',
              fontSize: '1.35rem',
              fontWeight: 600,
              zIndex: 2
            }} variants={child} initial='initial' animate='animate'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi ullam mollitia accusamus blanditiis at animi, sed qui fugit distinctio ut a exercitationem nesciunt illo iure commodi nisi odit corrupti.
            </motion.div>
          </div>
        </div>
        <div className='d-none d-md-flex row mx-0 justify-content-center align-items-center' style={{padding : '100px 0px'}}>
          <div className="col-4 d-flex align-items-center p-0" style={{ position: 'relative' }}>
            <motion.div style={{
              color: '#333',
              fontSize: '1.35rem',
              fontWeight: 600,
              zIndex: 2
            }} variants={child} initial='initial' animate='animate'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi ullam mollitia accusamus blanditiis at animi, sed qui fugit distinctio ut a exercitationem nesciunt illo iure commodi nisi odit corrupti.
            </motion.div>
          </div>
          <div className="col-5 px-0" style={{float : "right"}}>
            <ThreeDcard shoeObj={shoes[1]} />
          </div>
        </div>
        <div className='d-none d-md-flex row mx-0 justify-content-center align-items-center' style={{padding : '100px 0px'}}>
          <div className="col-5 px-0">
            <ThreeDcard shoeObj={shoes[2]} />
          </div>
          <div className="col-4 d-flex align-items-center p-0" style={{ position: 'relative' }}>
            <motion.div style={{
              color: '#333',
              fontSize: '1.35rem',
              fontWeight: 600,
              zIndex: 2
            }} variants={child} initial='initial' animate='animate'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi ullam mollitia accusamus blanditiis at animi, sed qui fugit distinctio ut a exercitationem nesciunt illo iure commodi nisi odit corrupti.
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

