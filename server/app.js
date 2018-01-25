var express=require('express');
var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');
var app=express();
var User = require('./models/user');
//mongoose
mongoose.connect('mongodb://localhost/nerdtalk',()=>{
  console.log('connected to database');
});
//middlewares

// app.use(express.cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/views'));




app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/login', function(req, res, next) {
  res.send('Go back and register!');
});

//for github
var passportGithub = require('./auth/github');
app.get('/auth/github', passportGithub.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback',
  passportGithub.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication
    res.json(req.user);

  });

app.listen(3000,()=>{
  console.log('server is up at port 3000');
});
