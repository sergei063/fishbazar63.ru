import React from 'react'
import { css, StyleSheet } from 'aphrodite/no-important'
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import $ from 'jquery'
import connect from 'react-redux/es/connect/connect'
import { declOfNum } from '../lib'
import AppStyle from '../../css/AppStyle'
import { LucidaGrandeFont, MetaSerifProBookFont, MetaSerifProFont, MetaSerifProLightFont } from '../../css/Fonts'
import { addFishToSeafoodShoppingCart, setShoppingCartDialogVisible } from '../../actions'
import * as ReactDOM from 'react-dom'

class ShoppingCartDialog extends React.Component {
    constructor(props) {
        super(props)

        this.root = document.createElement('div')
        document.body.appendChild(this.root)

        this.onClick = this.onClick.bind(this)
        this.onHide = this.onHide.bind(this)
        this.checkout = this.checkout.bind(this)
    }

    componentWillUnmount = () => {
        document.body.removeChild(this.root)
    }

    onClick() {
        this.props.visibleDialog = true
        this.props.setShoppingCartDialogVisible(true)
    }

    onHide() {
        this.props.setShoppingCartDialogVisible(false)
    }

    checkout() {
        this.props.setShoppingCartDialogVisible(false)
        this.props.history.push({ pathname: '/shopping_cart' })
    }

    render() {
        const shoppingCartLenght = Object.keys(this.props.seafoodShoppingCart.allFish).length

        const shoppingCartLenghtText = `${shoppingCartLenght} ${declOfNum(['товар', 'товара', 'товаров'])(
            shoppingCartLenght
        )}`

        const headerDialog = (
            <div>
                <div className={css(Style.dialogH2)}>Товар добавлен в корзину</div>
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
        return ReactDOM.createPortal(
            <Dialog
                header={headerDialog}
                closable={false}
                visible={this.props.shoppingCartDialog.shoppingCartDialogVisible}
                footer={footer}
                breakpoint={750}
                className={css(Style.modalWindowBlock)}
                minY={470}
                modal={true}
                baseZIndex={999999}
                responsive={true}
                onHide={this.onHide}
                maximizable={false}>
                <div className={css(Style.mdFlex)}>
                    <div className={css(Style.mdLogo)}>
                        <img src={require('../../img/logo_full.png')} width="152px" height="99px" />
                    </div>
                    <div className={css(Style.modalWindow)}>
                        Оформите заказ сегодня и получите скидку <span style={{ color: 'red' }}>4%!</span>
                    </div>
                </div>
            </Dialog>,
            this.root
        )
    }
}

const Style = StyleSheet.create({
    dialogH2: {
        fontFamily: [MetaSerifProFont, 'sans-serif'],
        fontSize: '16px',
        textTransform: 'uppercase',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '30px',
        letterSpacing: '0.5px',
        textAlign: 'left',
        color: '#000',
    },
    modalWindow: {
        fontFamily: [MetaSerifProBookFont, 'sans-serif'],
        fontSize: '18px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.9',
        letterSpacing: '0.5px',
        textAlign: 'left',
        color: '#1e232c',
        '@media (max-width: 730px)': {
            fontSize: '13px',
        },
    },
    mdFlex: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
    },
    mdLogo: {
        marginBottom: '1em',
        marginRight: '1.5em',
        textAlign: 'center',
    },
    modalWindowBlock: {
        width: '30%',
        '@media (max-width: 730px)': {
            width: '95%',
        },
    },
})

const mapStateToProps = state => ({
    seafoodShoppingCart: state.seafoodShoppingCart,
    shoppingCartDialog: state.shoppingCartDialog,
})

const matchDispatchToProps = dispatch => ({
    setShoppingCartDialogVisible: visible => {
        dispatch(setShoppingCartDialogVisible(visible))
    },
})

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(ShoppingCartDialog)
