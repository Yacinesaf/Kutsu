import React, { useEffect, useState } from 'react';
import ThreeDcard from './components/ThreeDcard';
import Navbar from './containers/Navbar/Navbar';
import LandingPage from './containers/LandingPage/LandingPage';
function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    window.scrollTo(0, 0)
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}



function Routes(props) {
  const window = useWindowSize();
  const smDown = (width) => {
    if (width <= 768) {
      return true
    } else {
      return false
    }
  }
  return (
    <div style={{ backgroundColor: '#f6f5f5', minHeight: '100vh' }}>
      <Navbar smDown={smDown(window)} />
      <LandingPage smDown={smDown(window)} />
    </div>
  );
}

export default Routes;