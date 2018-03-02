import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 1em;
  padding-top: 2em;
`;

const NavbarContents = styled.div`
  width: calc(100% - 20px);
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const Name = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  a {
    color: #666;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Option = styled.div`
  margin-left: 1em;
`;

const NavbarDesktop = () => (
  <Navbar>
    <NavbarContents>
      <Name>
        <Link to="/">Ed Lewis</Link>
      </Name>
      <Options>
        <Option>
          <Link to="/about">About</Link>
        </Option>
      </Options>
    </NavbarContents>
  </Navbar>
);

export default NavbarDesktop;
