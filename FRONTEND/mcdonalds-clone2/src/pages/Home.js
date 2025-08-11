import React, { useState, useRef } from "react";
import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import MainBanner from "../components/MainBanner";
import LiveSection from "../components/LiveSection";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const footerRef = useRef(null);

  return (
    <>
      <Header setIsSearchOpen={setIsSearchOpen} />

      {/* 검색모달 */}
      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}

      {/* 메인베너(캐러셀) */}
      <MainBanner />

      {/* 라이브섹션(카드들) */}
      <LiveSection />

      {/* 푸터 */}
      <Footer ref={footerRef} />

      {/* 사이드바 - 푸터와 독립적으로 동작 */}
      <SideBar footerRef={footerRef} />
    </>
  );
}

export default Home;
