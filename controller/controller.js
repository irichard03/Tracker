const express = require('express');
const router = express.Router();
const db = require('../models');
const mongoose = require("mongoose");
 
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/tracker";
mongoose.connect(MONGODB_URI);

     router.get('/api/battles', (req,res) =>{
        db.battles.find({}).then((data)=>{
            res.json(data);
        }).catch((error)=>{
            res.json(error);
        });
    });

    
//todo add router functions

    /* example:
    router.post("/api/books", function(req,res) {
    
        db.books.create({ 
            bookId: req.body.id,
            title: req.body.title,
            authors: req.body.authors,
            description: req.body.description,
            image: req.body.image,
            link: req.body.link
        }).then(function(data) { 
        res.send("OK");
        }).catch(function(data){
            res.json(error);
        });

    });

    
    */







//todo api/books/:id (delete) from mongo

module.exports = router;