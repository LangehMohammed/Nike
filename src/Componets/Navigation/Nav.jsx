import './Nav.css'
import Filler from './Filler'
import Headroom from 'react-headroom'
import Help from '../../Database/Help';
import { btn, jordan, jordan_section1, kids_section2, kids_section3, kids_section4, kids_section5, main_section1, main_section2, men_section2, men_section4, men_section5, men_women_section3, new_featured, sales, women_section2, women_section4, women_section5 } from '../../Database/Navigation';
import Btn from './Btn';

function Nav() {

    function rederFilter(data){
        return data.map(({id, title, cont1, cont2, cont3, cont4, cont5, cont6, cont7, cont8, cont9, cont10, cont11, cont12, cont13, cont14}) =>(
            <Filler key={id}
            title = {title}
            cont1 = {cont1}
            cont2 = {cont2}
            cont3 = {cont3}
            cont4 = {cont4}
            cont5 = {cont5}
            cont6 = {cont6}
            cont7 = {cont7}
            cont8 = {cont8}
            cont9 = {cont9}
            cont10 = {cont10}
            cont11 = {cont11}
            cont12 = {cont12}
            cont13 = {cont13}
            cont14 = {cont14}
            />
        ));
    }

    function renderBtn(data){
        return data.map(({id, title}) => (
            <Btn key={id}
            title = {title}
            />
        ))
    }

    const result = rederFilter(Help)
    const Featured = rederFilter(new_featured)
    const MainSection1 = rederFilter(main_section1)
    const MainSection2 = rederFilter(main_section2)
    const MenSection2 = rederFilter(men_section2)
    const MenWomenSection3 = rederFilter(men_women_section3)
    const MenSection4 = rederFilter(men_section4)
    const MenSection5 = rederFilter(men_section5)
    const WomenSection2 = rederFilter(women_section2)
    const WomenSection4 = rederFilter(women_section4)
    const WomenSection5 = rederFilter(women_section5)
    const KidsSection2 = rederFilter(kids_section2)
    const KidsSection3 = rederFilter(kids_section3)
    const KidsSection4 = rederFilter(kids_section4)
    const KidsSection5 = rederFilter(kids_section5)
    const Sales = rederFilter(sales)
    const Jordan = rederFilter(jordan)
    const JordanSection1 = rederFilter(jordan_section1)
    const RenderBtn = renderBtn(btn)

    return(
            <div className="container-1">
                <div className="wrapper">
                    <div className="minmin-nav">
                        <ul className="first-child">
                            <li>
                                <a href="#" className='a-icons'>
                                    <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                                        <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='a-icons'>
                                    <svg height="24px" width="24px" fill="#111" viewBox="0 0 39 33">
                                        <path d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <ul className="last-child">
                            <li>
                                <a href="#" className='a find'>Find a Store</a>
                                <span>|</span>
                            </li>
                            <li className='help'>
                                <a href="#" className='a'>Help</a>
                                <span>|</span>
                                <div className="help-drop-down">
                                    <div className="help-wrapper">
                                        { result }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" className='a'>Join Us</a>
                                <span>|</span>
                            </li>
                            <li>
                                <a href="#" className='a'>Sign In</a>
                            </li>
                        </ul>
                    </div>
                    <header className='main-nav'>
                        <div className="wrapper-header">
                            <div className="logo-main">
                                <a href="#">
                                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                        <path fill="currentColor" fillRule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="nav-windows-view">
                                <div className="navigation">
                                    <ul className='navigation-ul'>
                                        <li className='navigation-children'>
                                            <a href="#" className="navigaiton-children-content New-Featured">
                                                New & Featured
                                            </a>
                                            <div className="children-dropdown New-Featured-dropdown">
                                                <div className="children-dropdown-wrapper">
                                                    { Featured }
                                                </div>
                                            </div>
                                        </li>
                                        <li className='navigation-children'>
                                            <a href="#" className="navigaiton-children-content Men">
                                                Men
                                            </a>
                                            <div className="children-dropdown Men-dropdown">
                                                <div className="children-dropdown-wrapper">
                                                    { MainSection1 }
                                                    <div className="section">
                                                        { MenSection2 }
                                                    </div>
                                                    { MenWomenSection3 }
                                                    <div className="section">
                                                        { MenSection4}
                                                    </div>
                                                    { MenSection5}
                                                </div>
                                            </div>
                                        </li>
                                        <li className='navigation-children'>
                                            <a href="#" className="navigaiton-children-content Women">
                                                Women
                                            </a>
                                            <div className="children-dropdown Women-dropdown">
                                                <div className="children-dropdown-wrapper">
                                                    { MainSection2 }
                                                    <div className="section">
                                                        { WomenSection2 }
                                                    </div>
                                                    { MenWomenSection3 }
                                                    <div className="section">
                                                        { WomenSection4}
                                                    </div>
                                                    { WomenSection5}
                                                </div>
                                            </div>
                                        </li>
                                        <li className='navigation-children'>
                                            <a href="#" className="navigaiton-children-content Kids">
                                                Kids
                                            </a>
                                            <div className="children-dropdown Kids-dropdown">
                                                <div className="children-dropdown-wrapper">
                                                    { MainSection1 }
                                                    <div className="section">
                                                        { KidsSection2 }
                                                    </div>
                                                    <div className="section">
                                                        { KidsSection3 }
                                                    </div>
                                                    <div className="section">
                                                        { KidsSection4}
                                                    </div>
                                                    <div className="section">
                                                        { KidsSection5 }
                                                    </div>
                                                </div></div>
                                        </li>
                                        <li className='navigation-children'>
                                            <a href="#" className="navigaiton-children-content Sale">
                                                Sale
                                            </a>
                                            <div className="children-dropdown Sale-dropdown">
                                                <div className="children-dropdown-wrapper">
                                                    { Sales }
                                                </div>
                                            </div>
                                        </li>
                                        <li className='navigation-children'>
                                            <a href="#" className="navigaiton-children-content Jordan">
                                                Jordan
                                            </a>
                                            <div className="children-dropdown Jordan-dropdown">
                                                <div className="children-dropdown-wrapper">
                                                    { Jordan }
                                                    <div className="section">
                                                        { JordanSection1 }
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navigation-end">
                                    <div className='search-box-wrapper'>
                                        <input type="text" placeholder="Search"/>
                                        <button className='search-btn'>
                                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                <path stroke="currentColor" strokeWidth="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <a href="#" className="icons-btn icons-btn-firts">
                                        <span>
                                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                <path stroke="currentColor" strokeWidth="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path>
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="#" className="icons-btn">
                                        <span>
                                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                <path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="nav-mobile-view">
                                <button className='search-btn icons-btn'>
                                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                        <path stroke="currentColor" strokeWidth="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path>
                                    </svg>
                                </button>
                                <a href="#" className='icons-btn'>
                                    <span>
                                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                            <path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
                                        </svg>
                                    </span>
                                </a>
                                <a href="#" className='icons-btn'>
                                    <span>
                                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" data-var="glyph">
                                            <path fill="currentColor" d="M12 3a4.5 4.5 0 00-4.5 4.5H9a3 3 0 013-3V3zM7.5 7.5A4.5 4.5 0 0012 12v-1.5a3 3 0 01-3-3H7.5zM12 12a4.5 4.5 0 004.5-4.5H15a3 3 0 01-3 3V12zm4.5-4.5A4.5 4.5 0 0012 3v1.5a3 3 0 013 3h1.5zM4.5 21v-3H3v3h1.5zm0-3a3 3 0 013-3v-1.5A4.5 4.5 0 003 18h1.5zm3-3h9v-1.5h-9V15zm9 0a3 3 0 013 3H21a4.5 4.5 0 00-4.5-4.5V15zm3 3v3H21v-3h-1.5z"></path>
                                        </svg>
                                    </span>
                                </a>
                                <button className='ham-menu-btn icons-btn'>
                                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                        <path stroke="currentColor" strokeWidth="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
                                    </svg>
                                </button>
                                <div className="ham-menu">
                                    <div className="ham-menu-wrapper">
                                        <button className="exit">
                                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="18px" height="18px" fill="none">
                                                <path stroke="currentColor" strokeWidth="1.5" d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945"></path>
                                            </svg>
                                        </button>
                                        { RenderBtn }
                                        <div className="menu-footer">
                                            <div className="brand-menu">
                                                <ul className="brand">
                                                    <li className="brand-name">
                                                        <a href="" className="brand-wrapper">
                                                            <span>
                                                                <svg height="30px" width="30px" fill="#111" viewBox="0 0 26 32">
                                                                    <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path>
                                                                </svg>
                                                            </span>
                                                            <p className='title'>Jordan</p>
                                                        </a>
                                                    </li>
                                                    <li className="brand-name">
                                                        <a href="" className="brand-wrapper">
                                                            <span>
                                                                <svg height="30px" width="30px" fill="#111" viewBox="0 0 39 33">
                                                                    <path d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z"></path>
                                                                </svg>
                                                            </span>
                                                            <p className='title'>Converse</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="headline-learn-more-container">
                                                <span className="headline">Become a Nike Member for the best products, inspiration and stories in sport. <a href="#" className="learn-more">Learn more</a></span>
                                                <div className="js-btn-container">
                                                    <a href="#" className="js-btn"><span>Join Us</span></a>
                                                    <a href="#" className="js-btn"><span>Sign In</span></a>
                                                </div>
                                            </div>
                                            <div className="group-btn">
                                                <ul>
                                                    <li className="btn-wrapper">
                                                        <a href="#" className="btn">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                                    <path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
                                                                </svg>
                                                            </span>
                                                            <p>Bag</p>
                                                        </a>
                                                    </li>
                                                    <li className="btn-wrapper">
                                                        <a href="#" className="btn">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                                    <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M14.25 3.75C13.01 3.75 12 4.76 12 6.5v7m8.25-3.75H3.75"></path><path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M14.25 3.75h4.39l1.61 6v10.5H3.75V9.75l1.61-6h5.14"></path>
                                                                </svg>
                                                            </span>
                                                            <p>Orders</p>
                                                        </a>
                                                    </li>
                                                    <li className="btn-wrapper">
                                                        <a href="#" className="btn">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                                    <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M20.25 5.25V16.5c0 1.24-1.01 2.25-2.25 2.25H6c-1.24 0-2.25-1.01-2.25-2.25V5.25"></path><path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M8.25 18.5v-7.25h7.5v7.25M12 11.25v7.25M1.5 5.25h21"></path>
                                                                </svg>
                                                            </span>
                                                            <p>Find a Store</p>
                                                        </a>
                                                    </li>
                                                    <li className="btn-wrapper">
                                                        <a href="#" className="btn">
                                                            <span>
                                                                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                                                    <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM11.99 18v-1.5"></path><path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M9 9.75a3 3 0 114.29 2.71c-.78.37-1.29 1.16-1.29 2.03V15"></path>
                                                                </svg>
                                                            </span>
                                                            <p className='title'>Help</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
    );
}

export default Nav