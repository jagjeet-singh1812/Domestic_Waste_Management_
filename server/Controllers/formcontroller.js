const asyncHandler = require("express-async-handler");
const Question=require('../models/questionformmodel');
const chat=require('../models/bookachat.js')
const contactform=require('../models/contactus_form')
const newsletter=require('../models/newsletter')
const questioncontroller=asyncHandler(async(req,res)=>{
    // console.log(req.body);
    const {name,email,question}=req.body;
// console.log("called");
    if(!name||!email||!question){
      res.status(400);
        throw new Error("Please fill all the Reqd Details")
    }
    const reqd_details=await Question.create({
    name,
    question,
    email
  })
  if (reqd_details) {
    res.status(201).json({
      _id: reqd_details._id,
      name: reqd_details.name,
      email: reqd_details.email,
      message:reqd_details.question
    });
    console.log(reqd_details);
  } else {
    res.status(400);
    throw new Error("Failed to Create the Data Entry !!! Try Again ");
  }
});




const bookchatcontroller=asyncHandler(async(req,res)=>{
  // console.log(req.body);
  const {name,email,service}=req.body;
// console.log("called");
  if(!name||!email||!service){
    res.status(400);
      throw new Error("Please fill all the Required Details")
  }
  const reqd_details=await chat.create({
  name,
  service,
  email
})
if (reqd_details) {
  res.status(201).json({
    _id: reqd_details._id,
    name: reqd_details.name,
    email: reqd_details.email,
    service:reqd_details.service
  });
  console.log(reqd_details);
} else {
  res.status(400);
  throw new Error("Failed to Create the Data Entry !!! Try Again ");
}
});





const contactcontroller=asyncHandler(async(req,res)=>{
  console.log(req.body);
  const {name,email,message,phoneno,companyname}=req.body;
// console.log("called");
  if(!name||!email||!message||!phoneno){
    res.status(400);
      throw new Error("Please fill all the Required Details")
  }
  const reqd_details=await contactform.create({
  name,
  message,
  email,
  phoneno,
  companyname
})
if (reqd_details) {
  res.status(201).json({
    _id: reqd_details._id,
    name: reqd_details.name,
    email: reqd_details.email,
    message:reqd_details.message,
    companyname:reqd_details.companyname,
    phoneno:reqd_details.phoneno
  });
  console.log(reqd_details);
} else {
  res.status(400);
  throw new Error("Failed to Create the Data Entry !!! Try Again ");
}
});

const fetchallquestion=asyncHandler(async(req,res)=>{
  const allquestion=await Question.find({}).sort({ timestamp: -1 });;
  res.status(201).send(allquestion);
});

const fetchallchat=asyncHandler(async(req,res)=>{
  const allchat=await chat.find({}).sort({ timestamp: -1 });
  res.status(201).send(allchat);
});



const fetchallcontact=asyncHandler(async(req,res)=>{
const allquestion=await contactform.find({}).sort({ timestamp: -1 });;
res.status(201).send(allquestion);
});



const fetchall_letter=asyncHandler(async(req,res)=>{
  // console.log("idhr poh")
  const allquestion=await newsletter.find({}).sort({ timestamp: -1 });;
  res.status(201).send(allquestion);
  });



const newslettercontroller=asyncHandler(async(req,res)=>{
  // console.log(req.body);
  const {email}=req.body;
// console.log("called");
  if(!email){
    res.status(400);
      throw new Error("Please fill all the Required Details")
  }
  const reqd_details=await newsletter.create({
  Email:email
})
if (reqd_details) {
  res.status(201).json({
    _id: reqd_details._id,
    email: reqd_details.Email,
  });
  console.log(reqd_details);
} else {
  res.status(400);
  throw new Error("Failed to Create the Data Entry !!! Try Again ");
}
});


module.exports={questioncontroller,bookchatcontroller,contactcontroller,fetchallquestion,fetchallchat,fetchallcontact,newslettercontroller,fetchall_letter};