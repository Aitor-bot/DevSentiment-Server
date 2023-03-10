import TopicData from '../models/topicStatisticsModel.js'

export const getStats = async (req, res) => {
  try {
    const stats = await TopicData.find({}).sort({ totalTweets: -1 });
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};