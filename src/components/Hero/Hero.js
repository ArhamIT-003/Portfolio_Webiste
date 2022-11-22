import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
    <SectionTitle main center>Hi There <br/> I'm Arham</SectionTitle>
    <SectionText>My job is to provide the best outcomes and solution to my clients for their work. Every queries are totally welcome in this site</SectionText>
    <Button onClick={()=> {window.location = 'https://google.com'}}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;