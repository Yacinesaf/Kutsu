import React from 'react';
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer({ smDown }) {
  return (
    <div className='row justify-content-center mx-0' style={{ backgroundColor: 'black', padding: smDown ? 15 : '40px 30px 80px 30px' }}>
      <div className="col-12 col-lg-10">
        <div className='row px-0 justify-content-between'>
          <div className="col-12 col-lg-7 d-lg-flex align-items-start">
            <div className='big-titles py-3 py-lg-0 px-0 px-lg-3' style={{ padding: '0px 20px' }}>
              <div>FIND A STORE</div>
              <div>SIGN UP</div>
              <div>CONTACT US</div>
              <div>BECOME MEMBER</div>
            </div>
            <div id='get-help' className=' py-3 py-lg-0 px-0 px-lg-3' style={{ padding: '0px 20px' }}>
              <div className='big-titles'>GET HELP</div>
              <div>Order Status</div>
              <div>Shipping and Delivery</div>
              <div>Returns</div>
              <div>Payment Options</div>
            </div>
            <div id='about' className=' py-3 py-lg-0 px-0 px-lg-3' style={{ padding: '0px 20px' }}>
              <div className='big-titles'>ABOUT KUTSU</div>
              <div>News</div>
              <div>Carrers</div>
              <div>Investors</div>
              <div>Sustainability</div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="d-flex align-items-start">
              <FacebookIcon className='mx-1' />
              <TwitterIcon className='mx-1' />
              <InstagramIcon className='mx-1' />
              <YouTubeIcon className='mx-1' />
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