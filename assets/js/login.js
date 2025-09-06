document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const loginModalEl = document.getElementById('loginModal');
  const loginButton = document.getElementById('loginButton');

  if (!loginForm || !loginModalEl || !loginButton) return;

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const correctEmail = "test@t1.gg";
    const correctPassword = "1234";

    if (email === correctEmail && password === correctPassword) {
      alert("로그인 성공! 🎉");
      const modal = bootstrap.Modal.getInstance(loginModalEl);
      modal.hide();
    } else {
      alert("로그인 실패. 이메일 또는 비밀번호를 확인하세요.");
    }
  });

  // 모달 열릴 때 스크롤 잠금
  loginModalEl.addEventListener('show.bs.modal', () => {
    document.body.style.overflow = 'hidden';
  });

  // 모달 닫힐 때 스크롤 복원 & 포커스 제거
  loginModalEl.addEventListener('hidden.bs.modal', () => {
    document.body.style.overflow = ''; // 스크롤 원래대로
    document.activeElement.blur();     // 포커스 제거 (자동 스크롤 방지)
    loginForm.reset();
  });
});
