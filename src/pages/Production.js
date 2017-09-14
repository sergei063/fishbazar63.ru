import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import {HashRouter, Switch, Route, Link} from 'react-router-dom'
import ProductionStyle from '../css/ProductionStyle';
import AppStyle from '../css/AppStyle';
import Katalog from '../Katalog';
import NumericInput from 'react-numeric-input';
import createHistory from 'history/createBrowserHistory'
import $ from 'jquery'

const history = createHistory()


const PriceDB = Katalog;
const PlayerAPI = {
    players: [
        {number: 1, name: "Ben Blocker", position: "G"},
        {number: 2, name: "Dave Defender", position: "D"},
        {number: 3, name: "Sam Sweeper", position: "D"},
        {number: 4, name: "Matt Midfielder", position: "M"},
        {number: 5, name: "William Winger", position: "M"},
        {number: 6, name: "Fillipe Forward", position: "F"}
    ],
    all: function () {
        return this.players
    },
    get: function (id) {
        const isPlayer = p => p.number === id
        return this.players.find(isPlayer)
    }
}


const AllProducts = () => (
    <div className={css(ProductionStyle.productCnt)}>
        {Katalog.creatMenu()}
        <br/>
        <br/>
        <br/>
    </div>
)
/*<Link  onClick={history.goBack()} to='/production'>Назад</Link>*/
const backClick = (event) => {
    event.preventDefault();
    history.goBack();
}

const AddShoppingCart = (fish,countFish) => {


    let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    if (shoppingCart == null) {
        shoppingCart = {}
    }

    shoppingCart[fish.id] = {...fish, count: countFish[0].getValueAsNumber(),}

    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
console.log(JSON.stringify(shoppingCart))
    $('#page_shopping_сart').css("display","inline");


}

const countFormat = (num) => (
    num + ' /кг'
)
const Player = (props) => {
    const player = PriceDB.get(props.match.params.id)
    if (!player) {
        return <div>Ничего не найдено</div>
    }
    return (
        <div className={css(ProductionStyle.productCnt)}>
            <div className={css(ProductionStyle.photoDiv)}>
                <img src={require('../img/katalog/keta.jpg')} alt=""></img>
            </div>
            <div className={css(ProductionStyle.details)}>
                <h1>{player.name} ({player.price} руб/кг)</h1>

                <h2 dangerouslySetInnerHTML={{__html: player.info}}></h2>
                <div className={css(AppStyle.center_text)}><br/><br/><span>
                    <NumericInput id="countFish" value={1} style={{
                        input: {
                            width: '7em',height: '3em'
                        }
                    }} format={countFormat}/>кг&nbsp;&nbsp;</span><span
                    onClick={() => {
                        AddShoppingCart(player,$('#countFish'))
                    }} className={css(AppStyle.button)}>В корзину</span><br/><br/></div>
            </div>

            <div className={css(ProductionStyle.clear)}></div>
            <br/>
            <br/>
            <Link onClick={backClick} className={css(ProductionStyle.back)} to='/production'>Назад</Link>
            <br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/>
        </div>

    )
}


const Production = () => (
    <Switch>
        <Route exact path='/production' component={AllProducts}/>
        <Route path='/production/:id' component={Player}/>
    </Switch>
)
export default Production;