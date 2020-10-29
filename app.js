var express = require("express")
var app = express();
var logger = require('morgan');
var ejs = require("ejs");
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var route = require("./router/router.js");
var path = require('path');

/* kết nối csdl */
mongoose.connect('mongodb://localhost/BanHang', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.use(flash());
app.use(passport.initialize())
app.use(passport.session());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* set link index */
app.get("/",(req,res)=>{
    res.render("index");
})

/* router */
app.use("/views/",route)
/* Cổng kết nối */
app.listen(3000,(req,res)=>{
    console.log("Truy cập localhost:3000")
})