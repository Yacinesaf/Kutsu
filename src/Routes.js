import React, { useEffect, useState } from 'react';
import ThreeDcard from './components/ThreeDcard';
import Navbar from './containers/Navbar/Navbar';
import { shoes } from './app/myData'
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {shoes.map((shoe, i) => (
          <div className='col-4 p-3'>
            <ThreeDcard key={i} shoeObj={shoe} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Routes;