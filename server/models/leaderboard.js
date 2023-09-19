const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  dailyVisit: {
    type: Number,
    default: 0, 
  },
  properSeg: {
    type: Number,
    default: 0
  },
  nonSeg: {
    type: Number,
    default: 0, 
  },
  lastBonusDate: {
    type: String, 
    default: '', 
  },
});

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

module.exports = Leaderboard;
