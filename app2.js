const express = require('express');
const path = require('path');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // __dirname : 현재 디렉토리의 절대 경로, path.join : 경로 지정자를 운영체제에 맞춰줌

console.log(path.join(__dirname, 'views'));

const db = mysql.createConnection({
  host : process.env.DB_HOST,
  user : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.log('MySQL 연결 실패 : ', err);
    return;
  }
  console.log('MySQL에 연결되었습니다.')
})

app.get('/', (req, res) => {

});

app.get('/travel', (req, res) => {
  const query = 'SELECT id, name FROM travelList';
  db.query(query, (err, result) => {
    if (err) {
      console.error('디비 쿼리 실패 : ', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    const travelList = result; 
    res.render('travel', {travelList});
  });
});

app.use((req, res) => {
  res.status(404);
});

app.listen(3001, () => {
  console.log('서버가 http://localhost:3001 에서 실행 중입니다.');
});