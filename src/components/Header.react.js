import React from 'react';
import styled from 'styled-components';
import journal from '../img/journal.jpg'

const SiteHeader = styled.div`
  display: grid;
  grid-template-rows: 1fr minmax(100px, 250px) auto 1fr;
  justify-items: center;
  height: 70vh;
`

const HeaderImage = styled.img`
  grid-row: 2;
  height: 100%;
`

const Name = styled.h2`
  grid-row: 3;
  font-size: 2rem;
`

const Header = () => (
  <SiteHeader>
    <HeaderImage src={journal} alt="blank sketchbook"/>
    <Name>ed lewis</Name>
  </SiteHeader>
)

export default Header;
