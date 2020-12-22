import React from 'react';
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer({ smDown }) {
  return (
    <div className='row justify-content-center mx-0' style={{ backgroundColor: 'black', padding: smDown ? 15 : '40px 30px 20px 30px' }}>
      <div className="col-11 col-lg-10">
        <div className='row px-0 justify-content-between mx-0'>
          <div className="col-12 col-lg-7 d-lg-flex align-items-start px-0">
            <div className='big-titles footer-text py-3 py-lg-0 px-0 pr-lg-3'>
              <div className='footer-text'>FIND A STORE</div>
              <div className='footer-text'>SIGN UP</div>
              <div className='footer-text'>CONTACT US</div>
              <div className='footer-text'>BECOME MEMBER</div>
            </div>
            <div id='get-help' className=' py-3 py-lg-0 px-0 px-lg-3'>
              <div className='big-titles footer-text'>GET HELP</div>
              <div className='footer-text'>Order Status</div>
              <div className='footer-text'>Shipping and Delivery</div>
              <div className='footer-text'>Returns</div>
              <div className='footer-text'>Payment Options</div>
            </div>
            <div id='about' className=' py-3 py-lg-0 px-0 px-lg-3'>
              <div className='big-titles footer-text'>ABOUT KUTSU</div>
              <div className='footer-text'>News</div>
              <div className='footer-text'>Carrers</div>
              <div className='footer-text'>Investors</div>
              <div className='footer-text'>Sustainability</div>
            </div>
          </div>
          <div className="col-12 col-lg-3 px-0">
            <div className="d-flex align-items-start" style={{width : 'fit-content', float : smDown ? 'inherit' : 'right'}}>
              <FacebookIcon className='mx-1 footer-text' />
              <TwitterIcon className='mx-1 footer-text' />
              <InstagramIcon className='mx-1 footer-text' />
              <YouTubeIcon className='mx-1 footer-text' />
            </div>
          </div>
        </div>
        <div
          style={{
            height: 1,
            backgroundColor: 'rgba(255,255,255,0.3)',
            width: '100%',
            marginTop: 30
          }}
        />
        <div style={{ color: 'rgba(255,255,255,0.3)', padding: '10px 0px', fontSize : '.8rem' }}>© 2020 Kutsu, Inc. All Rights Reserved</div>
      </div>
    </div>
  );
}

export default Footer;