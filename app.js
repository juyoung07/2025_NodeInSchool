const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

require('dotenv').config();

const travelRouter = require('./routes/travel');
const app = express();

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // __dirname : 현재 디렉토리의 절대 경로, path.join : 경로 지정자를 운영체제에 맞춰줌

console.log(path.join(__dirname, 'views')); 


app.get('/', (req, res) => {

});

app.use("/travel", travelRouter);

// 전체 메소드 + 모든 경로
// 위의 엔드포인트에 해당하지 않으면 유효하지 않는 페이지로 간주 
app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(3001, () => {
  console.log('서버가 http://localhost:3001 에서 실행 중입니다.');
});