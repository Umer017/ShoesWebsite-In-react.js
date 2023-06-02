import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../cartContext';

const WishlistContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const WishlistTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const WishlistItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;

const ItemName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ItemPrice = styled.p`
  font-size: 14px;
  color: #888;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  color: #888;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;

const Wishlist = () => {
  const { wishlistItems, removeItemFromWishlist } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    removeItemFromWishlist(itemId);
  };

  return (
    <WishlistContainer>
      <WishlistTitle>Wishlist</WishlistTitle>
      {wishlistItems.length === 0 ? (
        <p>No items in the wishlist.</p>
      ) : (
        <>
          {wishlistItems.map((item) => (
            <WishlistItem key={item.id}>
              <ItemInfo>
                <ItemImage src={item.image} alt={item.name} />
                <div>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>{item.price}</ItemPrice>
                </div>
              </ItemInfo>
              <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                Remove
              </RemoveButton>
            </WishlistItem>
          ))}
        </>
      )}
    </WishlistContainer>
  );
};

export default Wishlist;
