const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// 미들웨어
app.use(cors()); // 다른 도메인 허용
app.use(bodyParser.json()); // JSON body 파싱

// 예시 사용자 (실제 DB 연결 가능)
const users = [
  { email: 'test@t1.gg', password: '1234', name: 'T1 Test User' }
];

// 로그인 API
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if(user) {
    // 실제 서비스에서는 JWT 토큰 생성 추천
    res.json({ success: true, token: 'FAKE_JWT_TOKEN' });
  } else {
    res.json({ success: false, message: 'Invalid email or password.' });
  }
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
