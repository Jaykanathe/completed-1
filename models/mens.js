const express = require('express');
const mongoose = require('mongoose');

const menSchema = new mongoose.Schema({

    first:{
        type:String,
        require:true,
        unique:true
    },
    last:{
        type:String,
        require:true,
    },
    date:{
        type:Date,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    }


}) 

const MensRanking = new mongoose.model("MensRanking", menSchema);

module.exports = MensRanking;
