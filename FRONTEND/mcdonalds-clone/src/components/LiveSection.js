import React, { useState } from 'react';

function LiveCard({ card }) {
    return (
        <a
            href={card.url}
            className="cursor-pointer"
        >
            <div className="block overflow-hidden h-full rounded-lg shadow-[0_3px_4px_rgba(0,0,0,0.1)]">
                <img src={card.image} alt={card.title} className="live-card-image" />
                <div className="live-card-content">
                    <p className="text-base font-medium leading-[1.9] py-[24px] px-[30px] mb-[24px]">{card.description}</p>
                </div>
            </div>
        </a>
    )
}

export default function LiveSection() {

    const [showAll, setShowAll] = useState(false);

    const liveCardsData = [
        {
            id: 1,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1751352624941.jpg",
            title: "익산 고구마 모짜렐라 버거",
            description: "부드러운 고구마 크로켓에 코소한 치즈가 쏙!",
            url: "https://www.mcdonalds.co.kr/kor/promotion/detail.do?seq=590&utm_medium=pc_corp_site&utm_source=Main_cardblock&utm_campaign=2025_TOKgold"
        },
        {
            id: 2,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1753316622014.jpg",
            title: "한국의 맛 춘식이 팩 출시!",
            description: "익산 고구마 모짜렐라 버거와 함께 귀여운 춘식이를 만나보세요!",
            url: "https://www.mcdonalds.co.kr/kor/promotion/detail.do?seq=592&utm_medium=pc_corp_site&utm_source=Main_cardblock&utm_campaign=2025_TOKgoldGoods"
        },
        {
            id: 3,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1747819170133.jpg",
            title: "맥드라이브 vip클럽",
            description: "맥드라이브에서 스페셜팩 구매하고 VIP 클럽 회원이 되어보세요!",
            url: "https://www.mcdonalds.co.kr/kor/promotion/detail.do?seq=580&utm_medium=pc_corp_site&utm_source=Main_cardblock&utm_campaign=2025_DT"
        },
        {
            id: 4,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1749548602338.jpg",
            title: "클래식핫도그",
            description: "두툼한 소시지로 든든하게! NEW 클래식 핫도그",
            url: "https://www.mcdonalds.co.kr/kor/promotion/detail.do?seq=585%20&utm_medium=pc_corp_site&utm_source=Main_cardblock&utm_campaign=2025HotDog"
        },
        {
            id: 5,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1746003326777.jpg",
            title: "맥윙",
            description: "겉은 바삭! 속은 쫄깃! 겉바속쫄 맥윙",
            url: "https://www.mcdonalds.co.kr/kor/promotion/detail.do?seq=578&utm_medium=pc_corp_site&utm_source=Main_cardblock&utm_campaign=2025_McWing"
        },
        {
            id: 6,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1753838759065.jpg",
            title: "1955 스낵랩",
            description: "맥도날드 대표 인기 간식을 가성비 맛집 해피스낵으로 만나요!",
            url: "https://www.mcdonalds.co.kr/kor/promotion/detail.do?seq=593&utm_medium=pc_corp_site&utm_source=Main_cardblock&utm_campaign=2025_BAQ2_ICT"
        },
        {
            id: 7,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1742460815455.jpg",
            title: "망고 피치 아이스티",
            description: "우바산 홍차와 과일의 만남! 향긋 달콤한 아이스티",
            url: "https://www.mcdonalds.co.kr/kor/promotion/detail.do?seq=566&utm_medium=pc_corp_site&utm_source=Main_cardblock&utm_campaign=2025_ICET"
        },
        {
            id: 8,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1740559562878.jpg",
            title: "맥크리스피 디럭스 버거",
            description: "빠삭하게빠져드는 맛, 맥크리스피",
            url: "https://www.mcdonalds.co.kr/kor/menu/detail.do?seq=469&sub_category_seq=1"
        },
        {
            id: 9,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1740559884904.jpg",
            title: "베이컨 토마토 에그 머핀",
            description: "갓 구워내 따뜻하고 신선한 베이컨 토마토 에그 머핀!",
            url: "https://www.mcdonalds.co.kr/kor/menu/detail.do?page=1&seq=366&sub_category_seq=4&utm_medium=Corp_site&utm_source=Main_cardblock&utm_campaign=0225_BLT_Egg_Muffin"
        },
        {
            id: 10,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1749796318035.jpg",
            title: "당신을 위해",
            description: "당신을 위해 방금 만든 맛있는 버거",
            url: "https://www.mcdonalds.co.kr/kor/promotion/detail.do?seq=587&utm_medium=pc_corp_site&utm_source=Main_cardblock&utm_campaign=MadeForYou"
        },
        {
            id: 11,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1740559650843.jpg",
            title: "맥도날드 크루&매니저 모집",
            description: "맥도날드와 함께 성장할 크루와 매니저를 찾습니다",
            url: "https://mcdonalds.recruiter.co.kr/career/home"
        },
        {
            id: 12,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1740559787721.jpg",
            title: "맥도날드 품질 이야기",
            description: "우리가 엄격해질수록 버거는 더 맛있어지니까!",
            url: "https://www.mcdonalds.co.kr/kor/story/competition/farmToRestaurant.do?utm_medium=Corp_site&utm_source=Main_cardblock_quality&utm_campaign=0127_BB"
        }
    ]
    const cardsToShow = showAll ? liveCardsData :
        liveCardsData.slice(0, 6);



    return (
        <section className="py-8">
            <h2 className="text-2xl font-bold mb-6 text-center mr-[750px] mb-[50px]">McDonald's LIVE</h2>
            <div className="flex justify-center">
                <div
                    className="grid grid-cols-3 gap-x-[24px] gap-y-[32px] max-w-[960px]"
                    style={{ gap: '24px 32px' }} >
                    {cardsToShow.map((card) => (
                        <LiveCard key={card.id} card={card} />
                    ))}
                </div>
            </div>

            {!showAll && (
                <div className="flex justify-center mt-8">
                    <button
                        type="button"
                        onClick={() => setShowAll(true)}
                        className="
        inline-block 
        w-[90px] h-[90px]
        overflow-hidden 
        align-top 
        text-[0px]
        bg-no-repeat 
        bg-[url('https://www.mcdonalds.co.kr/kor/images/common/btn_more.png')] 
        bg-left-top
      "
                    >
                        더보기
                    </button>
                </div>
            )}


        </section>
    );
}
