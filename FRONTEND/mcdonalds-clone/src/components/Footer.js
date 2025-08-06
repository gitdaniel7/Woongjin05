import React from 'react';
const footerLinks=[
    {label: '개인정보처리방침', url:''},
    {label: '사이트맵', url:''},
    {label: '임차문의', url:''},
    {label: '고객문의', url:''},
    {label: '인재채용', url:''}
]

const socialLinks=[
    {label:'페이스북', url:'', icon: ''},
    {label:'인스타그램', url:'', icon: ''},
    {label:'유튜브', url:'', icon: ''},
    {label:'카카오스토리', url:'', icon: ''},
    {label:'한국디지털접근성진흥원', url:'', icon: ''}
]
function Footer(){
    return(
        <footer>
            <nav>
                {footerLinks.map(({label,url}) =>(
                    <a key={label} href={url} className='footer-link'>{label}</a>
                ))}
            </nav>

            <div className='footer-social'>
                {socialLinks.map(({label,url,icon})=>(
                    <a key={label} href={url} className='social-link'>
                        {icon}
                    </a>
                ))}
            </div>

            <div className='footer-comapany-info'>
                <p>한국맥도날드(유)</p>
                <p>대표이사: 김기원</p>
                <p>사업자등록번호: 101-81-26409</p>
                <p>전화주문: 1600-5252</p>
                <p>COPYRIGHT © 2019 ALL RIGHTS RESERVED BY McDonald's.</p>
            </div>
        </footer>
    );
}

export default Footer;