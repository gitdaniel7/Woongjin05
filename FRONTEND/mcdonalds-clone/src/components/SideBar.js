import React, { useEffect, useRef, useState } from 'react';

const SideBar = ({ footerRef }) => {
  const sideBarRef = useRef(null);
  const sideBarBottomFixed = 100; // fixed 상태에서 아래에서 떨어진 거리(px)

  const [isFixed, setIsFixed] = useState(true);
  const [bottom, setBottom] = useState(`${sideBarBottomFixed}px`);
  const [top, setTop] = useState('auto');

  useEffect(() => {
    const handleScroll = () => {
      if (!sideBarRef.current || !footerRef.current) return;

      const sideBarHeight = sideBarRef.current.offsetHeight;
      const footerTop = footerRef.current.getBoundingClientRect().top;
      // fixed일 때 사이드바 하단 위치(window.innerHeight - bottom + height)
      const sideBarBottom = window.innerHeight - sideBarBottomFixed + sideBarHeight;

      if (footerTop < sideBarBottom) {
        // 푸터와 겹치면 absolute로 변경하고 푸터 위에서 200px 위로 띄움
        setIsFixed(false);
        setTop(`${footerTop - sideBarHeight - 200}px`);
        setBottom('auto');
      } else {
        // fixed 모드, 화면 오른쪽 맨 아래에서 100px 위 고정
        setIsFixed(true);
        setBottom(`${sideBarBottomFixed}px`);
        setTop('auto');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 처음 마운트 시 위치 체크

    return () => window.removeEventListener('scroll', handleScroll);
  }, [footerRef]);

  return (
    <div
      ref={sideBarRef}
      className={`right-5 w-[121px] z-50 ${isFixed ? 'fixed' : 'absolute'}`}
      style={{
        top: isFixed ? 'auto' : top,
        bottom: isFixed ? bottom : 'auto',
      }}
    >
      <button
        onClick={() => window.location.href = 'https://www.mcdonalds.co.kr/kor/story/competition/farmToRestaurant.do'}
        className="w-[121px] h-[121px] mb-5 bg-no-repeat bg-center cursor-pointer border-none bg-transparent"
        style={{ backgroundImage: "url('https://www.mcdonalds.co.kr/kor/images/common/btn_story_04.png')" }}
        aria-label="사이드바 버튼"
      />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-[121px] h-[121px] bg-no-repeat bg-center cursor-pointer border-none bg-transparent"
        style={{ backgroundImage: "url('https://www.mcdonalds.co.kr/kor/images/common/btn_top_04.png')" }}
        aria-label="스크롤 탑 버튼"
      />
    </div>
  );
};

export default SideBar;
