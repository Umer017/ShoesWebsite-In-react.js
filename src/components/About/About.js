import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 40px;
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
`;

const AboutContent = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #555;
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: 1.2rm;
  border-radius: 5px;
  margin-top: 40px;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Us</AboutTitle>
      <AboutContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        efficitur magna ut enim pulvinar, vitae convallis quam malesuada.
        Integer quis luctus risus. Nullam ullamcorper libero non lectus
        faucibus, vitae maximus risus posuere. Phasellus commodo ex id dapibus
        semper. Quisque pharetra auctor tempor. Morbi lacinia eleifend elit
        vitae volutpat. Proin auctor, lacus id facilisis facilisis, ligula lorem
        finibus ex, a eleifend sem elit sed sem.
      </AboutContent>
      <AboutImage
        src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?cs=srgb&dl=footwear-leather-shoes-267320.jpg&fm=jpg"
        alt="About Image"
      />
    </AboutContainer>
  );
};

export default About;
