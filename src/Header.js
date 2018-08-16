import React from 'react';


import {Link} from 'react-router-dom';
import {css} from 'aphrodite/no-important';
import AppStyle from './css/AppStyle';
import HeaderStyle from './css/HeaderStyle';
import $ from 'jquery'


const mobileMenuClick = (event) => {
    if (event)
        event.preventDefault();

    if($('#menu_inline_ul').hasClass(css(HeaderStyle.menuInlineUl))){
        //show
        //alert("show");
        showMobileMenu();
    } else {
        //hide
        //alert("hide");
        hideMobileMenu();
    }


};
const showMobileMenu = () => {
    $('#menu_inline_ul').removeClass(css(HeaderStyle.menuInlineUl));
    $('#menu_inline_ul').addClass(css(HeaderStyle.menuInlineUlBlock))

    $('#header_pouch_mobile_menu_close_span').removeClass(css(HeaderStyle.mobileMenuBtnHidden));
    $('#header_pouch_mobile_menu_close_span').addClass(css(HeaderStyle.mobileMenuBtn));

    $('#header_pouch_mobile_menu_span').removeClass(css(HeaderStyle.mobileMenuBtn));
    $('#header_pouch_mobile_menu_span').addClass(css(HeaderStyle.mobileMenuBtnHidden));

    $('#header_pouch_mobile_menu_cnt').addClass(css(HeaderStyle.floatMenuBlockWidthMobile));


};

const hideMobileMenu = () => {
    $('#menu_inline_ul').addClass(css(HeaderStyle.menuInlineUl))
    $('#header_pouch_mobile_menu_close_span').addClass(css(HeaderStyle.mobileMenuBtnHidden));
    $('#header_pouch_mobile_menu_close_span').removeClass(css(HeaderStyle.mobileMenuBtn));

    $('#header_pouch_mobile_menu_cnt').removeClass(css(HeaderStyle.floatMenuBlockWidthMobile));
    $('#header_pouch_mobile_menu_span').removeClass(css(HeaderStyle.mobileMenuBtnHidden));
    $('#header_pouch_mobile_menu_span').addClass(css(HeaderStyle.mobileMenuBtn));
    $('#menu_inline_ul').removeClass(css(HeaderStyle.menuInlineUlBlock))

};
class Header extends React.Component {

    state = {
        isMobile: this.props.isMobile.any()
    };

    render() {

        return (<header>
                <nav>
                    <div id="header_pouch_mobile_menu_cnt"  className={css(AppStyle.zI2, HeaderStyle.floatMenuBlock, HeaderStyle.floatMenuBlockWidth, HeaderStyle.nav_urls)}>
                        <span id="header_pouch_mobile_menu_close_span" className={css(HeaderStyle.mobileMenuBtn)+ " " +css(HeaderStyle.mobileMenuBtnHidden)}>
                            <a id="header_pouch_mobile_menu_close" onClick={mobileMenuClick}
                               className={css(HeaderStyle.pouchMobileMenuClose)} href='#'></a>
                            <br/>
                            <br/>
                        </span>
                        <span  id="header_pouch_mobile_menu_span" className={css(HeaderStyle.mobileMenuBtn)+ " " +css(HeaderStyle.mobileMenuMarginLeft60)}>
                            <a id="header_pouch_mobile_menu" onClick={mobileMenuClick}
                               className={css(HeaderStyle.pouchMobileMenu)} href='#'></a>
                            <br/>
                            <br/>
                        </span>
                        {/*<span className={css(HeaderStyle.mobileMenuBtn, AppStyle.paddingLeft10)}>
                            <a id="header_pouch_phone_menu"
                               className={(this.state.isMobile) ? css(HeaderStyle.pouchPhoneMenu) : css(HeaderStyle.pouchPhoneMenu)}
                               href='tel:+79171682771'></a>
                            <br/>
                            <br/>
                        </span>*/}

                        <ul id="menu_inline_ul" className={css(HeaderStyle.menuInlineUl)}>
                            <li className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu} to='/production'>Морепродукты</Link></li>
                            <li className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu} to='/blog'>Рецепты</Link></li>
                            <li className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu} to='/delivery'>Доставка</Link></li>
                            <li className={css(AppStyle.menu_inline, AppStyle.menu_inline_logo)}><Link onClick={hideMobileMenu} to='/'> <img src={require('./img/logo_full.png')} width='152px' height='99px'></img></Link></li>
                            <li className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu} to='/quality_assurance'>Гарантия качества</Link></li>
                            <li className={css(AppStyle.menu_inline,AppStyle.menu_inline_tel)}><a href='tel:+79171682771'><nobr>8 (917) 168 27 71</nobr></a></li>
                        </ul>
                    </div>

                    <div className={css(AppStyle.zI1, HeaderStyle.floatMenuBlockTablet, HeaderStyle.nav_urls)}>
                        <ul className={css(HeaderStyle.menuInlineUlTablet)}>
                            <li className={css(AppStyle.menu_inline, HeaderStyle.logo)}>
                                <Link onClick={hideMobileMenu} to='/'>
                                    <img className={css(HeaderStyle.menuLogoFull)} src={require('./img/design/logo/logo_full.png')} width='152px' height='99px'></img>
                                    <img className={css(HeaderStyle.menuLogoShort)} src={require('./img/design/logo/logo_short.png')} width='130px' height='34px'></img>
                                </Link>
                            </li>
                            <li  style={{marginRight: '20px'}}  className={css(AppStyle.menu_inline,AppStyle.menu_inline_tel,AppStyle.menu_inline_tel_hidden)}><a href='tel:+79171682771'><nobr>8 (917) 168 27 71</nobr></a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }


    renderOld() {

        return (<header>
                <nav>
                    <div className={css(AppStyle.zI2, AppStyle.floatLeft)}>
                        <ul className={css(HeaderStyle.headBarUl)}>
                            <li className={css(HeaderStyle.headBarLI)}>
                                <a id="header_pouch" className={css(HeaderStyle.pouchInstagram)} target="_blank"
                                   href='https://www.instagram.com/fishbazar63/'></a>

                            </li>
                            <li className={css(HeaderStyle.headBarLI)}>
                                <a id="header_pouch" className={css(HeaderStyle.pouchVk)} target="_blank"
                                   href='https://vk.com/id454817122'></a>
                            </li>
                            <li className={css(HeaderStyle.headBarLI)}>
                                <Link id="header_pouch" className={css(HeaderStyle.pouchA)} to='/shopping_cart'><span
                                    className={css(HeaderStyle.pouch_a_span)}>0</span></Link>
                            </li>
                        </ul>
                    </div>

                    <div className={css(AppStyle.zI1, HeaderStyle.floatMenuBlock)}>
                        <span className={css(HeaderStyle.mobileMenuBtn)}>
                            <a id="header_pouch_mobile_menu" onClick={mobileMenuClick}
                               className={css(HeaderStyle.pouchMobileMenu)} href='#'></a>
                            <br/>
                            <br/>
                        </span>
                        <span className={css(HeaderStyle.mobileMenuBtn, AppStyle.paddingLeft10)}>
                            <a id="header_pouch_phone_menu" className={ (this.state.isMobile) ? css(HeaderStyle.pouchPhoneMenu) : css(HeaderStyle.pouchPhoneMenu)} href='tel:+79171682771'></a>
                    <br/>
                    <br/>
                </span>

                        <ul id="menu_inline_ul" className={css(HeaderStyle.menuInlineUl)}>
                            <li id="page_production" className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu} to='/production'>Морепродукты</Link></li>
                            <li id="page_home" className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu} to='/recipes'>Рецепты</Link></li>
                            <li id="page_home" className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu} to='/recipes'>Доставка</Link></li>
                            <li id="page_home" className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu} to='/recipes'>Гарантия качества</Link></li>

                            {/*<li id="page_home" className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu} to='/'>Главная</Link></li>
                            <li id="page_news" className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu} to='/news'>Новости</Link></li>
                            <li id="page_home" className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu} to='/location'>Контакты</Link></li>
                            <li id="page_about" className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu} to='/about'>О&nbsp;нас</Link></li>
                            <li id="page_home" className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu} to='/about_fish'>О рыбе</Link></li>*/}

                        </ul>
                    </div>

                    <div className={css(AppStyle.zI1, HeaderStyle.phoneNumberMenuBlock)}>
                        <a href='tel:+79171682771'>8(917)168-27-71</a>

                    </div>


                </nav>
            </header>
        )
    }
}

export default Header;