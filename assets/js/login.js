document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  alert(`로그인 시도: ${email}`);
  // 실제 로그인 처리 코드는 여기서 작성
  $("#loginModal").modal("hide"); // 모달 닫기
});
