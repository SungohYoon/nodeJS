const fs = require('fs');
const express = require('express');
const userRouter = require('./user.js');
const app = express();

app.use('/user', userRouter);
app.use('/public', express.static('images'));
app.use(function (err, req, res, next) {
  res.status(500).json({ statusCode: res.statusCode, errMessage: err.message });
});

app.get('/error', (req, res, next) => {
  next(new Error('Process Fail! Check Data!'));
});

const jsonFile = fs.readFileSync('db.json');
const jsonData = JSON.parse(jsonFile);

const getData = (target, where) => {
  let data = jsonData[target];
  if (Array.isArray(data)) {
    let list = data;
    for (let obj of list) {
      if (obj.id == where) {
        data = obj;
      }
    }
  }
  return data;
};

app.get('/', (req, res) => {
  res.send('Server Connect');
});

app.get('/posts', (req, res) => {
  let data = getData('posts');
  res.json(data);
});

app.get('/posts/:id', (req, res) => {
  let data = getData('posts', req.params.id);
  res.json(data);
});

app.get('/comments', (req, res) => {
  let data = getData('comments');
  res.send(data);
});

app.get('/comments/:id', (req, res) => {
  let data = getData('comments', req.params.id);
  res.send(data);
});

app.get('/profile', (req, res) => {
  let data = getData('profile');
  res.send(data);
});

app
  .route('/emps')
  .get((req, res) => {
    res.send('사원 전체조회');
  })
  .post((req, res) => {
    res.send('사원 등록');
  })
  .put((req, res) => {
    res.send('사원 수정');
  })
  .delete((req, res) => {
    res.send('사원 삭제');
  });

app.listen(3000, () => {
  console.log('서버가 실행됩니다.');
  console.log('http://localhost:3000');
});
