import React from 'react';
import {css, StyleSheet} from 'aphrodite/no-important';
import AppStyle from '../../css/AppStyle';
import {LucidaGrandeFontB} from '../../css/Fonts';

const CatalogGroups = (props) => {
  const { history, productItems } = props;
  let keyMe = 2;
  let filter;
  try {
    filter = history.location.state.filter;
  } catch (e) {
    filter = null;
  }

  return (
    <ul className={css(Style.ul)}>
      <OneGroup
        history={history}
        pathname={props.history.location.pathname}
        filter={filter}
        urlFilter={null}
        text={'Все'}
      />
      <OneGroup
        history={history}
        pathname={props.history.location.pathname}
        filter={filter}
        urlFilter={'hit'}
        text={'Хит'}
      />
      {productItems.map((p) => {
        ++keyMe;
        return (
          <OneGroup
            key={keyMe}
            history={history}
            pathname={props.history.location.pathname}
            filter={filter}
            urlFilter={p.name}
            text={p.catalog_tittle}
          />
        );
      })}
    </ul>
  );
};

const OneGroup = (props) => {
  const {
    history, pathname, filter, urlFilter, text,
  } = props;
  return (
    <li
      onClick={() => {
        history.push({
          pathname,
          state: { filter: urlFilter },
          notScrollToTop: true,
        });
        /* this.scrollToProductuionContainer(); */
      }}
      className={css(Style.marginRight15, Style.gpoupItem, AppStyle.right_text)}
    >
      <span
        className={css(
          filter === urlFilter ? AppStyle.link_active : AppStyle.link,
        )}
      >
        {text}
      </span>
    </li>
  );
};

const Style = StyleSheet.create({
  ul: {
    marginRight: '52px',
    backgroundColor: '#fff',
    '@media (max-width: 500px)': {
      marginRight: '0px',
      paddingLeft: '0px',
      paddingTop: '0px',
    },
  },
  marginRight15: {
    marginRight: '1.5em',
    '@media (max-width: 840px)': {
      display: 'table',
    },
    '@media (max-width: 500px)': {
      marginRight: '5px',
    },
  },
  gpoupItem: {
    fontFamily: [LucidaGrandeFontB, 'sans-serif'],
    textTransform: 'uppercase',
    lineHeight: '3.08',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '3.08',
    letterSpacing: '0.4px',
    textAlign: 'right',

    '@media (max-width: 900px)': {
      display: 'inline',
    },
  },
});

export default CatalogGroups;
