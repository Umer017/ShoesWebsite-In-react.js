import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 20px;
`;

const ProductDetails = styled.div`
  flex-grow: 1;
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  color: #888;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ProductCategory = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ProductSubcategories = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const ProductSubcategory = styled.li`
  margin-bottom: 5px;
`;

const ProductVariants = styled.div`
  margin-bottom: 20px;
`;

const VariantTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const VariantList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const VariantItem = styled.li`
  margin-bottom: 5px;
`;

const ProductReviews = styled.div`
  margin-bottom: 20px;
`;

const ReviewTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ReviewList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const ReviewItem = styled.li`
  margin-bottom: 10px;
`;

const ProductDetailsPage = () => {
  const product = {
    name: 'Sample Product',
    description: 'This is a sample product.',
    price: 99.99,
    image: 'https://example.com/sample-image.jpg',
    category: {
      name: 'Sample Category',
      subcategories: ['Subcategory 1', 'Subcategory 2'],
    },
    brand: 'Sample Brand',
    createdAt: new Date(),
    updatedAt: new Date(),
    variants: [
      {
        size: 'Small',
        color: 'Red',
        price: 99.99,
      },
      {
        size: 'Medium',
        color: 'Blue',
        price: 109.99,
      },
    ],
    reviews: [
      {
        name: 'John',
        rating: 5,
        comments: 'Great product!',
      },
      {
        name: 'Jane',
        rating: 4,
        comments: 'Good quality.',
      },
    ],
  };

  return (
    <PageContainer>
      <ProductContainer>
        <ProductImage src={product.image} alt={product.name} />
        <ProductDetails>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>${product.price}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductCategory>
            <strong>Category:</strong> {product.category.name}
          </ProductCategory>
          <ProductSubcategories>
            <strong>Subcategories:</strong>
            {product.category.subcategories.map((subcategory) => (
              <ProductSubcategory key={subcategory}>
                {subcategory}
              </ProductSubcategory>
            ))}
          </ProductSubcategories>
        </ProductDetails>
      </ProductContainer>
      <ProductVariants>
        <VariantTitle>Variants:</VariantTitle>
        <VariantList>
          {product.variants.map((variant, index) => (
            <VariantItem key={index}>
              Size: {variant.size}, Color: {variant.color}, Price: $
              {variant.price}
            </VariantItem>
          ))}
        </VariantList>
      </ProductVariants>
      <ProductReviews>
        <ReviewTitle>Reviews:</ReviewTitle>
        <ReviewList>
          {product.reviews.map((review, index) => (
            <ReviewItem key={index}>
              <strong>{review.name}:</strong> {review.comments} (Rating:{' '}
              {review.rating})
            </ReviewItem>
          ))}
        </ReviewList>
      </ProductReviews>
    </PageContainer>
  );
};

export default ProductDetailsPage;
