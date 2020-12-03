import React, { useState } from 'react';
import './style.css'
import { motion } from 'framer-motion'

const variants = {
  open: { height: '100vh', backgroundColor: 'rgba(255, 154, 0, 1)', },
  closed: { height: 64, backgroundColor: 'rgba(255, 255, 255, 1)', transition: { damping: 200, delay: 0.4 }, overflow: 'hidden' }
}
const sectionVariants = {
  open: { x: 0, opacity: 1, y: 100 },
  closed: { x: -20, opacity: 0, y: 100 },
}
const title = {
  open: { color: 'white' },
  closed: { color: '#333', transition: { delay: 0.4 } },
}
const sectionsVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 2,
      delayChildren: 0.2,
      when: 'afterChildren'
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    }
  }
}

const navSections = ['Home', 'About', 'Contact', 'Sign up/Log in']

function Navbar({ smDown }) {
  const [cartCounter, setCartCounter] = useState(0)
  const [menuIsClicked, setMenuIsClicked] = useState(false)
  const styles = {
    navText: {
      color: '#333',
      fontSize: smDown ? 18 : 16,
      padding: '0px 10px'

    },
    navTtitle: {
      color: '#333',
      fontWeight: 900,
      fontSize: 32,
    },
    navbar: {
      padding: '8px 40px',
      backgroundColor: 'white',
      boxShadow: '0 3px 4px rgba(0,0,0,0.06), 0 3px 4px rgba(0,0,0,0.13)',
    },
    cartCounter: {
      backgroundColor: '#333',
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
    },
    cartCounterMobile: {
      backgroundColor: menuIsClicked ? 'white' : '#333',
      color: menuIsClicked ? '#333' : 'white',
      padding: 5,
      borderRadius: '100%',
      height: 20,
      width: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 10,
      position: 'absolute',
      right: 12,
      top: -5
    },
  }


  return (
    <motion.div
      variants={variants}
      initial='closed'
      animate={menuIsClicked ? 'open' : 'closed'}
      transition={{ damping: 400, duration: 0.4 }}
      className="row mx-0 justify-content-center"
      style={styles.navbar}>
      <div className="col-md-11 px-0" >
        <div className="row justify-content-between align-items-center mx-0">
          <motion.div
            variants={title}
            style={styles.navTtitle}>
            Kutsu
          </motion.div>
          {smDown ?
            <div style={{ display: 'flex', alignItems: 'center', }}>
              <div style={{ paddingRight: 20, position: 'relative' }}>
                <div style={styles.cartCounterMobile}>{cartCounter}</div>
                <svg width="1.75em" height="1.75em" viewBox="0 0 16 16" className="bi bi-cart2" fill={menuIsClicked ? 'white' : "#333"} xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </div>
              <button
                style={{ paddingTop: 5 }}
                onClick={() => { setMenuIsClicked(!menuIsClicked) }}
                className={menuIsClicked ? "hamburger hamburger--spin is-active menubtn" : "hamburger hamburger--spin menubtn"}
                type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>


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
                <svg width="1.75em" height="1.75em" viewBox="0 0 16 16" className="bi bi-cart2" fill="#333" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </div>
            </div>
          }
        </div>
        <motion.div initial='closed'
          animate={menuIsClicked ? 'open' : 'closed'} variants={sectionsVariants}>
          {smDown && (
            navSections.map(section => (
              <motion.div
                onClick={() => {
                  setMenuIsClicked(false)
                }}
                className='py-3'
                key={section}
                variants={sectionVariants}
                style={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem', fontWeight: 600, textAlign: 'center' }}>
                {section}
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Navbar;