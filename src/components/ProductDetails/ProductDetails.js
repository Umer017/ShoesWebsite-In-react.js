import React from 'react';
import styled from 'styled-components';

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductPhoto = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductName = styled.h2`
  font-size: 24px;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  color: #888;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const SizeOptions = styled.div`
  display: flex;
  gap: 10px;
`;

const SizeOption = styled.button`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ selected }) => (selected ? '#333' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
`;

const ReviewsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const WriteReviewButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StarIcon = styled.span`
  color: #fdd835;
`;

const SimilarProductsSection = styled.div`
  display: flex;
  gap: 20px;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ProductCardPhoto = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductCardName = styled.p`
  font-size: 16px;
  color: #333;
`;

const ProductDetails = () => {
  return (
    <ProductDetailsContainer>
      <ProductPhoto src="product-photo.jpg" alt="Product" />

      <ProductInfo>
        <ProductName>Product Name</ProductName>
        <ProductPrice>$99.99</ProductPrice>
        <ProductDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          ligula id arcu consequat fringilla.
        </ProductDescription>
        <SizeOptions>
          <SizeOption selected>Size 8</SizeOption>
          <SizeOption>Size 9</SizeOption>
          <SizeOption>Size 10</SizeOption>
        </SizeOptions>
      </ProductInfo>

      <ReviewsSection>
        <WriteReviewButton>Write a Review</WriteReviewButton>

        <Review>
          <ReviewRating>
            <StarIcon>★</StarIcon>
            <StarIcon>★</StarIcon>
            <StarIcon>★</StarIcon>
            <StarIcon>★</StarIcon>
            <StarIcon>★</StarIcon>
          </ReviewRating>
          <p>Great product! Highly recommend.</p>
        </Review>

        <Review>
          <ReviewRating>
            <StarIcon>★</StarIcon>
            <StarIcon>★</StarIcon>
            <StarIcon>★</StarIcon>
            <StarIcon>★</StarIcon>
            <StarIcon>☆</StarIcon>
          </ReviewRating>
          <p>Good product. Could be better.</p>
        </Review>
      </ReviewsSection>

      <SimilarProductsSection>
        <ProductCard>
          <ProductCardPhoto
            src="similar-product1.jpg"
            alt="Similar Product 1"
          />
          <ProductCardName>Similar Product 1</ProductCardName>
        </ProductCard>
        <ProductCard>
          <ProductCardPhoto
            src="similar-product2.jpg"
            alt="Similar Product 2"
          />
          <ProductCardName>Similar Product 2</ProductCardName>
        </ProductCard>
        <ProductCard>
          <ProductCardPhoto
            src="similar-product3.jpg"
            alt="Similar Product 3"
          />
          <ProductCardName>Similar Product 3</ProductCardName>
        </ProductCard>
      </SimilarProductsSection>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
