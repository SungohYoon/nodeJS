const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('회원 정보 조회');
});
router.post('/insert', (req, res) => {
  res.send('회원 등록');
});
router.put('/update', (req, res) => {
  res.send('회원 정보 수정');
});
router.delete('/delete', (req, res) => {
  res.send('회원 삭제');
});

module.exports = router;
