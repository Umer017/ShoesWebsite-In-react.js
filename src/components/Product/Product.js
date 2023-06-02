import React from 'react';
import styled from 'styled-components';

const ProductCardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;

const ProductDetails = styled.div`
  flex-grow: 1;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;
`;

const AddToCartButton = styled.button`
  background-color: #f5f5f5;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const ProductCard = ({ product }) => {
  return (
    <ProductCardContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductDetails>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>${product.price}</ProductPrice>
      </ProductDetails>
      <AddToCartButton>Add to Cart</AddToCartButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
