import React, { useState } from 'react';

function MainBanner() {
    const slides = [
        { id: 1, imageUrl: 'https://www.mcdonalds.co.kr/upload/main/banner/1753275204237.jpg', alt: '배너1' },
        { id: 2, imageUrl: 'https://www.mcdonalds.co.kr/upload/main/banner/1751352714421.jpg', alt: '배너2' },
        { id: 3, imageUrl: 'https://www.mcdonalds.co.kr/upload/main/banner/1747819252807.jpg', alt: '배너3' }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    }

    const nextSlide = () => {
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }

    return (
        <div className="relative overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${slides.length * 100}%` }}>

                {slides.map(({ id, imageUrl, alt }) => (
                    <img
                        key={id}
                        src={imageUrl}
                        alt={alt}
                        className={`flex-shrink-0 object-cover pointer-events-none`}
                        style={{ width: `${100 / slides.length}%` }}
                    />
                ))}
            </div>

            {/* 이전버튼 */}
            <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-0 w-[90px] h-[90px] overflow-hidden z-10 -mt-[45px] bg-white bg-opacity-70 p-0 hover:bg-opacity-100 transition -translate-y-1/2"
            style={{ background: `url('https://www.mcdonalds.co.kr/kor/images/main/bg_swiper_new.png') 0 0 no-repeat`}}><span className="sr-only">Previous</span></button>
            <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-0 w-[90px] h-[90px] overflow-hidden z-10 -mt-[45px] bg-white bg-opacity-70 p-0 hover:bg-opacity-100 transition -translate-y-1/2"
            style={{ background: `url('https://www.mcdonalds.co.kr/kor/images/main/bg_swiper_new.png') 0 -90px no-repeat `}}><span className="sr-only">Next</span></button>
        </div>



    )
}

export default MainBanner;