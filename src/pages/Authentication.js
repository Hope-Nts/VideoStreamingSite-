import React, { useState } from 'react';
import SignUpCard from '../components/signUp/signUp.component';
import LoginCard from '../components/login/login.component';

const AuthPage = () => {
  const [cardType, setCardType] = useState('SIGNUP');

  if (cardType === 'LOGIN') {
    return <LoginCard changeCard={setCardType} />;
  } else if (cardType === 'SIGNUP') {
    return <SignUpCard changeCard={setCardType} />;
  }
};

export default AuthPage;
