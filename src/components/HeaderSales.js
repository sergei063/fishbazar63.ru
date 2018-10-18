import React, {Fragment} from 'react';
import {css, StyleSheet} from 'aphrodite/no-important';
import $ from 'jquery';
import {FuturaBoldFont, FuturaMediumFont} from '../css/Fonts';
import HeaderStyle from '../css/HeaderStyle';

class HeaderSales extends React.Component {
  state = {
    showSales: false,
  };

  toogleWindow() {
    if (this.state.showSales) {
      $('.header_sales').css('height', '60vh');

      $('.header_sales')
        .find('div:not(:first-child)')
        .css('display', 'grid');
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
  }

  render() {
    this.toogleWindow();

    return (
      <Fragment>
        <div
          className={[`${css(Style.sales)} header_sales`]}
          onClick={(event) => {
            //event.preventDefault();
            this.setState({ showSales: !this.state.showSales });
          }}
        >
          <div className={css(Style.salesFlex, Style.salesH1)}>
            <div className={css(Style.salesFirstChild)}>
              Получи скидку до 7 %
            </div>
            <div className={css(Style.salesChild)}>
              <div>&bull;</div>
              <div>Каждому новому покупателю подарим скидку 4%</div>
            </div>
            <div className={css(Style.salesChild)}>
              <div>&bull;</div>
              <div>
                Каждый,купивший у&nbsp;нас 8&nbsp;и&nbsp;более кг&nbsp;продукции
                в&nbsp;месяц, частями или единовременно,получает скидку 4%.
              </div>
            </div>
            <div className={css(Style.salesChild)}>
              <div>&bull;</div>
              <div>
                Скидка распространяется на&nbsp;текущий и&nbsp;следующий месяц.
              </div>
            </div>
            <div className={css(Style.salesChild)}>
              <div>&bull;</div>
              <div>
                В следующем месяце при покупке от&nbsp;8&nbsp;кг
                продукции,получаете скидку уже 7%
              </div>
            </div>

            <div className={css(Style.salesChild)}>
              <div>&bull;</div>
              <div>
                За более подробной информацией об&nbsp;акции звоните
                <a href="tel:+79171682771">
                  <nobr><u>8 (917) 168 27 71</u></nobr>
                </a>
              </div>
            </div>
          </div>
          <div className={css(Style.closeBtn)}>
            <a
              onClick={(event) => {
                event.preventDefault();
                this.setState({ showSales: false });
              }}
              className={css(HeaderStyle.pouchMobileMenuClose)}
              href="#"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

const Style = StyleSheet.create({
  closeBtn: {
    display:'none',
    position: 'absolute',
    left: '10px',
    top: '30px',
      '@media (max-width: 600px)': {
          left: '0px',
          top: '5px',
      },
  },
  sales: {
    backgroundColor: '#3454b0',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '50px',
    cursor: 'pointer',
    boxShadow:
      'rgba(0, 0, 0, 0.25) 0px 10px 28px, rgba(0, 0, 0, 0.12) 0px 10px 20px',
  },
  salesFlex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '70%',
      '@media (max-width: 600px)': {
          height: '80%',
      },
  },

  salesFirstChild: {
    textAlign: 'center',
    width: '100%',
  },
  salesChild: {
    gridTemplateColumns: '30px 1fr',
    //height: '100%',
    alignContent: 'center',

    fontFamily: [FuturaMediumFont, 'sans-serif'],
    fontSize: '16',
    textAlign: 'left',
    display: 'none',
    width: '40%',
    '@media (max-width: 900px)': {
      width: '60%',
      fontSize: '14px',
    },
    '@media (max-width: 600px)': {
      width: '80%',
      fontSize: '14px',
    },
      '@media (max-width: 370px)': {
      width: '95%',
      fontSize: '14px',
    },
  },

  salesH1: {
    fontFamily: [FuturaBoldFont, 'sans-serif'],
    fontSize: '18px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.19',

    letterSpacing: '1.4px',
    color: '#ffffff',

    ':hover > :nth-child(1)': {
      color: '#fe545b',
    },
    '@media (max-width: 900px)': {
      ':nth-child(1n) > :first-child': {
        fontSize: '24px',
      },
    },
    '@media (max-width: 600px)': {
      ':nth-child(1n) > :first-child': {
        fontSize: '20px',
      },
    },
  },
});

export default HeaderSales;
