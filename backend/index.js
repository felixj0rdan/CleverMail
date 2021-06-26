require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const mailRoutes = require("./routes/mail");

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED");
})
    .catch((err) => { console.log(err) });

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use('/api', mailRoutes);

const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.json({
        'msg': 'hey'
    })
})

//starting a server
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})