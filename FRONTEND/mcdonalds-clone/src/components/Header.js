import React, {useState, useEffect} from "react";

function Headers({setIsSearchOpen}){
    const [scrolled, setScrolled]= useState(false);

    useEffect(()=>{
        function handleScroll(){
            if (window.scrollY>0){
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",handleScroll);
        return () =>window.removeEventListener("scroll",handleScroll);
    },[]);


    return (
        <header className={`sticky top-0 z-50 bg-white`}>
            <div className= {`flex items-center justify-between max-w-[1168px] w-full mx-auto transition-all duration-300 ${
          scrolled ? "py-0" : "py-[30px]"
        }`}>
                {/* 로고 */}
                <div>
                    <img src="https://www.mcdonalds.co.kr/kor/images/common/logo.png" alt="맥도날드 로고" className={`transition-all duration-300 ${scrolled ? "w-[51px]" : "w-[106px]"}`}/>
                </div>


                {/* 메뉴 */}
                <nav>
                    <ul className="flex">
                        <li className="text-[#292929] text-[20px] leading-[80px] font-semibold pr-[85px] cursor-pointer hover:text-red-600">Menu</li>
                        <li className="text-[#292929] text-[20px] leading-[80px] font-semibold pr-[85px] cursor-pointer hover:text-red-600">Store</li>
                        <li className="text-[#292929] text-[20px] leading-[80px] font-semibold pr-[85px] cursor-pointer hover:text-red-600">What's New</li>
                        <li className="text-[#292929] text-[20px] leading-[80px] font-semibold pr-[85px] cursor-pointer hover:text-red-600">Story</li>
                    </ul>
                </nav>


                {/* 버튼 */}
                <div className="flex items-center space-x-1">
                    <button className="inline-block w-20 pt-[2px] text-white text-[13px] font-semibold leading-[34px] text-center rounded-[48px] bg-[#db0007]">임차문의</button>
                    <button className="inline-block w-20 pt-[2px] text-white text-[13px] font-semibold leading-[34px] text-center rounded-[48px] bg-[#d87e00]">RECRUIT</button>
                    <button className="inline-block w-20 pt-[2px] text-white text-[13px] font-semibold leading-[34px] text-center rounded-[48px] bg-[#264a36]">ENG</button>
                    <button className="w-20 h-[34px] bg-no-repeat bg-center bg-contain " style={{backgroundImage: "url('https://www.mcdonalds.co.kr/kor/images/common/ico_search.png')"}} onClick={()=>setIsSearchOpen(true)}><span className="sr-only">검색</span></button>
                </div>
            </div>
        </header>
    )
}

export default Headers;