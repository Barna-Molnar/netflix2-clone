import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../Components/Nav';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import './ProfileScreen.scss';

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar-img"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans (current plan)</h3>
              <div className="profileScreen__planBox">
                <h4 className="profileScreen__planBox--date">
                  Reneval date: 04/03/2021
                </h4>
                <div className="packages">
                  <div className="package package__standard">
                    <div>
                      <h5>Netflix Stanadard</h5>
                      <p>1080p</p>
                    </div>
                    <button className="subscribe subscribe__standard">
                      Subscribe
                    </button>
                  </div>
                  <div className="package package__basic">
                    <div>
                      <h5>Netflix Basic</h5>
                      <p>480p</p>
                    </div>
                    <button className="subscribe subscribe__basic">
                      Subscribe
                    </button>
                  </div>
                  <div className="package package__premium">
                    <div>
                      <h5>Netflix Premium</h5>
                      <p>4k+HDR</p>
                    </div>
                    <button className="subscribe subscribe__premium">
                      Current Package
                    </button>
                  </div>
                </div>
              </div>

              <button
                className="profileScreen__signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
