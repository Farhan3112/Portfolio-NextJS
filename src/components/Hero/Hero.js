import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Farhan
        </SectionTitle>
        <SectionText>
        I'm a final-year B.Tech IT student passionate about web development and problem-solving, currently building projects with the MERN stack.
        </SectionText>
        <a href="https://drive.google.com/file/d/1K7Kz5ibpbwuwhLZPrYmoHe66l3dP_sOe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <Button>View Resume</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
