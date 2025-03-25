const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // __dirname : 현재 디렉토리의 절대 경로, path.join : 경로 지정자를 운영체제에 맞춰줌

console.log(path.join(__dirname, 'views'));

const travelList = ['뉴욕', '파리', '서울', '도쿄'];

app.get('/', (req, res) => {

});

app.get('/travel', (req, res) => {
  res.render('travel', {travelList})
});

app.use((req, res) => {
  res.status(404);
});

app.listen(3001, () => {
  console.log('서버가 http://localhost:3001 에서 실행 중입니다.');
});