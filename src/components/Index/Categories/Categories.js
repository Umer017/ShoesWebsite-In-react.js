import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  padding: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const BannerImage = styled.div`
  flex: 1;
  padding:10px;
  position: relative;
  overflow: hidden;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.3s ease;
  opacity: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const BannerImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const MensBanner = styled(BannerImage)`
  background-color: #f5f5f5;
`;

const WomensBanner = styled(BannerImage)`
  background-color: #f5f5f5;
`;

const BannerText = styled.h2`
position: absolute;
top: 50%;
left: 50vh;
transform: translate(-50%, -50%);
color: #fff;
font-size: 24px;
font-weight: bold;
text-align: center;
`;

const Categories = () => {
  const Navigate = useNavigate();
  return (
    <BannerContainer>
      <MensBanner>
        <BannerText>Shoes for Men</BannerText>
        <BannerImg
          src="https://www.dickssportinggoods.com/protips/sports-and-activities/running/best-running-shoes-for-men/_jcr_content/root/container/container_2/image.coreimg.jpeg/1677876095575/pt-article-mensrunningshoes.jpeg"
          alt="Men's Banner"
        />
        <ImageOverlay onClick={() => Navigate('/shoeformen')} />
      </MensBanner>
      <WomensBanner>
        <BannerText>Shoes for Women</BannerText>
        <BannerImg
          src="https://cdn.outsideonline.com/wp-content/uploads/2022/08/UA-Hero_h.jpg?crop=16:9&width=960&enable=upscale&quality=100"
          alt="Women's Banner"
        />
        <ImageOverlay />
      </WomensBanner>
    </BannerContainer>
  );
};

export default Categories;
