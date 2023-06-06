import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CardContainer = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: center;
  // padding: 20px;
`;

const Card = styled.div`
  width: 100%;
  // margin: 20px;
  // margin-right: 30px; 
  height:100px
  /* Add margin-right for spacing between cards */
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

const TodayDealTag = styled.span`
  background-color: #ff6b6b;
  color: #fff;
  font-size: 14px;
  padding: 5px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    padding: 5px 5px;
  }
`;

const ProductName = styled.p`
  font-size: 10px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #888;
  margin-bottom: 10px;
`;

const DiscountPercentage = styled.span`
  background-color: #2ecc71;
  color: #fff;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const ProductCarousel = ({ products }) => {
  return (
    <Carousel
      showStatus={false}
      showArrows
      renderThumbs={() => null}
      renderIndicator={() => null}
      swipeable
      emulateTouch
      centerMode
      centerSlidePercentage={33.33} // Show 3 cards in desktop view
      infiniteLoop
      width={'100%'}
      // responsive={{
      //   0: {
      //     centerSlidePercentage: 100 / 3, // Show 3 cards in mobile view
      //   },
      //   768: {
      //     centerSlidePercentage: 100 / 6, // Show 6 cards in desktop view
      //   },
      // }}
    >
      {/* <CardContainer> */}
      {products.map((product) => (
        <Card key={product.id}>
          <TodayDealTag>Today's Deal</TodayDealTag>
          <ProductImage src={product.image} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductPrice>${product.price}</ProductPrice>
          <DiscountPercentage>{product.discount}% off</DiscountPercentage>
        </Card>
      ))}
      {/* </CardContainer> */}
    </Carousel>
  );
};

const StyledProductCarousel = styled(ProductCarousel)`
  .carousel-root {
    width: 100%;
  }

  .carousel .slider-wrapper {
    overflow: hidden;
    margin-bottom: 20px;
  }
`;

const ProductCarouselContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const TitleOffer = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const ProductCarouselWrapper = ({ products }) => {
  return (
    <ProductCarouselContainer>
      <StyledProductCarousel products={products} />
    </ProductCarouselContainer>
  );
};

export default ProductCarouselWrapper;
