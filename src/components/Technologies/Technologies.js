import React from 'react';
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from 'react-icons/di';

import {
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiNextdotjs
} from 'react-icons/si';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <br />
    <br />
    <SectionDivider divider />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world — from front-end to back-end and databases.
    </SectionText>

    <List>
      <ListItem>
        <picture>
          <DiHtml5 size="3rem" />
          <DiCss3 size="3rem" />
          <DiJavascript1 size="3rem" />
          <DiReact size="3rem" />
          <SiRedux size="2.5rem" style={{ marginRight: '5px' }}/>
          <SiNextdotjs size="2.8rem" style={{ marginRight: '5px' }} />
          <SiTailwindcss size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML3, CSS5, JavaScript, React.js, Redux, Next.js, Tailwind CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiNodejs size="3rem" style={{ marginRight: '10px' }}/>
          <SiExpress size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js, Express.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiMongodb size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
      <br />
      <br />
    <SectionDivider colorAlt />
    <br />
    <br />
  </Section>
);

export default Technologies;
