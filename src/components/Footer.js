import React from 'react';
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer(props) {
  return (
    <div className='row justify-content-center' style={{ backgroundColor: '#333', padding: 30 }}>
      <div className="col-9">
        <div className='row px-0 justify-content-between'>
          <div className="col-7 d-flex align-items-start">
            <div className='big-titles' style={{padding : '0px 10px'}}>
              <div>FIND A STORE</div>
              <div>SIGN UP</div>
              <div>CONTACT US</div>
              <div>BECOME MEMBER</div>
            </div>
            <div id='get-help' style={{padding : '0px 10px'}}>
              <div className='big-titles'>GET HELP</div>
              <div>Order Status</div>
              <div>Shipping and Delivery</div>
              <div>Returns</div>
              <div>Payment Options</div>
            </div>
            <div id='about' style={{padding : '0px 10px'}}>
              <div className='big-titles'>ABOUT KUTSU</div>
              <div>News</div>
              <div>Carrers</div>
              <div>Investors</div>
              <div>Sustainability</div>
            </div>
          </div>
          <div className="col-3">
            <div className="row px-0">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;