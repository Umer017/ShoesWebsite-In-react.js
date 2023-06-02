import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../cartContext.js';
import { useNavigate } from 'react-router-dom';

const CartContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const CartTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CartItem = styled.div`
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

const Total = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

const ClearButton = styled.button`
  background-color: transparent;
  color: #888;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
`;

const CheckoutButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`;

const Cart = () => {
  const { cartItems, addItemToCart, removeItemFromCart, clearCart } =
    useContext(CartContext);

  const Navigate = useNavigate();

  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    // Perform the checkout logic here, e.g., making an API call, updating the database, etc.
    // You can use the cartItems array to send the data to your server for processing.

    Navigate('/checkout');
    // Example:
    // Here, we are simply logging the cart items to the console.
    console.log(cartItems);

    // After successful checkout, you can clear the cart or perform any other necessary actions.
  };

  return (
    <CartContainer>
      <CartTitle>Shopping Cart</CartTitle>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <CartItem key={item.id}>
              <ItemInfo>
                <ItemImage src={item.image} alt={item.name} />
                <div>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>${item.price}</ItemPrice>
                </div>
              </ItemInfo>
              <RemoveButton onClick={() => handleRemoveItem(index)}>
                Remove
              </RemoveButton>
            </CartItem>
          ))}
          <Total>Total: ${total.toFixed(2)}</Total>
          <ClearButton onClick={handleClearCart}>Clear Cart</ClearButton>
          <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
