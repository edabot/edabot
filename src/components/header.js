import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header class="header">
        <div class='header__text-box'>
          <h1 class='heading-primary'>
            <span class='heading-primary-main'>ed lewis</span>
            <span class='heading-primary-sub'>making things</span>
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
