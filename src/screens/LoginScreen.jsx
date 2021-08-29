import React from 'react';
import './LoginScreen.scss';
function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <button className="loginScreen__button">Sign in </button>
      </div>
    </div>
  );
}

export default LoginScreen;
