import React from 'react';
import FriendList from '../components/Friends/FriendList';
import Recommendations from '../components/Friends/Recommendation';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the Friend App</h1>
      <FriendList />
      <Recommendations />
    </div>
  );
};

export default HomePage;
