const express = require('express');
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    order_id:{
        type:Number,
        require:true,
        unique:true
    },
    quanitity:{
        type:Number,
        require:true,
    },
    date:{
        type:Date,
        require:true
    }


}) 

const orderRanking = new mongoose.model("orderRanking", orderSchema);

module.exports = orderRanking;
