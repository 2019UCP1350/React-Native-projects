const express=require('express');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const User=mongoose.model("User");

const router=express.Router();

router.post('/signup',async (req,res)=>{ // req:request res:response
	try{
		const user=new User({email:req.body.email,password:req.body.password});
		await user.save();
		const token=jwt.sign({userId:user._id},"MY_SecretString"); 
		/* this is how u create a javascript token which is a 
		   unique string use to valid a user with in an app or 
			a website 
			first argument is the data of which we want to create a jwt
			seciond argument is the secret key which is used to create a jwt
			and we can retrieve data from jwt using this string
		*/
		res.send({token});
	}catch(err)
	{
		return res.status(422).send(err.message); 
		/* res.status is status of http request 422 is a 
		technical term for error which mean the user has 
		send some invalid information
		err.message is a automatically generate message by mangodb
		*/
	}
});

router.post('/signin',async (req,res)=>{
	const {email,password}=req.body;
	if (!email || !password)
	{
		return res.status(422).send({error: 'Must provide an email or password'});
	}
	
	const user=await User.findOne({email});
	if (!user)
	{
		return res.status(422).send({error:"Invalid email or password"});
	}
	try{
		await user.comparePassword(password);
		const token=jwt.sign({ userId:user._id},"MY_SecretString");
		res.send({token});
	}catch(err)
	{
		return res.status(422).send({error:"Invalid email or password"});
	}
});
module.exports=router;