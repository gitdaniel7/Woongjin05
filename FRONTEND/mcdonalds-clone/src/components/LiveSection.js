import React from 'react';

function LiveCard({ card }) {
    return (
        <div>
            <img src={card.image} alt={card.title} className="live-card-image" />
            <div className="live-card-content">
                <p>{card.description}</p>
            </div>
        </div>
    )
}

export default function LiveSection() {
    const liveCardsData = [
        {
            id: 1,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1751352624941.jpg",
            title: "익산 고구마 모짜렐라 버거",
            description: "부드러운 고구마 크로켓에 코소한 치즈가 쏙!",
        },
        {
            id: 2,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1753316622014.jpg",
            title: "한국의 맛 춘식이 팩 출시!",
            description: "익산 고구마 모짜렐라 버거와 함께 귀여운 춘식이를 만나보세요!",
        },
        {
            id: 3,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1747819170133.jpg",
            title: "맥드라이브 vip클럽",
            description: "맥드라이브에서 스페셜팩 구매하고 VIP 클럽 회원이 되어보세요!",
        },
        {
            id: 4,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1749548602338.jpg",
            title: "클래식핫도그",
            description: "두툼한 소시지로 든든하게! NEW 클래식 핫도그",
        },
        {
            id: 5,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1746003326777.jpg",
            title: "맥윙",
            description: "겉은 바삭! 속은 쫄깃! 겉바속쫄 맥윙",
        },
        {
            id: 6,
            image:
                "https://www.mcdonalds.co.kr/upload/main/card/1753838759065.jpg",
            title: "1955 스낵랩",
            description: "맥도날드 대표 인기 간식을 가성비 맛집 해피스낵으로 만나요!",
        }
    ]
    return (
        <section className="py-8">
            <h2 className="text-2xl font-bold mb-6 text-left">McDonald's LIVE</h2>
            <div className="flex justify-center">
                <div 
                className="grid grid-cols-3 gap-x-[24px] gap-y-[32px] max-w-[960px]"
                style={{ gap: '24px 32px' }} >
                    {liveCardsData.map((card) => (
                        <LiveCard key={card.id} card={card} />
                    ))}
                </div>
            </div>

        </section>
    );
}