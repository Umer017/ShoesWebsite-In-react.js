import React, { useState } from 'react';
import styled from 'styled-components';

const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const FormLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const FormButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
  };

  return (
    <RegistrationContainer>
      <h2>Registration Page</h2>
      <RegistrationForm onSubmit={handleSubmit}>
        <FormLabel>Username</FormLabel>
        <FormInput
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <FormLabel>Email</FormLabel>
        <FormInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormLabel>Password</FormLabel>
        <FormInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormLabel>Mobile Number</FormLabel>
        <FormInput
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <FormButton type="submit">Register</FormButton>
      </RegistrationForm>
    </RegistrationContainer>
  );
};

export default RegistrationPage;
