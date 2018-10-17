import React from 'react';

import {Link} from 'react-router-dom';
import {css} from 'aphrodite/no-important';
import AppStyle from './css/AppStyle';
import HeaderStyle from './css/HeaderStyle';
import $ from 'jquery';

const mobileMenuClick = (event) => {
  if (event) event.preventDefault();

  if ($('#menu_inline_ul').hasClass(css(HeaderStyle.menuInlineUl))) {
    //  show
    //  alert("show");
    showMobileMenu();
  } else {
    //  hide
    //  alert("hide");
    hideMobileMenu();
  }
};
const scrollToFooter = (showSales) => {


  if (showSales) {
    $('.header_sales').css('height', '60vh');

    $('.header_sales')
      .find('div:not(:first-child)')
      .css('display', 'block');
  } else {
    $('.header_sales').css('height', '');
    $('.header_sales')
      .find('div:not(:first-child)')
      .css('display', 'none');
  }
  //  window.location = "https://vk.com/id454817122?w=wall454817122_189%2Fall";
  //  window.open('https://vk.com/id454817122?w=wall454817122_189%2Fall', '_blank');
  //  https://vk.com/id454817122?w=wall454817122_189%2Fall

  //  $('html,body').animate({scrollTop: document.body.scrollHeight},{duration: 1000});
};
const showMobileMenu = () => {
  $('#menu_inline_ul').removeClass(css(HeaderStyle.menuInlineUl));
  $('#menu_inline_ul').addClass(css(HeaderStyle.menuInlineUlBlock));

  $('#header_pouch_mobile_menu_close_span').removeClass(
    css(HeaderStyle.mobileMenuBtnHidden),
  );
  $('#header_pouch_mobile_menu_close_span').addClass(
    css(HeaderStyle.mobileMenuBtn),
  );

  $('#header_pouch_mobile_menu_span').removeClass(
    css(HeaderStyle.mobileMenuBtn),
  );
  $('#header_pouch_mobile_menu_span').addClass(
    css(HeaderStyle.mobileMenuBtnHidden),
  );

  $('#header_pouch_mobile_menu_cnt').addClass(
    css(HeaderStyle.floatMenuBlockWidthMobile),
  );
};

const hideMobileMenu = () => {
  $('#menu_inline_ul').addClass(css(HeaderStyle.menuInlineUl));
  $('#header_pouch_mobile_menu_close_span').addClass(
    css(HeaderStyle.mobileMenuBtnHidden),
  );
  $('#header_pouch_mobile_menu_close_span').removeClass(
    css(HeaderStyle.mobileMenuBtn),
  );

  $('#header_pouch_mobile_menu_cnt').removeClass(
    css(HeaderStyle.floatMenuBlockWidthMobile),
  );
  $('#header_pouch_mobile_menu_span').removeClass(
    css(HeaderStyle.mobileMenuBtnHidden),
  );
  $('#header_pouch_mobile_menu_span').addClass(css(HeaderStyle.mobileMenuBtn));
  $('#menu_inline_ul').removeClass(css(HeaderStyle.menuInlineUlBlock));
};
class Header extends React.Component {
  state = {
    isMobile: this.props.isMobile.any(),
    showSales: false,
  };

  render() {
    scrollToFooter(this.state.showSales);
    return (
      <header>
        <nav>
          <div
            id="header_pouch_mobile_menu_cnt"
            className={css(
              AppStyle.zI99999,
              HeaderStyle.floatMenuBlock,
              HeaderStyle.floatMenuBlockWidth,
              HeaderStyle.nav_urls,
            )}
          >
            <div
              id="header_pouch_mobile_menu_close_span"
              className={
                css(HeaderStyle.mobileMenuBtn) +
                ' ' +
                css(HeaderStyle.mobileMenuBtnHidden)
              }
            >
              <a
                id="header_pouch_mobile_menu_close"
                onClick={mobileMenuClick}
                className={css(HeaderStyle.pouchMobileMenuClose)}
                href="#"
              />
              <div>
                <div style={{ margin: '0 auto', width: '130px' }}>
                  <Link onClick={hideMobileMenu} to="/">
                    <img
                      className={css()}
                      src={require('./img/design/logo/logo_short.png')}
                      width="130px"
                      height="34px"
                    />
                  </Link>
                </div>
              </div>
              <br />
              <br />
            </div>
            <span
              id="header_pouch_mobile_menu_span"
              className={
                css(HeaderStyle.mobileMenuBtn) +
                ' ' +
                css(HeaderStyle.mobileMenuMarginLeft60)
              }
            >
              <a
                id="header_pouch_mobile_menu"
                onClick={mobileMenuClick}
                className={css(HeaderStyle.pouchMobileMenu)}
                href="#"
              />
              <br />
              <br />
            </span>
            {/*<span className={css(HeaderStyle.mobileMenuBtn, AppStyle.paddingLeft10)}>
                            <a id="header_pouch_phone_menu"
                               className={(this.state.isMobile) ? css(HeaderStyle.pouchPhoneMenu) : css(HeaderStyle.pouchPhoneMenu)}
                               href='tel:+79171682771'></a>
                            <br/>
                            <br/>
                        </span>*/}

            <ul id="menu_inline_ul" className={css(HeaderStyle.menuInlineUl)}>
              <li className={css(AppStyle.menu_inline)}>
                <Link onClick={hideMobileMenu} to="/production">
                  Рыба&nbsp;и&nbsp;морепродукты
                </Link>
              </li>
              <li className={css(AppStyle.menu_inline)}>
                <Link onClick={hideMobileMenu} to="/blog">
                  Рецепты
                </Link>
              </li>
              <li className={css(AppStyle.menu_inline)}>
                <Link onClick={hideMobileMenu} to="/delivery">
                  Доставка
                </Link>
              </li>
              <li
                className={css(AppStyle.menu_inline, AppStyle.menu_inline_logo)}
              >
                <Link onClick={hideMobileMenu} to="/">
                  {' '}
                  <img
                    src={require('./img/logo_full.png')}
                    width="152px"
                    height="99px"
                  />
                </Link>
              </li>
              <li className={css(AppStyle.menu_inline)}>
                <Link onClick={hideMobileMenu} to="/quality_assurance">
                  Гарантия качества
                </Link>
              </li>
              <li
                className={css(AppStyle.menu_inline, AppStyle.menu_inline_tel)}
              >
                <a href="tel:+79171682771">
                  <nobr>8 (917) 168 27 71</nobr>
                </a>
              </li>
            </ul>
          </div>

          <div
            className={css(
              AppStyle.zI1,
              HeaderStyle.floatMenuBlockTablet,
              HeaderStyle.nav_urls,
            )}
          >
            <ul className={css(HeaderStyle.menuInlineUlTablet)}>
              <li className={css(AppStyle.menu_inline, HeaderStyle.logo)}>
                <Link onClick={hideMobileMenu} to="/">
                  <img
                    className={css(HeaderStyle.menuLogoFull)}
                    src={require('./img/design/logo/logo_full.png')}
                    width="152px"
                    height="99px"
                  />
                  <img
                    className={css(HeaderStyle.menuLogoShort)}
                    src={require('./img/design/logo/logo_short.png')}
                    width="130px"
                    height="34px"
                  />
                </Link>
              </li>
              <li
                style={{ marginRight: '20px' }}
                className={css(
                  AppStyle.menu_inline,
                  AppStyle.menu_inline_tel,
                  AppStyle.menu_inline_tel_hidden,
                )}
              >
                <a href="tel:+79171682771">
                  <nobr>8 (917) 168 27 71</nobr>
                </a>
              </li>
            </ul>
          </div>
          <div
            className={[
              `${css(HeaderStyle.sales, HeaderStyle.salesH1)} header_sales`,
            ]}
            onClick={(event) => {
              event.preventDefault();
              this.setState({ showSales: !this.state.showSales });
            }}
          >
            <div className={css(HeaderStyle.salesFirstChild)}>
              Получи скидку до 7 %
            </div>
            <div className={css(HeaderStyle.salesChild)}>
              -Каждый,купивший у&nbsp;нас 8&nbsp;и&nbsp;более кг&nbsp;продукции
              в&nbsp;месяц, частями или единовременно,получает скидку 4%.
            </div>
            <div className={css(HeaderStyle.salesChild)}>
              Скидка распространяется на&nbsp;текущий и&nbsp;следующий месяц.{' '}
            </div>
            <div className={css(HeaderStyle.salesChild)}>
              -В следующем месяце при покупке от&nbsp;8&nbsp;кг
              продукции,получаете скидку уже 7%
            </div>
            <div className={css(HeaderStyle.salesChild)}>
              -А каждому новому покупателю подарим скидку 4%
            </div>
            <div className={css(HeaderStyle.salesChild)}>
              -За более подробной информацией об&nbsp;акции звоните 89171682771
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
