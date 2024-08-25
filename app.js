const express = require('express');
const app = express();
const port = 3000;

const db = require("./config/mongoose-connections");

const cookieParser = require('cookie-parser');
const path = require("path");
const ownerModel = require('./models/owner.model');

const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRoute = require("./routes/productsRouter")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRoute);


app.listen((port), ()=>{
    // console.log("Working fine");
});
