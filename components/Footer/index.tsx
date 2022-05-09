import React from 'react'
const Footer = () => {
  return (
      <>
         <div className="container mt-4 mb-4 " >
          <div className="col-md-12 footer-brand">
              <div className="row">
                  <div className="col-md-2 col-12">
                    <a className="navbar-brand" href="\">
                      <img id="footerlogo" className="footer-img" src="images/headereng.svg" alt="akasaair" />
                    </a>
                  </div>
                  <div className="col-md-10 col-11 align-self-center">
                      <p style={{float:"right",margin:"0"}} className="copyright-text">&#169; Copyright 2022 Akasa Air. All rights reserved</p>
                  </div>
              </div>
          </div>

      </div>


</>


  );
};

export default Footer;