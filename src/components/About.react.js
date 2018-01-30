import React from 'react'
import styled from 'styled-components';

const Content = styled.div`
  max-width: 800px;
  margin: 2em auto;
  padding: 1em;
`

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
`

const About = () => (
  <Content>
    <Title>I'm Ed</Title>
    <Paragraph>I like to ask questions. I like to make things. Hopefully the information from the former feeds into the latter. Keep on going. Repeat until you get there.</Paragraph>
  </Content>
)

export default About
