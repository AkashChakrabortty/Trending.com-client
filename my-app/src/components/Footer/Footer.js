import React from 'react';
import Divider from '../Divider/Divider';

const Footer = () => {
    return (
      <div>
        <Divider></Divider>
        <footer className="footer footer-center pb-6 text-info default-bg text-xl">
          <div>
            <p>Copyright © 2022 - All right reserved by Trending.com Ltd</p>
          </div>
        </footer>
      </div>
    );
};

export default Footer;