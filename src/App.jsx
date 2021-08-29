import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
        console.log('no use logged in ');
      }
    });
    // clean up function
    return () => {};
  }, []);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/" exact component={HomeScreen} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
