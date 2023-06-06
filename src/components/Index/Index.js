import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../cartContext.js';
import Categories from './Categories/Categories.js';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import Carasoul from './Carasoul/Carasoul.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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

const ShoeCard = styled.div`
  width: 300px;
  margin: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
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

const AddtoCartBtn = styled.button`
  padding: 10px;
`;

const WishlistButton = styled.button`
  background-color: transparent;
  color: #888;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  float: right;
`;

const Index = () => {
  const { addItemToCart, addWishlistItem } = useContext(CartContext);

  // Sample data for shoes
  const allShoes = [
    {
      id: 1,
      name: 'Running Shoe',
      price: 59.99,
      image:
        'https://i.pinimg.com/originals/1e/5f/c5/1e5fc576be0820329d5198f2b037543d.jpg',
      discount: 20,
    },
    {
      id: 2,
      name: 'Sneaker',
      price: 79.99,
      image:
        'https://th.bing.com/th/id/OIP.Km7uKyVMh9MlkCbZ-62ovwHaHa?pid=ImgDet&rs=1',
      discount: 20,
    },
    {
      id: 3,
      name: 'Casual Shoe',
      price: 79.99,
      image:
        'https://n2.sdlcdn.com/imgs/g/0/i/Nike-Multi-Color-Casual-Shoes-SDL051199315-2-bc4ad.JPG',
      discount: 20,
    },
    {
      id: 4,
      name: 'Nike x1 Shoe',
      price: 79.99,
      image:
        'https://i.pinimg.com/originals/a0/69/5f/a0695fcf3e2df6cbd6e10d20661eabb1.jpg',
      discount: 20,
    },
    // Add more shoes here if needed
  ];

  const offers = [
    {
      id: 1,
      name: 'best from reebok',
      image:
        'https://th.bing.com/th/id/OIP.YguOkIP2xIjpoReX_q0R4gHaHa?pid=ImgDet&rs=1',
      price: 99.99,
      discount: 20,
    },
    {
      id: 2,
      name: 'best from nike',
      image:
        'https://th.bing.com/th/id/OIP.W44rbZFUPSl8ne3ka6ZghQHaHa?pid=ImgDet&rs=1',
      price: 49.99,
      discount: 10,
    },
    {
      id: 3,
      name: 'best from addidas',
      image:
        'https://th.bing.com/th/id/OIP.c30O0tzLjrEFQUMeGyZGnAHaHa?pid=ImgDet&rs=1',
      price: 49.99,
      discount: 30,
    },
    // Add more products here if needed
  ];

  return (
    <>
      <div>
        <BannerContainer>
          <h1>
            <i>Welcome to ShoeStop</i>
          </h1>
        </BannerContainer>
        <Categories />
        <Carousel
          showStatus={false}
          centerMode
          centerSlidePercentage={100 / 4}
          infiniteLoop
          swipeable={true}
          showArrows
        >
          {allShoes.map((shoe) => (
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
        </Carousel>
      </div>
      <Carasoul products={offers}></Carasoul>
    </>
  );
};

export default Index;
