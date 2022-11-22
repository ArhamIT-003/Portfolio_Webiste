import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+92-3160265775'>+92-3160265775</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:muhammadarham59@gmail.com'>muhammadarham59@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan>Innovating a single project at a time</Slogan>
        </CompanyContainer>
      </SocialContainer>
      <SocialContainer>
      <SocialIcons href='https://github.com'>
          <AiFillGithub size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://instagram.com'>
          <AiFillInstagram size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://linkedIn.com'>
          <AiFillLinkedin size='3rem'/>
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
