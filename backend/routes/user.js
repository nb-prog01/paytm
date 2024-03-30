const express=require('express');

const { User } = require('../db');
const { JWT_SECRET } = require('../config');
const { jwt }=require('jsonwebtoken');
const { zod }=require('zod');
const router=express.Router();

//singup and signin routes

const signupSchema=zod.object({
    usename:zod.string().email(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string(),
})

router.post("/signup",async (req,res)=>{
    const body=req.body;
    const{success}=signupSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"Email already taken / Incorrect inputs"
        })
    }
    
    const existinguser=await User.findOne({
        username:body.username
    })

    if(existinguser._id){
        return res.status(411).json({
            message:"Email already taken / Incorrect inputs"
        })
    }

    const dbUser=await User.create(body);
    //OR
    // const dbUser=await User.create({
    //     username: body.username,
    //     password: body.password,
    //     firstName: body.firstName,
    //     lastName: body.lastName,
    // });

    const token=jwt.sign({
        userId:dbUser._id
    },JWT_SECRET)

    res.json({
        message: "User created successfully",
        token:token
    })
})

const signinSchema=zod.object({
    username:zod.string().email(),
    password:zod.string()
})

router.post("/signin",async (req,res)=>{
    const body=req.body;
    const{success}=signinSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"Email already taken / Incorrect inputs"
        })
    }
    
    const existinguser=await User.findOne({
        username:body.username,
        password:body.password
    });

    if(existinguser){
        const token=jwt.sign({
            userId:existinguser._id
        },JWT_SECRET);
        
        res.json({
            token:token
        })

        return;
    }

    res.status(411).json({
        message:"Error while loggin in"
    })

})

module.exports=router;
