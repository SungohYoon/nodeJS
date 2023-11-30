// npm install multer 설치
const multer = require('multer');
const path = require('path');

const express = require('express');
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().valueOf() + path.basename(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/profile', upload.single('avatar'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
});

app.post('/photos', upload.array('photos', 12), (req, res) => {
  for (let file of req.files) {
    console.log(file);
  }
});

app.listen(5000, () => {
  console.log('server start!');
});
