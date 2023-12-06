const express = require('express');
require('dotenv').config({ path: './db/mysql.env' });
const mysql = require('./db.js');
const app = express();

app.use(
  express.json({
    limit: '50mb',
  })
);

app.use(express.static('dist'));

app.listen(3000, () => {
  console.log('Server Start!');
});

app.get('/', (req, res) => {
  res.sendFile('/dist/index.html');
});

app.get('/api/tusers', async (req, res) => {
  let list = await mysql.query('tuserList');
  res.send(list);
});

app.post('/api/tusers', async (req, res) => {
  let data = req.body.param;
  let result = await mysql.query('tuserInsert', data);
  res.send(result);
});

app.put('/api/tusers/:user_id', async (req, res) => {
  let datas = [req.body.param, req.params.user_id];
  let result = await mysql.query('tuserUpdate', datas);
  res.send(result);
});

app.delete('/api/tusers/:user_id', async (req, res) => {
  let data = req.params.user_id;
  let result = await mysql.query('tuserDelete', data);
  res.send(result);
});

app.get('/api/tusers/:user_id', async (req, res) => {
  let data = req.params.user_id;
  let list = await mysql.query('tuserInfo', data);
  res.send(list);
});
