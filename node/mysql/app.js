require('dotenv').config({ path: './db/mysql.env' });
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(
  express.json({
    limit: '50mb',
  })
);

app.listen(3000, () => {
  console.log('Server Start');
});

app.get('/customers', async (req, res) => {
  let list = await mysql.query('customerList');
  res.send(list);
});

app.post('/customers', async (req, res) => {
  let data = req.body.param;
  let result = await mysql.query('customerInsert', data);
  res.send(result);
});

app.put('/customers/:id', async (req, res) => {
  let datas = [req.body.param, req.params.id];
  let result = await mysql.query('customerUpdate', datas);
  res.send(result);
});

app.delete('/customers/:id', async (req, res) => {
  let data = req.params.id;
  let result = await mysql.query('customerDelete', data);
  res.send(result);
});

app.get('/customers/:id', async (req, res) => {
  let data = req.params.id;
  let list = await mysql.query('customerInfo', data);
  res.send(list);
});
