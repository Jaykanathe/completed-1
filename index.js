const express = require('express');
const mongoose = require('mongoose');
const MensRanking = require("./models/mens");
const orderRanking = require("./models/order");
// const router = require("./router/men");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(express.urlencoded({extended:true}));

mongoose.connect(
    process.env.MONGO_URL,
    // {useUrlParser:true}
).then(() =>{
    console.log("connected");
   
}).catch((e) =>{
    console.log("not connected");
})



app.post('/mens', async (req, res) => {
    try {

        const addMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const InsertMens = await addMensRecords.save();
        res.send(InsertMens);

    } catch (e) {
        res.status(400).send(e);
    }
})



app.post('/order', async (req, res) => {
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


app.get('/mens', async (req, res) => {
    try {
        const getMens = await MensRanking.find({})
        res.send(getMens);

    } catch (e) {
        res.status(400).send(e);
    }
})



app.get('/order', async (req, res) => {
    try {
        const getorder = await orderRanking.find({})
        res.send(getorder);

    } catch (e) {
        res.status(400).send(e);
    }
})




app.get('/', async (req, res) => {
    res.send("hello jay");
})

//




app.listen(PORT,(req,res) =>{
 console.log("port start at " ,PORT);
});