import React, { useEffect, useState, useRef } from 'react';
import Carousel from '../../components/Carousel';
import ThreeDcard from '../../components/ThreeDcard';
import Footer from '../../components/Footer';
import { shoes } from '../../app/myData'


function LandingPage({ smDown }) {
  const [visibleCard, setVisibleCard] = useState(false)

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    const onScroll = e => {
      let currentScroll = e.target.documentElement.scrollTop
      const refDiv = document.querySelector('.productsCrads');
      if (refDiv) {
        let topPos = refDiv.offsetTop - e.target.documentElement.clientHeight;
        setVisibleCard(currentScroll >= topPos + 100)
      }
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
      {!smDown && (
        <div style={{ padding: '4rem', minHeight: '100vh' }}>
          <div style={{ color: '#333', fontSize: '3rem', fontWeight: 800, textAlign: 'center' }}>Trending Products</div>
          <div className='row mx-0 justify-content-center align-items-center productsCrads' style={{ padding: '60px 0px' }}>
            {shoes.map((shoe, i) => (
              <div key={i} className="col-6 col-xl-3 p-4">
                <ThreeDcard shoeObj={shoe} visibleCard={visibleCard} />
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer smDown={smDown} />
    </div >
  );
}

export default LandingPage;

