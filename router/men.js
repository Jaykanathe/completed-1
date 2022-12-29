const express = require('express');
const router = new express.Router();
const MensRanking = require("../models/mens");
const orderRanking = require("../models/order");
//post
router.post('/mens', async (req, res) => {
    try {

        const addMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const InsertMens = await addMensRecords.save();
        res.send(InsertMens);

    } catch (e) {
        res.status(400).send(e);
    }
})



router.post('/order', async (req, res) => {
    try {

        const addorderRecords = new orderRanking(req.body);
        console.log(req.body);
        const InsertOrder = await addorderRecords.save();
        res.send(InsertOrder);

    } catch (e) {
        res.status(400).send(e);
    }
})

//get method


router.get('/mens', async (req, res) => {
    try {
        const getMens = await MensRanking.find({})
        res.send(getMens);

    } catch (e) {
        res.status(400).send(e);
    }
})



router.get('/order', async (req, res) => {
    try {
        const getorder = await orderRanking.find({})
        res.send(getorder);

    } catch (e) {
        res.status(400).send(e);
    }
})




router.get('/', async (req, res) => {
    res.send("hello jay");
})

module.exports = router;