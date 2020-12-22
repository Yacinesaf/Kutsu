import React, { useEffect, useState } from 'react';
import Navbar from './containers/Navbar/Navbar';
import LandingPage from './containers/LandingPage/LandingPage';
import ProductPage from './containers/ProductPage/ProductPage';
import { Route } from 'react-router-dom'

function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
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
      <Route exact path='/' render={(props) => <LandingPage {...props} smDown={smDown(window)} />} />
      <Route exact path='/:shoeName' render={(props) => <ProductPage {...props} smDown={smDown(window)} />} />

    </div>
  );
}

export default Routes;