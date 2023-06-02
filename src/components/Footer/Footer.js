import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
`;

const FooterLink = styled.a`
  color: #888;
  text-decoration: none;

  &:hover {
    color: #333;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} Your E-commerce Site. All rights
        reserved. | <FooterLink href="/privacy">Privacy Policy</FooterLink> |{' '}
        <FooterLink href="/terms">Terms and Conditions</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
