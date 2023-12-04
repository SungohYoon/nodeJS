const fs = require('fs');
const express = require('express');
const app = express();

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
    res.send(data);
});

app.listen(3000, () => {
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
});
