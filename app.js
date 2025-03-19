const express = require('express');
const app = express();

app.use(express.json());

app.get('/swag', (req, res) => {
  res.status(200).send('get swag');
});

app.post('/swag', (req, res) => {
  res.status(201).send('post swag');
});

app.get('/swag/:person', (req, res) => {
  const person = req.params.person;
  res.status(200).send(person);
});
  
  // 서버 실행 (포트 3000)
app.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});