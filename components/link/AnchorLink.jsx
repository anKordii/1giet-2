import React from 'react';

import NavBarItem from './NavBarItem';

const AnchorLink = ({ children, href, className, style, tabIndex }) => {
  return (
    <a href={href} className={className} style={style}>
      <NavBarItem href={href} tabIndex={tabIndex}>
        {children}
      </NavBarItem>
    </a>
  );
};

export default AnchorLink;
