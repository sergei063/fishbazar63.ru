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
import { addFishToSeafoodShoppingCart } from '../../actions'
import Iinfo from '../../components/Iinfo/Iinfo'
import AllCards from '../../components/Cards/AllCards'
import config from '../../config'
import { declOfNum } from '../../components/lib'

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
        this.state = { visibleDialog: false }
        this.onClick = this.onClick.bind(this)
        this.onHide = this.onHide.bind(this)
        this.checkout = this.checkout.bind(this)
    }

    onClick() {
        this.setState({ visibleDialog: true })
    }

    onHide() {
        this.setState({ visibleDialog: false })
    }
    checkout() {
        this.setState({ visibleDialog: false })
        this.props.history.push({ pathname: '/shopping_cart' })
    }

    render() {
        const shoppingCartLenght = Object.keys(this.props.seafoodShoppingCart.allFish).length

        const shoppingCartLenghtText = `${shoppingCartLenght} ${declOfNum(['Товар', 'Товара', 'Товаров'])(
            shoppingCartLenght
        )}`

        const headerDialog = (
            <div>
                <div className={css(SeafoodItemStyle.dialogH2)}>Товар добавлен в корзину</div>
                <div>
                    Всего в вашей корзине {shoppingCartLenghtText}
                    .&nbsp;
                    <Link className={css(AppStyle.blue_link)} to="/shopping_cart">
                        Посмотреть
                    </Link>
                </div>
            </div>
        )
        const footer = (
            <div>
                <Button label="Продолжить покупки" onClick={this.onHide} className="p-button-secondary" />
                <Button label="Оформить заказ" onClick={this.checkout} />
            </div>
        )

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
                <Dialog
                    header={headerDialog}
                    closable={false}
                    visible={this.state.visibleDialog}
                    footer={footer}
                    breakpoint={750}
                    className={css(SeafoodItemStyle.modalWindowBlock)}
                    minY={470}
                    modal={true}
                    baseZIndex={999999}
                    responsive={true}
                    onHide={this.onHide}
                    maximizable={false}>
                    <div className={css(SeafoodItemStyle.mdFlex)}>
                        <div className={css(SeafoodItemStyle.mdLogo)}>
                            <img src={require('../../img/logo_full.png')} width="152px" height="99px" />
                        </div>
                        <div className={css(SeafoodItemStyle.modalWindow)}>
                            Оформите заказ сегодня и получите скидку <span style={{ color: 'red' }}>4%!</span>

                        </div>
                    </div>
                </Dialog>
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
                                    this.setState({ visibleDialog: true })
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
})

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(SeafoodItem)
