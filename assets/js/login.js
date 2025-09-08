// login.js 파일
document.addEventListener("DOMContentLoaded", () => {
  // 로그인 폼 처리
  const validId = "admin"; // 고정 아이디
  const validPw = "1234";  // 고정 비밀번호

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = document.getElementById("email").value.trim();
      const pw = document.getElementById("password").value.trim();

      if (id === validId && pw === validPw) {
        localStorage.setItem("loggedIn", "true");
        alert("로그인 성공!");
        window.location.href = "index.html"; // 로그인 후 메인 페이지 이동
      } else {
        alert("아이디 또는 비밀번호가 잘못되었습니다.");
      }
    });
  }

  // 네비게이션 아이콘 로그인 상태 처리
  const navbarUser = document.getElementById("navbar-user");
  if (navbarUser) {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    if (isLoggedIn) {
      navbarUser.innerHTML = `
        <a class="nav-link" href="javascript:void(0)" onclick="logout()">
          <i class="fa fa-sign-out" style="font-size:1.2rem;"></i>
        </a>
      `;
    } else {
      navbarUser.innerHTML = `
        <a class="nav-link" href="login.html">
          <i class="fa fa-user" style="font-size:1.2rem;"></i>
        </a>
      `;
    }
  }
});

// 로그아웃 함수는 DOMContentLoaded 바깥에 정의
function logout() {
  localStorage.removeItem("loggedIn");
  alert("로그아웃 되었습니다.");
  location.reload();
}
