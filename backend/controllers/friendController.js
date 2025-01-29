import User from '../models/userModel.js';

export const sendFriendRequest = async (req, res) => {
  const { userId, friendId } = req.body;
  try {
    const user = await User.findById(userId);
    const friend = await User.findById(friendId);
    if (!friend) return res.status(404).json({ message: 'Friend not found' });

    if (!friend.friendRequests.includes(userId)) {
      friend.friendRequests.push(userId);
      await friend.save();
    }
    res.status(200).json({ message: 'Friend request sent' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFriendRecommendations = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate('friends');
    const friendIds = user.friends.map(friend => friend._id);

    const recommendations = await User.find({
      _id: { $nin: [...friendIds, userId] },
    });
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
