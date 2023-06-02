import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../cartContext';

const CheckoutContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const CheckoutTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const CheckoutButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
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

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleCheckout = (e) => {
    e.preventDefault();

    // Perform the checkout logic here
    // You can use the cartItems array and form data to send the data to your server for processing

    // Example:
    // Here, we are simply logging the form data and cart items to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Cart Items:', cartItems);

    // After successful checkout, you can clear the cart or perform any other necessary actions
    clearCart();
  };

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <Form onSubmit={handleCheckout}>
        <FormField>
          <Label>Name</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label>Address</Label>
          <Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </FormField>
        <h3>Cart Items:</h3>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <ItemInfo>
              <ItemImage src={item.image} alt={item.name} />
              <div>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>{item.price}</ItemPrice>
              </div>
            </ItemInfo>
            <p>Quantity: {item.quantity}</p>
          </CartItem>
        ))}
        <CheckoutButton type="submit">Checkout</CheckoutButton>
      </Form>
    </CheckoutContainer>
  );
};

export default Checkout;
