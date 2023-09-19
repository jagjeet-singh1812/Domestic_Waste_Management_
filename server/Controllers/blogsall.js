const asyncHandler = require("express-async-handler");
const Blog=require('../models/blog');

const createblog=asyncHandler(async(req,res)=>{
    const {title,author,desc,ldesc,date_of_p,category}=req.body;
    console.log(req.body);
// console.log("called");
    if(!title||!author||!desc||!ldesc||!date_of_p||!category){
      res.status(400);
        throw new Error("Please fill all the Reqd Details")
    }
    const reqd_blog=await Blog.create({
        title:title,
        author_name:author,
        small_desc:desc,
        long_desc:ldesc,
        publish_date:date_of_p,
        category:category,
  })
  if (reqd_blog) {
    res.status(201).json({
      _id: reqd_blog._id,
      author: reqd_blog.author_name,
      category: reqd_blog.category,
      desc:reqd_blog.small_desc
    });
    console.log(reqd_blog);
  } else {
    res.status(400);
    throw new Error("Failed to Create the Data Entry !!! Try Again ");
  }
});

const getallblogs=asyncHandler(async(req,res)=>{
  const allblog=await Blog.find({}).sort({ timestamp: -1 });;
  res.status(201).send(allblog);
});

const filtered_blogs=asyncHandler(async(req,res)=>{
  const {category}=req.query;
  console.log(req.query);
  const allblog=await Blog.find({category:category}).sort({ timestamp: -1 });
  if(allblog)res.status(201).send(allblog);
  else res.status(404).send("No Blogs Found");
});

module.exports={createblog,getallblogs,filtered_blogs};