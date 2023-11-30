const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

// application/www-form-urlencoded
const defaultParser = express.urlencoded({ extended: false });

// application/json
const jsonParser = express.json();

app.use(defaultParser);

app.post('/info', (req, res) => {
  res.send('welcome, ' + req.body.name);
});

app.post('/message', jsonParser, (req, res) => {
  res.send('MSG: ' + req.body.message);
});

app.listen(5000, () => {
  console.log('server start!');
});

let sessionSetting = session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 60000,
  },
});

app.use(sessionSetting);

const corsOptions = {
  origin: 'http://192.168.0.49:5500',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send(req.session);
});

app.post('/login', (req, res) => {
  const { id, pwd } = req.body;
  req.session.user = id;
  req.session.pwd = pwd;
  req.session.save(function (err) {
    if (err) throw err;
    res.redirect('/');
  });
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  req.redirect('/');
});
