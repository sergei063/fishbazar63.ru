/*  eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { css, StyleSheet } from 'aphrodite/no-important'
import ProductWeight from './ProductWeight'
import SeafoodItemStyle from '../../pages/Seafood/SeafoodItemStyle'
import config from '../../config'
import Counter from '../Counter/Counter'
import {
    FuturaBoldFont,
    FuturaMediumFont,
    LucidaGrandeFont,
    MetaSerifProBookFont,
    MetaSerifProFont,
    MetaSerifProLightFont,
} from '../../css/Fonts'
import $ from 'jquery'
import AppStyle from '../../css/AppStyle'
/*  eslint-enable no-unused-vars  */

const Card = props => {
    const { p, isShowAddFish } = props
    let imgFile = null
    try {
        imgFile = config.imgRequire(p.img)
    } catch (e) {}

    const Style = Object.assign({}, props.inStyle)
    return (
        <li className={css(Style.li)} key={p.id}>
            <ProductWeight price={p} />
            <div className={p.hit ? css(Style.pouchHit) : css(Style.displayNone)}>
                <div>хит</div>
            </div>
            <div className={css(_CommonCardStyle.productCounter, _CommonCardStyle.fontCounter)}>
                <Counter
                    id={`cardFishNum_${p.id}`}
                    counter={p.count}
                    packaging={p.packaging}
                    calbackFn={() => {
                        //calbackFn(p.id, this.props)
                        /* {
                         this.props.onChangeShoppingCart(totalSum)
                     } */
                    }}
                />
            </div>
            <Link className={css(Style.card)} to={`/production/${p.id}`}>
                <div className={css(Style.productPhoto)}>
                    <img className={css(Style.productPhotoImg)} src={imgFile} alt={p.info} />
                </div>

                <div className={css(Style.productNameDiv)}>
                    <div className={css(Style.productName)} dangerouslySetInnerHTML={{ __html: p.showCaseName || '' }} />
                    <div className={css(Style.productPrice)}>
                        <b>{p.price}</b>
                        &nbsp;
                        <small>
                            <nobr>руб/кг</nobr>
                        </small>
                    </div>
                    <div className={css(Style.productWeightFish)}>
                        {p.weightFish && p.weightFish.help ? `Вес одной рыбы - ${p.weightFish.help}` : ''}
                    </div>
                    <div className={css(_CommonCardStyle.productButton)}>
                        <button
                            onClick={e => {
                                e.preventDefault()
                                alert('Тут будет окно для спроса')
                                //this.setState({ visibleDialog: true })
                                //AddShoppingCart(item, $('#countFish'), this.props)
                            }}
                            className={css(_CommonCardStyle.buttonRed)}>
                            В корзину
                        </button>
                    </div>
                </div>
            </Link>
            {isShowAddFish && (
                <Link className={css(SeafoodItemStyle.link)} to={`/production/change/${p.id}`}>
                    Изменить
                </Link>
            )}
        </li>
    )
}
//productCounter

const _CommonCardStyle = StyleSheet.create({
    productCounter: {
        position: 'absolute',
        zIndex: '1',
        bottom: '70px',
        width: '100%',
    },
    productButton: {
        position: 'absolute',
        textAlign: 'right',
        zIndex: '1',
        width: '100%',

        paddingRight: '17px',
        bottom: '10px',
    },
    fontCounter: {
        fontFamily: [MetaSerifProLightFont, 'sans-serif'],
        fontSize: '14px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.71',
        letterSpacing: '0.5px',
        textAlign: 'center',
        color: '#1e232c',
    },

    buttonRed: {
        color: '#fff',
        border: '0',
        fontSize: '12px',
        fontFamily: [LucidaGrandeFont, 'sans-serif'],
        textDecoration: 'none',
        userSelect: 'none',
        background: '#fe545b',
        width: '114px',
        height: '30px',
        borderRadius: '100px',
        outline: 'none',
        cursor: 'pointer',
        ':hover': {
            background: '#d43d43',
        },
        ':active': {
            background: '#fe545b',
        },
    },
})

export default Card
