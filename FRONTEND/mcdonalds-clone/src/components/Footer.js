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
  { label: '한국디지털접근성진흥원', url: 'http://kdaa.or.kr/CertificationSite/WA/2200/Detail', iconUrl: 'https://www.mcdonalds.co.kr/kor/images/common/web_accessibility.png' }
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
        <div className="text-xm text-gray-400 space-y-[6px] text-left mx-auto">
          <p>한국맥도날드(유)</p>
          <p>대표이사: 김기원</p>
          <p>사업자등록번호: 101-81-26409</p>
          <p>전화주문: 1600-5252</p>
          <p>COPYRIGHT © 2019 ALL RIGHTS RESERVED BY McDonald's.</p>
        </div>

        {/* 오른쪽 영역: 소셜 링크, 추가 콘텐츠, 회사 정보 */}
        <div className="flex flex-col items-end space-y-6 min-w-[280px]">

          {/* 소셜 링크 */}
          <div className="flex space-x-4 pr-[70px]">
            {socialLinks.map(({ label, url, bgPos, iconUrl }) => (
              <a
                key={label}
                href={url}
                className="block w-[40px] h-[40px] overflow-hidden bg-no-repeat cursor-pointer"
                style={{
                  backgroundImage: iconUrl ? `url(${iconUrl})` : `url('https://www.mcdonalds.co.kr/kor/images/common/ico_sns.png')`,
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
          <div className=" flex w-full max-w-[340px]  text-xs">
            <div><img className='w-[60px] h-[60px] bg-white rounded-[4px]' src='https://www.mcdonalds.co.kr/kor/images/common/web_isms.png' alt='정보보호관리체계'/></div>
            <div>
              <nav>
                <ul>
                  <li className='pl-[20px]'>[인증범위 : 대외서비스(홈페이지, 맥딜리버리, 채용, VOC,<br/>쿠폰앱)(심사받지 않은 물리적 인프라 영역 제외)]</li>
                  <li className='pl-[20px]'>[유효기간 : 2024. 08. 07. ~ 2027. 08. 06.]</li>
                </ul>
              </nav>
            </div>
          </div>


        </div>
      </div>
    </footer>
  );
}

export default Footer;
