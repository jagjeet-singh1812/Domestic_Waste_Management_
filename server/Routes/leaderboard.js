const express=require("express");
const { addDailyseg, addDailynonseg, addDailyVisit, getAllUsersSortedByTotalPoints } = require("../Controllers/Leaderboardcontroller");
const router=express.Router();

router.post('/addseg',addDailyseg);
router.post('/addnonseg',addDailynonseg);
router.post('/adddailypoints',addDailyVisit);
router.get('/alluserpoints',getAllUsersSortedByTotalPoints);
module.exports=router;