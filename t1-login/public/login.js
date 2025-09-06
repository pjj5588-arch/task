document.addEventListener('DOMContentLoaded', () => {
  // 1. login-modal.html 불러오기
  fetch('login-modal.html')
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML('beforeend', html);

      // 2. 로그인 폼 동작
      const loginForm = document.getElementById('loginForm');
      if(loginForm) {
        loginForm.addEventListener('submit', async e => {
          e.preventDefault();
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;

          try {
            const res = await fetch('http://localhost:3000/api/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, password })
            });
            const data = await res.json();

            if(data.success) {
              localStorage.setItem('t1_token', data.token); // 토큰 저장
              const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
              loginModal.hide();
              updateNavbar(email); // Navbar 업데이트
            } else {
              alert(data.message || 'Invalid email or password.');
            }
          } catch(err) {
            console.error(err);
            alert('Server error');
          }
        });
      }

      // 3. 새로고침 시 로그인 상태 유지
      const token = localStorage.getItem('t1_token');
      if(token) updateNavbar('T1 User');
    });
});

// Navbar 업데이트 함수
function updateNavbar(username) {
  const nav = document.getElementById('navbar-user');
  nav.innerHTML = `<span class="nav-link">Welcome, ${username}</span>
                   <a class="nav-link" href="#" id="logoutBtn">Logout</a>`;

  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('t1_token');
    location.reload();
  });
}
