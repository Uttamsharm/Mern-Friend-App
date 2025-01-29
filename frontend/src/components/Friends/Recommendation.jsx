import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../../services/apiService';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const loadRecommendations = async () => {
      const token = localStorage.getItem('token');
      const res = await getRecommendations(token);
      setRecommendations(res.data.recommendations);
    };

    loadRecommendations();
  }, []);

  return (
    <div className="recommendations">
      <h3>Friend Recommendations</h3>
      {recommendations.map((user) => (
        <div key={user._id} className="recommendation-item">
          <span>{user.username}</span>
          <button>Add Friend</button>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
