import React, { useState } from "react";
import CardComponent from "./components/CardComponent";

function App() {
  const [cardData] = useState([
    {
      title: "지금입기~색감원피스 무더위에 한벌로딱좋아",
      price: "65,000원",
      discount: "",
      image: "/왼쪽 위.png",
      description: "잼마월드",
    },
    {
      title: "여름 침대위의 작은변화~ 냉감침대패드 특가!",
      price: "31,900원",
      discount: "68%",
      image: "/오른쪽 위.png",
      description: "아이르",
    },
    {
      title: "바로발송! 여름내내 입어 1+1 예쁜핏 여름원피스",
      price: "37,000원",
      discount: "24%",
      image: "/왼쪽 아래.png",
      description: "미나그램",
    },
    {
      title: "선화동 매운실비김치 신상매콤 달콤 옛날떡볶이",
      price: "16,000원",
      discount: "",
      image: "/오른쪽 아래.png",
      description: "선화동 매운김치",
    },
  ]);

  return (
    <div>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-left">신상 위크</li>
          <li className="nav-center">
            한정수량 켄우드 핸드믹서 네이버에서만 단독 선 론칭 특가&혜택
          </li>
          <li className="nav-right">마이쇼핑</li>
        </ul>
      </nav>

      <div className="card-container">
        {cardData.map((item, idx) => (
          <CardComponent
            key={idx}
            title={item.title}
            price={item.price}
            discount={item.discount}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
