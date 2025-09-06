document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  if (!loginForm) return;

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const correctEmail = "test@t1.gg";
    const correctPassword = "1234";

    if (email === correctEmail && password === correctPassword) {
      alert("로그인 성공! 🎉");
      // 로그인 성공 시 모달 닫기
      const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
      modal.hide();
    } else {
      alert("로그인 실패. 이메일 또는 비밀번호를 확인하세요.");
    }
  });

  // 모달 닫힌 후 로그인 버튼으로 포커스 이동
  const loginModalEl = document.getElementById('loginModal');
  loginModalEl.addEventListener('hidden.bs.modal', function () {
    document.getElementById('loginButton').focus();
  });
});
