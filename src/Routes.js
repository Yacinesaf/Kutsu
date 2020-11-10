import React, { useEffect, useState} from 'react';
import Navbar from './containers/Navbar/Navbar';

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
    <div style={{backgroundColor : '#f6f5f5', minHeight : '100vh'}}>
      <Navbar smDown={smDown(window)} />
    </div>
  );
}

export default Routes;