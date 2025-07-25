document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.signup-form form');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // 입력값 가져오기
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const terms = document.getElementById('terms').checked;

        // 에러 메시지 초기화
        removeErrorMsgs();  
        let isValid = true;

        // 이름 검사
        if (name === "") {
            showErrorMsg('이름을 입력하세요.', 'name');
            isValid = false;
        }

        // 이메일 검사
        if (email === "") {
            showErrorMsg('이메일을 입력하세요.', 'email');
            isValid = false;
        } else if (!validateEmail(email)) {
            showErrorMsg('올바른 이메일 형식이 아닙니다.', 'email');
            isValid = false;
        }

        // 비밀번호 검사
        if (password === "") {
            showErrorMsg('비밀번호를 입력하세요.', 'password');
            isValid = false;
        } else if (password.length < 6) {
            showErrorMsg('비밀번호는 6자 이상이어야 합니다.', 'password');
            isValid = false;
        }

        // 성별 검사
        if (!gender) {
            showErrorMsg('성별을 선택하세요.', 'male'); // 남성 라벨에 붙임
            isValid = false;
        }

        // 약관 체크 검사
        if (!terms) {
            showErrorMsg('약관 동의가 필요합니다.', 'terms');
            isValid = false;
        }

        if(isValid) {
            alert('🎉 회원가입이 완료되었습니다!');
            form.reset();
        }
    });

    // 이메일 형식 검사 함수
    // 정규식
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // 에러 메시지 표시 함수
    function showErrorMsg(msg, inputId) {
        const inputEl = document.getElementById(inputId);
        if (!inputEl) return;
        let errorEl = document.createElement('div');
        errorEl.className = 'error-msg';
        errorEl.textContent = msg;
        errorEl.style.color = 'red';
        errorEl.style.fontSize = '13px';
        errorEl.style.marginBottom = '5px';

        // input 바로 아래에 에러 메시지 붙이기
        if (inputEl.parentNode) {
            // 이미 에러메시지가 붙어있으면 중복 방지
            if (!inputEl.nextElementSibling || !inputEl.nextElementSibling.classList.contains('error-msg')) {
                inputEl.parentNode.insertBefore(errorEl, inputEl.nextElementSibling);
            }
        }
        // 테두리 강조
        inputEl.style.borderColor = 'red';
    }

    // 에러 메시지 모두 지우기
    function removeErrorMsgs() {
        document.querySelectorAll('.error-msg').forEach(el => el.remove());
        form.querySelectorAll('input').forEach(input => input.style.borderColor = "#ddd");
    }
});