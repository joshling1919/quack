import React from 'react';
import NavDropdown from './nav-dropdown';
import Channels from './channels';

const Nav = () => (
  <div className="left-nav">
    <NavDropdown />
    <Channels />
  </div>
);

export default Nav;
