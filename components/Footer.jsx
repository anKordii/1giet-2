import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container p-3 position-relative">
        <span className="footertext" style={{fontStyle: "italic"}}>
          <strong className='fw-bolder'>1GIET</strong> - offcial distributor of yakuza © 2023
        </span>
        <span className="footertext float-end fw-normal" style={{color: '#6f6f6f'}}>
          このサイトは冗談の一部です、真に受けないでください
        </span>
      </div>
    </footer>
  )
};

export default Footer;
