const express = require("express");
const { questioncontroller, bookchatcontroller, contactcontroller, fetchallquestion, fetchallchat, fetchallcontact, freesamplecontroller, fetchallsample, newslettercontroller, fetchall_letter } = require("../Controllers/formcontroller");
const { protect } = require('../Controllers/authmiddleware');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("working route");
});

router.post('/Question', questioncontroller);
router.post('/Contactus', contactcontroller);
router.post('/newsletter',newslettercontroller);

router.get('/getallquestion', protect,fetchallquestion);
router.get('/getallcontact',protect,fetchallcontact);
router.get('/getallnewsletter',protect,fetchall_letter);

module.exports = router;
