import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarMobile from './NavbarMobile.react';
import NavbarDesktop from './NavbarDesktop.react';

const Navbars = styled.div`
  .navbar_mobile {
    visibility: hidden;
    height: 0;
  }
  .navbar_desktop {
    visibility: visible;
  }
  @media (max-width: 700px) {
    .navbar_mobile {
      visibility: visible;
      height: 67px;
    }
    .navbar_desktop {
      visibility: hidden;
    }
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { drawerOpen: false };
  }

  handleToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen });

  render() {
    return (
      <Navbars>
        <div className="navbar_mobile">
          <NavbarMobile />
        </div>
        <div className="navbar_desktop">
          <NavbarDesktop />
        </div>
      </Navbars>
    );
  }
}

export default Navbar;
