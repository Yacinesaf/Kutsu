import React, { useState } from 'react';
import './style.css'

function Navbar({ smDown }) {
  const styles = {
    navText: {
      color: 'black',
      fontSize: smDown ? 18 : 16,
      padding: '0px 10px'

    },
    navTtitle: {
      color: 'black',
      fontWeight: 900,
      fontSize: 32,
    },
    navbar: {
      padding: '8px 40px',
      backgroundColor: 'white',
      boxShadow: '0 3px 4px rgba(0,0,0,0.06), 0 3px 4px rgba(0,0,0,0.13)',
    },
    cartCounter: {
      backgroundColor: 'black',
      color: 'white',
      padding: 5,
      borderRadius: '100%',
      height: 20,
      width: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 10,
      position: 'absolute',
      right: -8,
      top: 0
    }
  }
  const [cartCounter, setCartCounter] = useState(0)
  const [menuIsClicked, setMenuIsClicked] = useState(false)

  return (
    <div>
      <div className="row mx-0 justify-content-center" style={styles.navbar}>
        <div className="col-md-11 px-0" >
          <div className="row justify-content-between align-items-center mx-0">
            <div style={styles.navTtitle}>
              Kutsu
          </div>
            {smDown ?
              <button
                style={{ paddingTop: 5 }}
                onClick={() => { setMenuIsClicked(!menuIsClicked) }}
                className={menuIsClicked ? "hamburger hamburger--spin is-active menubtn" : "hamburger hamburger--spin menubtn"}
                type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
              :
              <div className='d-flex align-items-center'>
                <div style={styles.navText}>
                  About
            </div>
                <div style={styles.navText}>
                  Home
            </div>
                <div style={styles.navText}>
                  Contact
            </div>
                <div style={styles.navText}>
                  Login/Sign up
            </div>
                <div style={{ paddingLeft: 20, paddingTop: 5, position: 'relative' }}>
                  <div style={styles.cartCounter}>{cartCounter}</div>
                  <svg width="1.75em" height="1.75em" viewBox="0 0 16 16" className="bi bi-cart2" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      {smDown ?
        <div className={`d-flex flex-column align-items-center w-100 py-4 ${menuIsClicked ? 'menuDropped' : 'menu'}`}>
          <div className='py-1' style={styles.navText}>
            About
        </div>
          <div className='py-1' style={styles.navText}>
            Home
        </div>
          <div className='py-1' style={styles.navText}>
            Contact
        </div>
          <div className='py-1' style={styles.navText}>
            Login/Sign up
        </div>
        </div>
        : null}
    </div>
  );
}

export default Navbar;