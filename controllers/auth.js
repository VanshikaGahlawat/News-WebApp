const User = require('../models/user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const {errorHandler} = require('../helpers/dbErrorHandler')


exports.signup = (req, res) =>{
    const user = new User(req.body);
    console.log(user);
    user.save((err, user)=>{
        if(err){
            return res.status(400).json({
                err: errorHandler(err)
            })
            
        }

        user.salt = undefined;
        user.hashed_password = undefined;

        res.json(user);
    })
}

exports.signin = (req, res) =>{
    const {email, password}= req.body;

    User.findOne({email}, (err, user)=>{
        if(err || !user){
            return res.status(400).json({
                err: 'User not found!! Please signin.'
            })
        }

        if(!user.authenticate(password)){
            return res.status(401).json({
                err: 'Invalid Credentials!!'
            })
        }

        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);

        res.cookie('t', token, {expiry: new Date()+9999});

        const {_id, email, name} = user;

        res.json({token, user:{name, email, _id}})

    })
}



exports.signout = (req, res) =>{
    res.clearCookie('t');
    res.json({
        message: 'Signout succesfully'
    })
}

