const express = require('express')
const app = express();
const PORT = 3000;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post("/komik", async (req, res) => {
    const data = req.body;
    try{
        const komik = await db.Komik.create(data);
        res.send(komik);
    } catch (err) {
        res.send(err)
    }
})

app.get("/komik", async (req, res) => {
    try{
        const komik = await db.Komik.findAll();
        res.send(komik);
    } catch(err){
        res.send(err)
    }
})
