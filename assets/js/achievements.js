window.addEventListener('load', function() {
    const items = document.querySelectorAll('.single-achievements-item');
    const popup = document.getElementById('achievementPopup');

    // 최대 높이 맞추기
    let maxHeight = 0;
    items.forEach(item => maxHeight = Math.max(maxHeight, item.offsetHeight));
    items.forEach(item => item.style.height = maxHeight + 'px');

    // 클릭 시 팝업
    items.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();

            const title = item.dataset.popupTitle;
            // \n은 <br>로, &nbsp;는 그대로 사용
            const desc = item.dataset.popupDesc.replace(/\n/g, "<br>");

            popup.innerHTML = `<strong>${title}</strong><p>${desc}</p>`;
            popup.style.display = 'block';
            popup.style.top = e.pageY + 10 + 'px';
            popup.style.left = e.pageX + 10 + 'px';
        });
    });

    // 팝업 외 클릭 시 닫기
    document.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
