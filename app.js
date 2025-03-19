const express = require('express');
const app = express();
const swagRoutes = require('./routes/swag');

app.use(express.json());
app.use('/swag', swagRoutes);
  
  // 서버 실행 (포트 3000)
app.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});