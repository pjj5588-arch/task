document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  // ===== 팬 댓글 =====
  const commentInput = document.getElementById("fanCommentInput");
  const commentBtn = document.getElementById("fanCommentBtn");
  const loginPrompt = document.getElementById("loginPrompt");
  const commentsList = document.getElementById("fanCommentsList");

  if (isLoggedIn) {
    commentInput.style.display = "block";
    commentBtn.style.display = "block";
    loginPrompt.style.display = "none";
  } else {
    commentInput.style.display = "none";
    commentBtn.style.display = "none";
    loginPrompt.style.display = "block";
    loginPrompt.textContent = "로그인 후 댓글과 투표가 가능합니다.";
  }

  commentBtn.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (!commentText) {
      alert("댓글을 입력해주세요.");
      return;
    }

    const commentDiv = document.createElement("div");
    commentDiv.className = "fan-comment mb-2 p-2 border rounded";
    commentDiv.textContent = commentText;
    commentsList.prepend(commentDiv);

    commentInput.value = "";
  });

  // ===== 팬 투표 =====
  const votes = { Doran:0, Oner:0, Faker:0, Gumayusi:0, Keria:0 };
  let hasVoted = false;

  const voteBtn = document.getElementById('voteBtn');
  const playerSelect = document.getElementById('playerSelect');

  voteBtn.addEventListener('click', () => {
    if (!isLoggedIn) {
      alert("로그인 후 투표 가능합니다.");
      return;
    }

    if (hasVoted) {
      alert("이미 투표하셨습니다!");
      return;
    }

    const player = playerSelect.value;
    votes[player]++;
    hasVoted = true;

    const totalVotes = Object.values(votes).reduce((a,b)=>a+b,0);

    ['Doran','Oner','Faker','Gumayusi','Keria'].forEach(p => {
      const percent = totalVotes ? (votes[p]/totalVotes*100) : 0;
      const bar = document.getElementById(p+'CountBar');
      bar.style.width = '0%';
      setTimeout(()=>{ bar.style.width = percent + '%'; }, 50);
      document.getElementById(p+'CountText').innerText = votes[p];
    });

    document.getElementById('voteResult').style.display = 'block';
    const voteMessage = document.getElementById('voteMessage');
    voteMessage.style.display = 'block';
    voteMessage.textContent = `투표 완료! ${player}님에게 투표했습니다.`;
  });
});
