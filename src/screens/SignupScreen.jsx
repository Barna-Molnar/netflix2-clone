import React, { useRef } from 'react';
import { auth } from '../firebase.js';
import './SignupScreen.scss';

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="signupScreen">
      <form>
        <h2>Sign In </h2>
        <input type="email" placeholder="Email Address" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
