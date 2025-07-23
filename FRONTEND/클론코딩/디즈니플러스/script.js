// (1) 버튼 섹션 - 하나만 선택(포커스/hover-유지) 
document.querySelectorAll('.button-wrapper button').forEach(btn => {
  btn.addEventListener('click', function() {
    // 먼저 모든 버튼에서 selected 클래스 제거
    document.querySelectorAll('.button-wrapper button').forEach(b => b.classList.remove('selected'));
    // 현재 누른 버튼에만 selected 클래스 추가
    this.classList.add('selected');
  });
});
// (2) 로그인 버튼 기능 
document.querySelector('.log-in').addEventListener('click', function() {
  // 이미 로그인 팝업이 있을 때 다시 생성 못하게
  if(document.querySelector('.login-modal-bg')) return;

  // 배경 어둡게 덮는 div
  const modalBg = document.createElement('div');
  modalBg.className = 'login-modal-bg';

  // 모달 창
  const modal = document.createElement('div');
  modal.className = 'login-modal';

  // 내용 (간단한 로그인 폼)
  modal.innerHTML = `
    <h2>로그인</h2>
    <form class="login-form">
      <label>
        아이디
        <input type="text" name="id" required>
      </label><br>
      <label>
        비밀번호
        <input type="password" name="pw" required>
      </label><br>
      <button type="submit">로그인</button>
      <button type="button" class="login-cancel">취소</button>
    </form>
  `;

  modalBg.appendChild(modal);
  document.body.appendChild(modalBg);

  // ESC키, 취소 누르면 닫힘
  function closeModal() {
    modalBg.remove();
    document.removeEventListener('keydown', escCloseHandler);
  }
  function escCloseHandler(e) {
    if(e.key === 'Escape') closeModal();
  }
  document.addEventListener('keydown', escCloseHandler);
  modal.querySelector('.login-cancel').addEventListener('click', closeModal);
  modalBg.addEventListener('click', function(e) {
    if (e.target === modalBg) closeModal();
  });

  // 폼 제출시 - 실제 로그인은 일단 알림만!
  modal.querySelector('.login-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('로그인 시도! (여기에 id/pw 검사 기능을 추가할 수 있습니다)');
    closeModal();
  });
});
