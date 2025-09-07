const votes = { Doran:0, Oner:0, Faker:0, Gumayusi:0, Keria:0 };
let hasVoted = false;

document.getElementById('voteBtn').addEventListener('click', () => {
  if(hasVoted) return alert("You have already voted!");

  const player = document.getElementById('playerSelect').value;
  votes[player]++;
  hasVoted = true;

  const totalVotes = Object.values(votes).reduce((a,b)=>a+b,0);

  ['Doran','Oner','Faker','Gumayusi','Keria'].forEach(p => {
    const percent = totalVotes ? (votes[p]/totalVotes*100) : 0;
    const bar = document.getElementById(p+'CountBar');
    bar.style.width = '0%';
    setTimeout(()=>{ bar.style.width = percent + '%'; }, 50);

    // 투표 수 텍스트 업데이트
    document.getElementById(p+'CountText').innerText = votes[p];
  });

  document.getElementById('voteResult').style.display = 'block';
  document.getElementById('voteMessage').style.display = 'block';
  document.getElementById('voteMessage').textContent = `Thank you for voting! You chose ${player}.`;
});
