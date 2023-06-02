import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../cartContext.js';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerContainer = styled.div`
  height: 200px;
  width: 100%;
  background-image: url('https://i.pinimg.com/originals/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const BannerTitle = styled.h1`
  color: white;
  font-style: italic;
  font-size: 24px;
  text-shadow: 0 0 3px #ff0000, 0 0 5px #0000ff;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const CategoryContainer = styled.div`
  flex-basis: 30%;
  flex-grow: 1;
  margin-bottom: 20px;
`;

const CategoryTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  color: #888;
`;

const AddToCartButton = styled.button`
  background-color: transparent;
  color: #888;
  border: none;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const AddToWishlistButton = styled.button`
  background-color: transparent;
  color: #888;
  border: none;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
`;

const ShoesForMen = () => {
  const { addItemToCart, addWishlistItem } = useContext(CartContext);
  const categories = [
    {
      title: 'Sports',
      products: [
        {
          id: 1,
          name: 'Running Shoe 1',
          price: 59.99,
          image:
            'https://th.bing.com/th/id/R.30346e2c44d54528ca420f0982e45ff6?rik=aRfD%2fXcUfc1edw&riu=http%3a%2f%2fwww.stylesglamour.com%2fwp-content%2fuploads%2f2015%2f01%2fReebok-Sports-shoes-and-running-shoes-for-men-17.jpg&ehk=6F9zG%2fIdLyNuleSBNjo8xVVIda22I%2fRAEHSDngmHrd4%3d&risl=&pid=ImgRaw&r=0',
        },
        {
          id: 2,
          name: 'Running Shoe 2',
          price: 79.99,
          image:
            'https://th.bing.com/th/id/R.3e9558c085d08ada1c535671c4983368?rik=uhA1PtgQolLWjA&riu=http%3a%2f%2fwww.stylesglamour.com%2fwp-content%2fuploads%2f2015%2f01%2fReebok-Sports-shoes-and-running-shoes-for-men-13.jpg&ehk=qSAHxdsdb9paotCrPV5TFkaY1aTL8l1fk%2bpqdkmojtQ%3d&risl=&pid=ImgRaw&r=0',
        },
        {
          id: 3,
          name: 'Running Shoe 3',
          price: 99.99,
          image:
            'https://th.bing.com/th/id/R.9d6546d5053564bcd8f4626718864dd1?rik=N2gUetSFLlM%2fNQ&riu=http%3a%2f%2fwww.stylesglamour.com%2fwp-content%2fuploads%2f2015%2f01%2fReebok-Sports-shoes-and-running-shoes-for-men-7.jpg&ehk=F7nT3L827e%2b0tpEYY61wzV%2fNRkUzhVKtkVLQqknWq7U%3d&risl=&pid=ImgRaw&r=0',
        },
      ],
    },
    {
      title: 'Casual',
      products: [
        {
          id: 4,
          name: 'Casual Shoe 1',
          price: 69.99,
          image:
            'https://cdna.lystit.com/photos/69c5-2014/12/02/puma-gray-mens-match-vulc-casual-sneakers-from-finish-line-product-1-21941843-0-955738666-normal.jpeg',
        },
        {
          id: 5,
          name: 'Casual Shoe 2',
          price: 89.99,
          image:
            'https://th.bing.com/th/id/OIP.9twbcgE4OmAXpkRRxhafAgHaHa?pid=ImgDet&rs=1',
        },
        {
          id: 6,
          name: 'Casual Shoe 3',
          price: 79.99,
          image:
            'https://media.gq.com/photos/577d467f85a596472d19dd4b/master/w_1600%2Cc_limit/easy-upgrades-puma.jpg',
        },
      ],
    },
    {
      title: 'Loafers',
      products: [
        {
          id: 7,
          name: 'Loafer 1',
          price: 79.99,
          image:
            'https://www.colehaan.com/dw/image/v2/AALO_PRD/on/demandware.static/-/Sites-itemmaster_colehaan/default/dw7b225565/images/large/C27939_E.jpg?sw=1020',
        },
        {
          id: 8,
          name: 'Loafer 2',
          price: 89.99,
          image:
            'https://th.bing.com/th/id/OIP.cHh9AE_gWgxfWPHdeNxJqgHaIV?pid=ImgDet&w=1020&h=1148&rs=1',
        },
        {
          id: 9,
          name: 'Loafer 3',
          price: 99.99,
          image:
            'https://cdnb.lystit.com/photos/885d-2014/08/05/thom-browne-black-pebbled-leather-penny-loafers-product-1-22244872-4-967094724-normal.jpeg',
        },
      ],
    },
  ];

  return (
    <MainContainer>
      <BannerContainer>
        <BannerTitle>Shoes for Men</BannerTitle>
      </BannerContainer>
      <CardsContainer>
        {categories.map((category) => (
          <CategoryContainer key={category.title}>
            <CategoryTitle>{category.title}</CategoryTitle>
            <div style={{ display: 'flex' }}>
              {category.products.map((product) => (
                <ProductCard key={product.id}>
                  <ProductImage src={product.image} alt={product.name} />
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductPrice>${product.price}</ProductPrice>
                  <AddToCartButton onClick={() => addItemToCart(product)}>
                    <Icon>
                      <AiOutlineShoppingCart />
                    </Icon>
                    Add to Cart
                  </AddToCartButton>
                  <AddToWishlistButton onClick={() => addWishlistItem(product)}>
                    <Icon>
                      <AiFillHeart color="pink" size="1.2em" />
                    </Icon>
                    Add to Wishlist
                  </AddToWishlistButton>
                </ProductCard>
              ))}
            </div>
          </CategoryContainer>
        ))}
      </CardsContainer>
    </MainContainer>
  );
};

export default ShoesForMen;
