import React from 'react';
import styled from 'styled-components';

const LogoStripContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const LogoImage = styled.img`
  width: 80px;
  height: auto;
  margin: 0 10px;
`;

const ShoeLogoStrip = ({ logos }) => {
  return (
    <LogoStripContainer>
      {logos.map((logo, index) => (
        <LogoImage key={index} src={logo} alt={`Shoe Logo ${index + 1}`} />
      ))}
    </LogoStripContainer>
  );
};

export default ShoeLogoStrip;
