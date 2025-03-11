const express = require('express');
const app = express();

// 루트 경로 ('/') 요청에 대한 응답
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
  // 서버 실행 (포트 3000)
  app.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
  });