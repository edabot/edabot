import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  max-width: 800px;
  margin: 2em auto;
  padding: 1em;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

const Subhead = styled.h3`
  font-size: 1.2rem;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
`;

const HorizList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ListItem = styled.div`
  &:not(:last-child) {
    margin-right: 0.6em;
    ::after {
      content: '•';
      margin-left: 0.6em;
    }
  }
`;

const About = () => (
  <Content>
    <Title>I'm Ed</Title>
    <Paragraph>
      I like to ask questions. I like to make things. Hopefully the information
      from the former feeds into the latter. Keep on going. Repeat until you get
      there.
    </Paragraph>
    <Subhead>Other places to find me</Subhead>
    <HorizList>
      <ListItem>
        <a href="https://www.linkedin.com/in/edlewis">LinkedIn</a>
      </ListItem>
      <ListItem>
        <a href="https://www.github.com/edabot">Github</a>
      </ListItem>
      <ListItem>
        <a href="https://www.instructables.com/member/fungus%20amungus/">
          Instructables
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.twitter.com/edabot">Twitter</a>
      </ListItem>
    </HorizList>
  </Content>
);

export default About;
