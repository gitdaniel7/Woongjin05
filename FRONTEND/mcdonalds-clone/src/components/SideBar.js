import React from 'react';

export default function Sidebar() {
  return (
    <>
      {/* 첫 번째 버튼: 링크 이동 */}
      <button
        onClick={() => window.location.href = 'https://www.mcdonalds.co.kr/kor/story/competition/farmToRestaurant.do'}
        className="
          fixed
          bottom-[250px]
          right-5
          block
          w-[121px]
          h-[121px]
          overflow-hidden
          bg-no-repeat
          bg-[url('https://www.mcdonalds.co.kr/kor/images/common/btn_story_04.png')]
          bg-center
          bg-top
          cursor-pointer
        "
        style={{ textIndent: '-9999px' }}
        aria-label="사이드바 버튼"
      >
        버튼텍스트
      </button>

      {/* 두 번째 버튼: 화면 맨 위로 스크롤 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="
          fixed
          bottom-[100px]
          right-5
          block
          w-[121px]
          h-[121px]
          overflow-hidden
          bg-no-repeat
          bg-[url('https://www.mcdonalds.co.kr/kor/images/common/btn_top_04.png')]
          bg-center
          bg-top
          cursor-pointer
        "
        style={{ textIndent: '-9999px' }}
        aria-label="스크롤 탑 버튼"
      >
        버튼텍스트
      </button>
    </>
  );
}
