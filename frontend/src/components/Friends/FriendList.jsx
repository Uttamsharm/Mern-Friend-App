import React, { useEffect, useState } from 'react';
import { fetchFriends } from '../../services/apiService';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const loadFriends = async () => {
      const token = localStorage.getItem('token');
      const res = await fetchFriends(token);
      setFriends(res.data.friends);
    };

    loadFriends();
  }, []);

  return (
    <div className="friend-list">
      <h3>Your Friends</h3>
      {friends.map((friend) => (
        <div key={friend._id} className="friend-item">
          <span>{friend.username}</span>
          <button>Unfriend</button>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
