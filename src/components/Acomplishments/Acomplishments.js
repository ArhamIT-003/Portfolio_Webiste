import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Worked Hours on Development side', },
  { number: 13, text: 'Project with Organization collaboration', }
];

const Acomplishments = () => (
  <Section id="about">
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <SectionDivider/>
    <Boxes>
      {data.map((card, index)=> (
        <Box key={index}>
        <BoxNum>{card.number}+</BoxNum>
        <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
