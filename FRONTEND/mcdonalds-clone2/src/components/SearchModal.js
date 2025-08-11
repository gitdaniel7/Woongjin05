import React, { useEffect, useState } from 'react';

function SearchModal({ onClose }) {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = searchTerm.trim();
        if (!trimmed) return; // 빈 검색어면 무시

        const encodedTerm = encodeURIComponent(trimmed);
        const url = `https://www.mcdonalds.co.kr/kor/search.do?q=${encodedTerm}`;

        window.location.href = url; // 현재 탭에서 검색페이지 열기
        // window.open(url, '_blank'); // 새탭으로 열고 싶으면 이걸로 교체

        onClose(); // 모달 닫기
    };
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose}>
            <form
                className="bg-white rounded-lg p-6 w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
                onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
                    placeholder="매장 또는 메뉴정보를 검색하실 수 있습니다."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoFocus />
                <div className="mt-4 flex justify-between">
                    <button 
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded">검색하기</button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded">X</button>
                </div>

            </form>
        </div>
    )
}

export default SearchModal;