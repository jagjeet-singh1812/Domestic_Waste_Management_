const express=require("express");
const { createblog, getallblogs, filtered_blogs } = require("../Controllers/blogsall");
const { protect } = require("../Controllers/authmiddleware");
const router=express.Router();

router.post('/make_a_post',protect,createblog);
router.get('/getall',getallblogs);
router.route('/filtered').post(filtered_blogs);

module.exports=router;