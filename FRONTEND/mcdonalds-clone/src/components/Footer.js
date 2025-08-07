import React from 'react';

const footerLinks = [
  { label: '개인정보처리방침', url: 'https://www.mcdonalds.co.kr/kor/etc/private.do' },
  { label: '사이트맵', url: 'https://www.mcdonalds.co.kr/kor/etc/sitemap.do' },
  { label: '임차문의', url: 'https://www.mcdonalds.co.kr/kor/store/rental.do' },
  { label: '고객문의', url: 'https://voc.mcd.co.kr/MC/HOM/faqMain.jsp' },
  { label: '인재채용', url: 'https://www.mcdonalds.co.kr/kor/story/people/recruit.do' }
];

const socialLinks = [
  { label: '페이스북', url: 'https://www.facebook.com/McDonaldsKorea', bgPos: '0 0' },
  { label: '인스타그램', url: 'https://www.instagram.com/mcdonalds_kr/', bgPos: '0 -40px' },
  { label: '유튜브', url: 'https://www.youtube.com/user/McDonaldsKor', bgPos: '0 -80px' },
  { label: '카카오스토리', url: 'https://story.kakao.com/ch/mcdonalds/feed', bgPos: '0 -120px' },
  { label: '한국디지털접근성진흥원', url: 'http://kdaa.or.kr/CertificationSite/WA/2200/Detail',iconUrl: 'https://www.mcdonalds.co.kr/kor/images/common/web_accessibility.png' } 
];

function Footer() {
  return (
    <footer className="bg-[#292929] text-white py-8">
      <div className="w-[1168px] mx-auto flex justify-between">

        {/* 푸터 링크: 세로 배열 */}
        <nav className="flex flex-col space-y-2">
          {footerLinks.map(({ label, url }) => (
            <a
             key={label}
    href={url}
    className={`footer-link hover:underline ${label === '개인정보처리방침' ? 'text-yellow-400' : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* 회사 정보 - 가운데 정렬 */}
          <div className="text-xs text-gray-400 space-y-1 text-center mx-auto">
            <p>한국맥도날드(유)</p>
            <p>대표이사: 김기원</p>
            <p>사업자등록번호: 101-81-26409</p>
            <p>전화주문: 1600-5252</p>
            <p>COPYRIGHT © 2019 ALL RIGHTS RESERVED BY McDonald's.</p>
          </div>

        {/* 오른쪽 영역: 소셜 링크, 추가 콘텐츠, 회사 정보 */}
        <div className="flex flex-col items-end space-y-6 min-w-[280px]">

          {/* 소셜 링크 */}
          <div className="flex space-x-4">
            {socialLinks.map(({ label, url, bgPos,iconUrl }) => (
              <a
                key={label}
                href={url}
                className="block w-[40px] h-[40px] overflow-hidden bg-no-repeat cursor-pointer"
                style={{
                  backgroundImage: iconUrl? `url(${iconUrl})`: `url('https://www.mcdonalds.co.kr/kor/images/common/ico_sns.png')`,
                  backgroundPosition: iconUrl ? 'center' : bgPos,
                  textIndent: '-9999px'
                }}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ))}
          </div>

          {/* 추가 콘텐츠 */}
          <div className="w-full max-w-[250px] bg-[#3a3a3a] p-4 rounded text-sm">
            추가 콘텐츠 영역입니다. 예: 푸터 공지, 뉴스레터 구독 박스, 광고 등
          </div>

          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
