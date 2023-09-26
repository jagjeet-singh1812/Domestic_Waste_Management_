const asyncHandler = require("express-async-handler");
const Leaderboard = require('../models/leaderboard');

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
  

  const addDailyVisit = asyncHandler(async (req, res) => {
    try {
      const { username } = req.body;
      const currentDate = new Date(); 
      const formattedDate = formatDate(currentDate);
      
      let pointsnow = await Leaderboard.findOne({ username: username });
  
      if (!pointsnow) {
        return res.status(200).json({ message: 'User not found in the leaderboard.' });
      }
  
      const existingRecord = await Leaderboard.findOne({
        username: username,
        lastBonusDate: formattedDate,
      });
  
      if (existingRecord) {
        return res.status(200).json({ message: 'Daily visit point already added for today.' });
      } else {
        pointsnow.dailyVisit += 1;
        pointsnow.lastBonusDate = formattedDate;
        await pointsnow.save();
        return res.status(200).json({ message: 'Daily visit point added successfully.' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  



const addDailynonseg = asyncHandler(async (req, res) => {
    try {
      const { username } = req.body;
      const currentDate = new Date(); 
  const formattedDate = formatDate(currentDate);

  let pointsnow = await Leaderboard.findOne({ username: username });

  if (!pointsnow) {
    return res.status(200).json({ message: 'User not found in the leaderboard.' });
  }
      const existingRecord = await Leaderboard.findOne({
        username: username,
        lastDate: formattedDate,
      });
  
      if (existingRecord) {
        return res.status(200).json({ message:'Daily collection point already added for today.'});
      } else {
        pointsnow.nonSeg += 2;
        pointsnow.lastDate = formattedDate;
        await pointsnow.save();
        return res.status(200).json({ message: 'Daily visit point added successfully.',pointsnow:pointsnow,totalpoints:pointsnow.totalpoints});
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });


  const addDailyseg = asyncHandler(async (req, res) => {
    try {
      const { username } = req.body;
      const currentDate = new Date(); 
  const formattedDate = formatDate(currentDate);

  let pointsnow = await Leaderboard.findOne({ username: username });

  if (!pointsnow) {
    return res.status(200).json({ message: 'User not found in the leaderboard.' });
  }
      const existingRecord = await Leaderboard.findOne({
        username: username,
        lastDate: formattedDate,
      });
  
      if (existingRecord) {
        return res.status(200).json({ message:'Daily collection point already added for today.'});
      } else {
        pointsnow.properSeg+=5;
        pointsnow.lastDate = formattedDate;
        await pointsnow.save();
        return res.status(200).json({ message: 'Daily visit point added successfully.',pointsnow:pointsnow,totalpoints:pointsnow.totalpoints});
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  

const getAllUsersSortedByTotalPoints = asyncHandler(async (req, res) => {
    try {
      const users = await Leaderboard.find({});
      users.sort((a, b) => b.totalpoints - a.totalpoints);
      return res.status(200).json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });


module.exports={addDailyVisit,addDailyseg,addDailynonseg,getAllUsersSortedByTotalPoints};