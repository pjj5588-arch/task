// login.js

document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // ===== 임시 더미 처리 =====
  // 실제 서버 대신 여기서 바로 결과 반환
  const dummyResponse = () => {
    if(email === "test@test.com" && password === "1234") {
      return { success: true, message: "Login successful!" };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  };

  const data = dummyResponse(); // 서버 대신 사용
  console.log(data);

  if(data.success) {
    alert(data.message);
    // 실제 로그인 성공 시 이동 처리 등
  } else {
    alert(data.message);
  }

  /* ===== 기존 fetch 코드는 주석 처리 =====
  try {
    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  */
});
