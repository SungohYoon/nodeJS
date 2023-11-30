const express = require('express');
require('dotenv').config({ path: './db/mysql.env' });
const mysql = require('./db.js');
const app = express();

app.use(
  express.json({
    limit: '50mb',
  })
);

app.listen(3000, () => {
  console.log('Server Start!');
});

app.get('/tusers', async (req, res) => {
  let list = await mysql.query('tuserList');
  res.send(list);
});

app.post('/tusers', async (req, res) => {
  let data = req.body.param;
  let result = await mysql.query('tuserInsert', data);
  res.send(result);
});

app.put('/tusers/:user_id', async (req, res) => {
  let datas = [req.body.param, req.params.user_id];
  let result = await mysql.query('tuserUpdate', datas);
  res.send(result);
});

app.delete('/tusers/:user_id', async (req, res) => {
  let data = req.params.user_id;
  let result = await mysql.query('tuserDelete', data);
  res.send(result);
});

app.get('/tusers/:user_id', async (req, res) => {
  let data = req.params.user_id;
  let list = await mysql.query('tuserInfo', data);
  res.send(list);
});
