import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../cartContext.js';
import Categories from './Categories/Categories.js';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const BannerContainer = styled.div`
  height: 400px;
  background-image: url('https://images.solecollector.com/complex/image/upload/jh2ibmixgw36z5yuemaw.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  margin-bottom: 10px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const ShoeCard = styled.div`
  width: 300px;
  margin: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ShoeImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ShoeTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ShoePrice = styled.p`
  font-size: 16px;
  color: #888;
  margin-bottom: 10px;
`;

const ViewAllButton = styled.button`
  background-color: transparent;
  color: #888;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  float:right;
`;
const WishlistButton = styled.button`
  background-color: transparent;
  color: #888;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  float:right;
`;

const AddtoCartBtn = styled.button`
padding:10px
`;

const Index = () => {
  const { addItemToCart, addWishlistItem } = useContext(CartContext);
  const [showAllShoes, setShowAllShoes] = useState(false);

  // Sample data for shoes
  const allShoes = [
    {
      id: 1,
      name: 'Running Shoe',
      price: 59.99,
      image:
        'https://www.tennisnuts.com/images/product/full/WMNS-NIKE-LUNARGLIDE-7-747356_005_A_PREM.jpg',
    },
    {
      id: 2,
      name: 'Sneaker',
      price: 79.99,
      image:
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1556130360-vaporfly-4-flyknit-running-shoe-v7G3FB.jpg?crop=0.915xw:0.488xh;0.0449xw,0.322xh',
    },
    {
      id: 3,
      name: 'Casual Shoe',
      price: 79.99,
      image:
        'https://n2.sdlcdn.com/imgs/g/0/i/Nike-Multi-Color-Casual-Shoes-SDL051199315-2-bc4ad.JPG',
    },
    // Add more shoes here if needed
  ];

  // Filter the shoes to be displayed based on the showAllShoes state
  const displayedShoes = showAllShoes ? allShoes : allShoes.slice(0, 2);

  return (
    <div>
      <BannerContainer>
        <h1>
          <i>Welcome to ShoeStop</i>
        </h1>
      </BannerContainer>
      <Categories />
      {!showAllShoes && allShoes.length > 2 && (
        <ViewAllButton onClick={() => setShowAllShoes(true)}>
          View All
        </ViewAllButton>
      )}
      <CardsContainer>
        {displayedShoes.map((shoe) => (
          <ShoeCard key={shoe.id}>
            <ShoeImage src={shoe.image} alt={shoe.name} />
            <ShoeTitle>{shoe.name}</ShoeTitle>
            <ShoePrice>${shoe.price}</ShoePrice>
            <AddtoCartBtn
              onClick={() => {
                addItemToCart(shoe);
              }}
            >
              <AiOutlineShoppingCart /> Add to Cart
            </AddtoCartBtn>

            <WishlistButton
              onClick={() => {
                addWishlistItem(shoe);
              }}
            >
              <AiFillHeart color="pink" size="2em" title="Add to wishlist" />
            </WishlistButton>
          </ShoeCard>
        ))}
      </CardsContainer>
    </div>
  );
};

export default Index;
