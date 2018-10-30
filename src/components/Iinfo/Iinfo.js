import React from 'react';
import {css, StyleSheet} from 'aphrodite/no-important';
import {MetaSerifProBookFont} from '../../css/Fonts';
import {_try} from '../lib';

const getSocialBlock = (visibleSocialBlock) => {
  if (!visibleSocialBlock) return '';

  return `<div style="margin-top: 16px"><span><a href={'https://www.instagram.com/fishbazar63/'} target='_blank'>
            <a href='https://www.instagram.com/fishbazar63/' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <g fill="#7794E6" fill-rule="nonzero">
                    <path
                        d="M21.894 0H8.106C3.636 0 0 3.636 0 8.106v13.788C0 26.364 3.636 30 8.106 30h13.788C26.364 30 30 26.364 30 21.894V8.106C30 3.636 26.364 0 21.894 0zm5.682 21.894a5.689 5.689 0 0 1-5.682 5.682H8.106a5.689 5.689 0 0 1-5.682-5.682V8.106a5.689 5.689 0 0 1 5.682-5.682h13.788a5.689 5.689 0 0 1 5.682 5.682v13.788z"/>
                    <path
                        d="M21.483 13.784a6.731 6.731 0 0 0-1.912-3.799 6.73 6.73 0 0 0-3.798-1.912 6.772 6.772 0 0 0-1.988 0 6.733 6.733 0 0 0-4.45 2.667 6.734 6.734 0 0 0-1.26 5.032 6.734 6.734 0 0 0 2.666 4.45 6.726 6.726 0 0 0 5.032 1.261 6.733 6.733 0 0 0 4.45-2.667 6.734 6.734 0 0 0 1.26-5.032zm-6.068 5.283a4.306 4.306 0 0 1-3.219-.806 4.308 4.308 0 0 1-1.706-2.847 4.308 4.308 0 0 1 .807-3.219 4.307 4.307 0 0 1 3.482-1.753c.212 0 .425.016.636.047a4.311 4.311 0 0 1 3.653 3.653 4.34 4.34 0 0 1-3.653 4.925zM23.47 6.838a1.162 1.162 0 0 0-.816-.338c-.304 0-.601.123-.816.338a1.161 1.161 0 0 0-.338.816c0 .304.123.6.338.816.215.215.512.338.816.338.303 0 .6-.123.816-.338.215-.215.338-.513.338-.816 0-.304-.123-.601-.338-.816z"/>
                </g>
            </svg></a>
        </a></span>
<span style:"width:16px">&nbsp;</span>
 <a href='https://vk.com/id454817122\' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
    <path fill="#7794E6" fill-rule="nonzero" d="M15 30C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm9.748-8.877a1.289 1.289 0 0 0-.069-.137c-.357-.657-1.039-1.464-2.046-2.42l-.022-.022-.01-.01-.011-.012h-.01c-.457-.445-.746-.744-.869-.898-.22-.292-.27-.588-.149-.888.085-.226.407-.703.963-1.434.293-.386.525-.696.697-.93 1.236-1.68 1.77-2.753 1.606-3.22l-.063-.109c-.044-.066-.154-.126-.332-.181-.178-.054-.407-.063-.686-.027l-3.085.021a.394.394 0 0 0-.213.006 15.7 15.7 0 0 1-.14.033l-.054.027-.043.033a.475.475 0 0 0-.117.116.738.738 0 0 0-.108.192 18.103 18.103 0 0 1-1.145 2.463c-.264.452-.507.845-.73 1.177a5.64 5.64 0 0 1-.556.735c-.15.156-.286.282-.406.377-.123.094-.215.135-.28.12l-.182-.044a.728.728 0 0 1-.24-.268 1.235 1.235 0 0 1-.124-.427 5.16 5.16 0 0 1-.037-.443c-.003-.125-.001-.3.005-.526.008-.226.012-.38.012-.46 0-.278.005-.579.015-.903l.027-.772c.008-.19.01-.392.01-.603 0-.212-.011-.378-.037-.499a1.7 1.7 0 0 0-.112-.35.585.585 0 0 0-.22-.262 1.235 1.235 0 0 0-.358-.149c-.378-.087-.86-.134-1.447-.142-1.328-.014-2.18.074-2.56.263-.149.08-.285.19-.406.329-.129.16-.147.248-.054.263.428.065.731.222.91.47l.064.132c.05.094.1.263.15.503.051.24.083.508.097.8.035.533.035.99 0 1.368-.036.38-.07.676-.101.887a1.807 1.807 0 0 1-.146.516 2.066 2.066 0 0 1-.128.24.21.21 0 0 1-.053.055.812.812 0 0 1-.29.054c-.1 0-.222-.051-.364-.152a2.59 2.59 0 0 1-.444-.422 5.511 5.511 0 0 1-.52-.75c-.192-.322-.393-.701-.6-1.14l-.17-.317a29.348 29.348 0 0 1-.44-.893c-.186-.39-.35-.768-.493-1.133a.712.712 0 0 0-.257-.35l-.053-.033a.703.703 0 0 0-.172-.093 1.123 1.123 0 0 0-.246-.07l-2.935.02c-.3 0-.503.07-.61.21l-.043.064a.361.361 0 0 0-.032.176c0 .08.022.178.064.295.428 1.03.894 2.022 1.398 2.98.502.955.94 1.725 1.311 2.309.372.585.75 1.136 1.135 1.654.386.518.642.85.767.996.124.146.223.256.294.329l.268.263c.172.175.423.385.756.63.331.244.699.484 1.103.722.403.237.873.432 1.408.58.536.15 1.057.21 1.564.181h1.232c.25-.022.439-.102.567-.24l.043-.055a.737.737 0 0 0 .08-.203 1.16 1.16 0 0 0 .038-.3 3.64 3.64 0 0 1 .07-.85c.052-.251.114-.442.182-.57.068-.127.144-.234.23-.321a.898.898 0 0 1 .183-.16.514.514 0 0 1 .084-.037c.171-.06.373-.003.606.17.231.17.45.382.653.634s.449.535.734.848c.286.314.535.548.75.702l.213.131c.144.087.33.167.558.241.228.072.429.09.6.055l2.742-.045c.271 0 .482-.046.631-.136.15-.09.24-.192.268-.301.03-.11.03-.234.006-.372a1.443 1.443 0 0 0-.076-.29z"/>
</svg></a>
</div>
`;
};
const Iinfo = props => (
  <div className={css(Style.cnt, Style.cntDisplay)}>
    <div className={css(Style.container)}>
      <div>
        <span
          className={
            props.tooltip
              ? css(
                Style.tooltiptext,
                _try(() => props.style.tooltiptext, null),
              )
              : null
          }
          dangerouslySetInnerHTML={{
            __html: _try(
              () => props.tooltip + getSocialBlock(props.visibleSocialBlock),
              null,
            ),
          }}
        />
        <div className={[`${css(Style.icon)} icon`]} />
      </div>

      <div
        className={[`${css(Style.hidden_text)} hidden_text`]}
        dangerouslySetInnerHTML={{ __html: _try(() => props.text, null) }}
      />
    </div>
  </div>
);

const Style = StyleSheet.create({
  container: {
    display: 'grid',
    gridTemplateColumns: '30px 1fr',
    height: '100%',
    alignContent: 'center',
  },
  hidden_text: {
    fontFamily: [MetaSerifProBookFont, 'sans-serif'],
    fontSize: '12px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.4px',
    textAlign: 'left',
    color: 'rgba(31, 35, 44, 0.4)',
  },
  cntDisplay: {
    display: 'block',
  },

  cnt: {
    position: 'relative',

    cursor: 'pointer',
    borderBottom: '4px solid transparent',
    borderTop: '4px solid transparent',
    ':hover': {},
    ':hover  span': {
      display: 'inline-block',
      opacity: '1',
    },
    ':hover .hidden_text': {
      color: '#fe545b',
    },
    ':hover .icon': {
      background:
        `image-set(url(${
          require('../../img/design/i/i_h.png')
        }) 1x, url(${
          require('../../img/design/i/i_h2x.png')
        }) 2x, url(${
          require('../../img/design/i/i_h3x.png')
        }) 3x     ) no-repeat 0% 0px`,
    },
    '@media (max-width: 650px)': {},
  },
  tooltiptext: {
    display: 'none',
    opacity: '0',
    width: '100%',
    backgroundColor: '#555',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '6px',
    padding: '5px 0',
    position: 'absolute',
    // zIndex: "1",
    bottom: '125%',
    transition: 'opacity 0.3s',
    fontFamily: [MetaSerifProBookFont, 'sans-serif'],
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 10px 0 rgba(53, 66, 92, 0.08)',
    fontSize: '12px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.4px',
    textAlign: 'left',
    color: 'rgba(31, 35, 44, 0.4)',
    paddingLeft: '40px',
    paddingTop: '24px',
    paddingBottom: '24px',
    paddingRight: '40px',
    left: '-250%',
    marginLeft: '-60px',
    width: '250px',

    ':hover': {
      display: 'inline-block',
      opacity: '1',
    },
    ':after': {
      content: "''",
      position: 'absolute',
      top: '100%',
      left: '50%',
      marginLeft: '-50px',
      borderWidth: '5px',
      borderStyle: 'solid',
      borderColor: '#ffffff transparent transparent transparent',
    },
  },

  icon: {
    width: '18px',
    height: '18px',
    background:
      `image-set(url(${
        require('../../img/design/i/i.png')
      }) 1x, url(${
        require('../../img/design/i/i2x.png')
      }) 2x, url(${
        require('../../img/design/i/i3x.png')
      }) 3x     ) no-repeat 0% 0px`,
  },
});
export default Iinfo;
