import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import SearchModal from '../components/SearchModal';
import MainBanner from '../components/MainBanner';
import LiveSection from '../components/LiveSection';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';

function Home() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const footerRef = useRef(null); // ✅ 수정된 부분

    return (
        <>
            <Header setIsSearchOpen={setIsSearchOpen} />
            
            {/* 검색모달 */}
            {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}

            {/* 메인베너(캐러셀) */}
            <MainBanner />

            {/* 라이브섹션(카드들) */}
            <LiveSection />

            {/* 사이드바 */}
            <SideBar footerRef={footerRef} />

            {/* 푸터 */}
            <Footer ref={footerRef} />
        </>
    );
}

export default Home;
