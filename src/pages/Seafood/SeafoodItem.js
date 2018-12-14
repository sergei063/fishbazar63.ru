import React from 'react'
import { Link } from 'react-router-dom'
import { css, StyleSheet } from 'aphrodite/no-important'
import $ from 'jquery'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'

import { connect } from 'react-redux'
import ym from 'react-yandex-metrika'
import Katalog from '../../Katalog'
import SeafoodItemStyle from './SeafoodItemStyle'
import AppStyle from '../../css/AppStyle'
import Counter from '../../components/Counter/Counter'
import { addFishToSeafoodShoppingCart, setIsHiddenDeliveryPrice, setShoppingCartDialogVisible } from '../../actions'
import Iinfo from '../../components/Iinfo/Iinfo'
import AllCards from '../../components/Cards/AllCards'
import config from '../../config'
import { declOfNum } from '../../components/lib'
import ShoppingCartDialog from '../../components/ShoppingCartDialog/ShoppingCartDialog'

const BreadCrumbs = props => (
    <div>
        <Link
            onClick={event => {
                event.preventDefault()
                props.history.push({
                    pathname: '/production',
                    state: { filter: null },
                })
                /* this.scrollToProductuionContainer(); */
            }}
            className={css(SeafoodItemStyle.link)}
            to="/production">
            Морепродукты
        </Link>
        &nbsp;/&nbsp;
        <Link
            onClick={event => {
                event.preventDefault()
                props.history.push({
                    pathname: '/production',
                    state: { filter: props.item.parent.id },
                })
                /* this.scrollToProductuionContainer(); */
            }}
            className={css(SeafoodItemStyle.link)}
            to="/production">
            {props.item.parent.catalog_tittle}
        </Link>
        &nbsp;/&nbsp;
        <Link
            onClick={event => {
                event.preventDefault()
            }}
            className={css(SeafoodItemStyle.link)}
            to="/production">
            {props.item.name}
        </Link>
    </div>
)

const onShowDialog = props => {
    props.visibleWindows = true
}

const onHideDialog = props => {
    props.visibleWindows = false
}

class SeafoodItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

    }

    render() {
        const item = Katalog.get(this.props.match.params.id)
        if (!item) {
            return <div>Ничего не найдено</div>
        }
        const countFishFoGroups = document.body.clientWidth <= 1305 ? 2 : 3

        // let groupItems = Katalog.getGroupItems(null, countFishFoGroups);
        const groupItems = Katalog.getWithThisProductBuy(item, countFishFoGroups)
        let imgFile = null
        try {
            imgFile = config.imgRequire(item.img)
        } catch (e) {}
        return (
            <div className={css(SeafoodItemStyle.cnt)}>
                <ShoppingCartDialog history={this.props.history} />

                <div className={css(SeafoodItemStyle.h124)} />
                <div className={css(SeafoodItemStyle.flexContainer)}>
                    <div className={css(SeafoodItemStyle.fishContainer, SeafoodItemStyle.width40P)}>
                        <div className={css(SeafoodItemStyle.fishContainerFirst)}>
                            {/* <div className={css(SeafoodItemStyle.mobileShow650, SeafoodItemStyle.nameDiv)}>
                            <span className={css(SeafoodItemStyle.name)}>{item.name}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className={css(SeafoodItemStyle.price)}>
                                <nobr>
                                    {item.price}
                                    руб/кг
                                </nobr>
                            </span>
                            <br />
                            <span dangerouslySetInnerHTML={{ __html: item.info }} />
                        </div> */}
                            <div className={css(SeafoodItemStyle.mobileHidden650)}>
                                <BreadCrumbs item={item} history={this.props.history} />
                            </div>
                            <div>
                                <img className={css(SeafoodItemStyle.img)} src={imgFile} />
                            </div>

                            <div className={css(SeafoodItemStyle.mobileHidden650)}>
                                <div>{item.catchDate ? `Вылов: ${item.catchDate}` : ''}</div>
                                <div>&nbsp;</div>
                                <div style={{ width: '80%' }}>
                                    {item.producer ? `Производитель: ${item.producer}` : ''}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={css(SeafoodItemStyle.infoContainer, SeafoodItemStyle.width30P)}>
                        <div className={css(SeafoodItemStyle.mobileHidden650, SeafoodItemStyle.nameDiv)}>
                            <span className={css(SeafoodItemStyle.name)}>{item.name}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className={css(SeafoodItemStyle.price)}>
                                <nobr>
                                    {item.price}
                                    руб/кг
                                </nobr>
                            </span>
                            <br />
                        </div>

                        <Counter id="countFish" packaging={item.packaging} />
                        <div>
                            <button
                                onClick={() => {
                                    this.props.setShoppingCartDialogVisible(true)
                                    AddShoppingCart(item, $('#countFish'), this.props)
                                }}
                                style={{ width: '174px' }}
                                className={css(AppStyle.buttonRed)}>
                                В корзину
                            </button>
                        </div>
                        <div className={css(!item.weightOfOneFish ? AppStyle.hidden : SeafoodItemStyle.aboutFish)}>
                            Вес одной {item.packaging === 'кор' ? 'упаковки' : 'рыбы'} ~{' '}
                            <span className={css(SeafoodItemStyle.price)}>
                                {item.packaging === 'кор' ? item.weightOfOneFish : Katalog.getWeightFishText(item)} кг
                            </span>{' '}
                            <br />
                            Стоимость одной {item.packaging === 'кор' ? 'упаковки' : 'рыбы'} ~{' '}
                            <span className={css(SeafoodItemStyle.price)}>
                                {(item.weightOfOneFish * item.price).toFixed(0)} руб
                            </span>
                            <br />
                            <span className={css(SeafoodItemStyle.hidden_text)}>вес может отличатся +/– 200гр</span>
                        </div>

                        <div
                            className={css(item.packaging !== 'кор' ? SeafoodItemStyle.aboutDelivery : AppStyle.hidden)}>
                            Это весовой товар, после отправки заказа мы позвоним вам и сообщим точную стоимость одной
                            рыбы
                        </div>
                        <div>
                            <Iinfo
                                style={tooltiptMobileStyle}
                                visibleSocialBlock={true}
                                text={'Подробнее о бесплатной доставке'}
                                tooltip={
                                    'Два раза в неделю мы доставляем морепродукты бесплатно! Подпишитесь на нас в соц.сетях и узнайте подробности акции на этой неделе'
                                }
                            />
                        </div>
                        <div className={css(SeafoodItemStyle.fishInfo)}>
                            <span dangerouslySetInnerHTML={{ __html: item.info }} />
                        </div>
                    </div>
                </div>

                <div className={css(SeafoodItemStyle.mobileHidden)}>
                    <div style={{ height: '178px' }} />
                    <div className={css(SeafoodItemStyle.withBuy)}>С этим товаром покупают</div>
                    <div style={{ height: '48px' }} />
                    <div className={css(SeafoodItemStyle.withBuyDiv)}>
                        <div>
                            {' '}
                            <AllCards items={groupItems} />
                        </div>
                    </div>
                </div>

                <div style={{ height: '93px' }} />
            </div>
        )
    }
}

const tooltiptMobileStyle = StyleSheet.create({
    tooltiptext: {
        width: '200px',
        left: '40px',
        marginLeft: '-60px',
        ':after': {
            marginLeft: '-115px',
        },
    },
})

const AddShoppingCart = (fish, countFishEl, props) => {
    ym('reachGoal', 'objective1')
    const countFish = Number.parseInt(countFishEl[0].value, 10)

    if (isNaN(fish.price)) {
        alert('Извините, данного товара нет в наличии')
        return
    }

    Katalog.addShoppingCart(fish, countFish)

    props.addSeafoodItem(fish, countFish)
    // alert("Добавлено в корзину: " + fish.name + " (" + countFish + " " + fish.packaging + ")");
}

const mapStateToProps = state => state

const matchDispatchToProps = dispatch => ({
    addSeafoodItem: (fish, countFish) => {
        dispatch(addFishToSeafoodShoppingCart(fish, countFish))
    },
    setShoppingCartDialogVisible: visible => {
        dispatch(setShoppingCartDialogVisible(visible))
    },
})

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(SeafoodItem)
