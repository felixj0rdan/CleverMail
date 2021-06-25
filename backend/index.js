const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");


const db = process.env.DB;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED");
})
    .catch((err) => { console.log(err) });
app.get("/", (req, res) => {
    res.json({
        'msg': 'hey'
    })
})
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`running on port ${port}`)
})

