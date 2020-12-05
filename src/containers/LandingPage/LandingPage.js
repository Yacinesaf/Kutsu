import React, { useEffect, useState, useRef } from 'react';
import Carousel from '../../components/Carousel';
import ThreeDcard from '../../components/ThreeDcard';
import { shoes } from '../../app/myData'
import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, },
  animate: { opacity: 1, transition: { duration: 0.8 } },
}
const child = {
  initial: { opacity: 0, y: -40, transition: { duration: 0.7 } },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}



function LandingPage({ smDown }) {
  const [visibleCard, setVisibleCard] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      let currentScroll = e.target.documentElement.scrollTop
      const refDiv = document.querySelector('.productsCrads');
      let topPos = refDiv.offsetTop - e.target.documentElement.clientHeight;
      setVisibleCard(currentScroll >= topPos + 100)
      console.log(visibleCard);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div >
      <div style={{ position: 'relative' }}>
        <Carousel smDown={smDown} />
        <div onClick={() => { window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }) }} className='d-none d-md-block yeet' style={{ position: 'absolute', bottom: 25, right: '50%', cursor: 'pointer' }}>
          <svg style={{ transform: 'scale(1.80)' }} width="1rem" height="1rem" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      </div>
      <div style={{ padding: '4rem', minHeight: '100vh' }}>
        <div className='d-none d-md-flex row mx-0 justify-content-center align-items-center' style={{ padding: '100px 0px' }}>
          <div className="col-6 col-xl-5 px-0">
            <ThreeDcard shoeObj={shoes[0]} visibleCard={visibleCard} x={-40}/>
          </div>
          <div className="col-6 col-xl-4 d-flex align-items-center p-0 productsCrads" style={{ position: 'relative' }}>
            <motion.div style={{
              color: '#333',
              fontSize: '1.35rem',
              fontWeight: 600,
              zIndex: 2
            }} variants={child} initial='initial' animate={visibleCard ? 'animate' : 'initial'} className='pl-4 pl-xl-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi ullam mollitia accusamus blanditiis at animi, sed qui fugit distinctio ut a exercitationem nesciunt illo iure commodi nisi odit corrupti.
            </motion.div>
          </div>
        </div>
        <div className='d-none d-md-flex row mx-0 justify-content-center align-items-center' style={{ padding: '100px 0px' }}>
          <div className="col-6 col-xl-4 d-flex align-items-center p-0" style={{ position: 'relative' }}>
            <motion.div style={{
              color: '#333',
              fontSize: '1.35rem',
              fontWeight: 600,
              zIndex: 2
            }} variants={child} initial='initial' animate='animate' className='pr-4 pr-xl-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi ullam mollitia accusamus blanditiis at animi, sed qui fugit distinctio ut a exercitationem nesciunt illo iure commodi nisi odit corrupti.
            </motion.div>
          </div>
          <div className="col-6 col-xl-5 px-0" style={{ float: "right" }}>
            <ThreeDcard shoeObj={shoes[1]} visibleCard={visibleCard} x={40} />
          </div>
        </div>
        <div className='d-none d-md-flex row mx-0 justify-content-center align-items-center' style={{ padding: '100px 0px' }}>
          <div className="col-6 col-xl-5 px-0">
            <ThreeDcard shoeObj={shoes[2]} visibleCard={visibleCard} x={-40}/>
          </div>
          <div className="col-6 col-xl-4 d-flex align-items-center p-0" style={{ position: 'relative' }}>
            <motion.div style={{
              color: '#333',
              fontSize: '1.35rem',
              fontWeight: 600,
              zIndex: 2
            }} variants={child} initial='initial' animate='animate' className='pl-4 pl-xl-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi ullam mollitia accusamus blanditiis at animi, sed qui fugit distinctio ut a exercitationem nesciunt illo iure commodi nisi odit corrupti.
          </motion.div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default LandingPage;

