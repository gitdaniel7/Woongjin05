import React, { useState, useEffect } from "react";

function Headers({ setIsSearchOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = ["Menu", "Store", "What's New", "Story"];

  const submenus = {
    Menu: [
      "버거",
      "맥런치",
      "맥모닝",
      "해피 스낵",
      "사이드&디저트",
      "맥카페&음료",
      "해피밀",
    ],
    Store: ["\u00A0\u00A0\u00A0\u00A0매장찾기", "\u00A0\u00A0\u00A0\u00A0맥드라이브", "\u00A0\u00A0\u00A0\u00A0임차문의"],
    "What's New": ["\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0프로모션", "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0새로운 소식", "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0이달의 해피밀"],
    Story: [
      "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0브랜드 소개",
      "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0사회적 책임과 지원",
      "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0맥도날드 품질 이야기",
      "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0맥도날드 사람들",
    ],
  };

  const handleMouseEnterMenu = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeaveMenu = () => {
    setHoveredMenu(null);
  };
  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white border-b-[1px] border-b-[#ffbc0d] relative`}
      >
        <div
          className={`flex items-center justify-between max-w-[1168px] w-full mx-auto transition-all duration-300 ${
            scrolled ? "py-0" : "py-[30px]"
          }`}
        >
          {/* 로고 영역 - 고정 크기로 설정 */}
          <div className="w-[106px] flex items-center justify-center">
            <img
              src="https://www.mcdonalds.co.kr/kor/images/common/logo.png"
              alt="맥도날드 로고"
              className={`transition-all duration-300 ${
                scrolled ? "w-[51px]" : "w-[106px]"
              }`}
            />
          </div>

          {/* 메뉴 영역 - 로고 영역 다음에 위치 */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex">
              {menus.map((menu) => (
                <li
                  key={menu}
                  className="text-[#292929] text-[20px] leading-[80px] font-semibold pr-[70px] cursor-pointer hover:text-red-600"
                  onMouseEnter={() => setHoveredMenu(menu)}
                >
                  {menu}
                </li>
              ))}
            </ul>
          </nav>

          {/* 버튼 */}
          <div className="flex items-center space-x-1">
            <button
              className="inline-block w-20 pt-[2px] text-white text-[13px] font-semibold leading-[34px] text-center rounded-[48px] bg-[#db0007]"
              onClick={() =>
                (window.location.href =
                  "https://www.mcdonalds.co.kr/kor/store/rental.do")
              }
            >
              임차문의
            </button>
            <button
              className="inline-block w-20 pt-[2px] text-white text-[13px] font-semibold leading-[34px] text-center rounded-[48px] bg-[#d87e00]"
              onClick={() =>
                (window.location.href =
                  "https://www.mcdonalds.co.kr/kor/story/people/recruit.do")
              }
            >
              RECRUIT
            </button>
            <button
              className="inline-block w-20 pt-[2px] text-white text-[13px] font-semibold leading-[34px] text-center rounded-[48px] bg-[#264a36]"
              onClick={() =>
                (window.location.href =
                  "https://www.mcdonalds.co.kr/eng/main.do")
              }
            >
              ENG
            </button>
            <button
              className="w-20 h-[34px] bg-no-repeat bg-center bg-contain "
              style={{
                backgroundImage:
                  "url('https://www.mcdonalds.co.kr/kor/images/common/ico_search.png')",
              }}
              onClick={() => setIsSearchOpen(true)}
            >
              <span className="sr-only">검색</span>
            </button>
          </div>
        </div>

        {/* 서브메뉴 드롭다운 */}
        <div
          onMouseEnter={() => setHoveredMenu(hoveredMenu)} // 마우스 올라가 있으면 유지
          onMouseLeave={handleMouseLeaveMenu}
          style={{
            width: "100%",
            height: "300px",
            position: "absolute",
            backgroundColor: "white",
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: "lightgray",
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: "#ffbc0d",
            zIndex: 49,
            display: hoveredMenu ? "block" : "none",
          }}
        >
          <div className="max-w-[1168px] w-full mx-auto h-full flex">
            {/* 로고 영역과 동일한 너비의 여백 */}
            <div className="w-[106px]"></div>

            {/* 서브메뉴 컨테이너 - 대메뉴와 동일한 시작 위치 */}
            <div className="flex-1 flex justify-center ml-[5px]">
              <div className="flex h-full ">
                {Object.entries(submenus).map(([menuName, submenuItems]) => (
                  <ul key={menuName} className="space-y-2 ">
                    <li className="font-bold mb-2"></li>
                    {submenuItems.map((item) => (
                      <li
                        key={item}
                        className="cursor-pointer hover:text-red-600"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            {/* 버튼 영역과 동일한 너비의 여백 */}
            <div className="w-[320px]"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Headers;