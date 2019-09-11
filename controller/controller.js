const express = require('express');
const router = express.Router();
const db = require('../models');
const mongoose = require("mongoose");
 
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/tracker";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

     router.get('/api/battles', (req,res) =>{
        db.battles.find({}).then((data)=>{
            res.json(data);
        }).catch((error)=>{
            res.json(error);
        });
    });

    router.get('/api/abilities', (req,res) =>{
        db.abilities.find({}).then((data)=>{
            res.json(data);
        }).catch((error)=>{
            res.json(error);
        });
    });

module.exports = router;