import React,{useState} from 'react';
import Header from '../components/Header'
import SearchModal from '../components/SearchModal';
import MainBanner from '../components/MainBanner';
import LiveSection from '../components/LiveSection';
import Footer from '../components/Footer';
import Sidebar from '../components/SideBar';
function Home() {
    const [isSearchOpen,setIsSearchOpen]=useState(false);
    return (
        <>
            <Header setIsSearchOpen={setIsSearchOpen}/>
            {/* 검색모달 */}
            {isSearchOpen && <SearchModal onClose={()=> setIsSearchOpen(false)} />}

            {/* 메인베너(캐러셀)   */}
            <MainBanner/>

            {/* 라이브섹션(카드들) */}
            <LiveSection/>

            {/* 사이드바 */}
            <Sidebar/>

            {/* 푸터 */}
            <Footer className="mt-[1000px]"/>
        </>
    )
}

export default Home;