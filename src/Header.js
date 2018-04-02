import React from 'react';


import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite/no-important';
import AppStyle from './css/AppStyle';
import HeaderStyle from './css/HeaderStyle';
import $ from 'jquery'


const mobileMenuClick = (event) => {
    if (event)
        event.preventDefault();

    let display = $('#menu_inline_ul').css("display");
    display = (display == "none") ? "block" : "none";
    $('#menu_inline_ul').css("display", display);

}
const hideMobileMenu = (event) => {
    if ($('#menu_inline_ul').css("display"))
        $('#menu_inline_ul').css("display", "");

}
class Header extends React.Component {

    state = {
        isMobile: this.props.isMobile.any()
    }

    render() {

        return (<header>
                <nav>
                    <div className={css(AppStyle.zI2, AppStyle.floatRight)}>
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
                    <a id="header_pouch_phone_menu"
                       className={ (this.state.isMobile) ? css(HeaderStyle.pouchPhoneMenu) : css(HeaderStyle.pouchPhoneMenu)    }
                       href='tel:+79171682771'></a>
                    <br/>
                    <br/>
                </span>

                        <ul id="menu_inline_ul" className={css(HeaderStyle.menuInlineUl)}>
                            <li id="page_home" className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu}
                                                                                           to='/'>Главная</Link></li>
                            <li id="page_news" className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu}
                                                                                           to='/news'>Новости</Link></li>
                            <li id="page_production" className={css(AppStyle.menu_inline)}><Link
                                onClick={hideMobileMenu} to='/production'>Каталог</Link></li>

                            <li id="page_home" className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu}
                                                                                           to='/location'>Контакты</Link>
                            </li>
                            <li id="page_about" className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu}
                                                                                            to='/about'>О&nbsp;
                                нас</Link></li>
                            <li id="page_home" className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu}
                                                                                           to='/about_fish'>О рыбе</Link>
                            </li>
                            <li id="page_home" className={css(AppStyle.menu_inline)}><Link onClick={hideMobileMenu}
                                                                                           to='/recipes'>Рецепты</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={css(AppStyle.zI1, HeaderStyle.phoneNumberMenuBlock)}>
                        <a href='tel:+79171682771'>+7(917)168-27-71</a>

                    </div>


                </nav>
            </header>
        )
    }
}
;
export default Header;