const express = require('express');
const app = express();
const codebreaker = require('./codebreaker');
const cors = require('cors');
app.use(cors());

app.get('/codebreaker' , (req,res) => {
res.json({
    result: codebreaker.codebreaker(req.query.value,req.query.secret)
});

});

module.exports = app;