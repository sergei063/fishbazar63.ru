import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import {HashRouter, Switch, Route, Link} from 'react-router-dom'
import ProductionStyle from '../css/ProductionStyle';
import AppStyle from '../css/AppStyle';
import Katalog from '../Katalog';
import NumericInput from 'react-numeric-input';
import createHistory from 'history/createBrowserHistory'
import $ from 'jquery'
import uniqid  from 'uniqid';
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

class AllProducts extends React.Component {
    render() {

        let filter;
        try {
            filter = this.props.history.location.state.filter;
        } catch (e) {
            filter=null
        }

        const getLIproduct = ()=> {


            let key=0, r = [];
            r.push(<span id="filter_btn_all"  key={key} onClick={() => { this.props.history.push({pathname: `/production/`,state: { filter: null }})   }  } className={css((!filter)? AppStyle.link_active:AppStyle.link, AppStyle.marginRight15)}>Все</span>);
            ++key;

            Katalog.getGroup().map(p => {
                r.push(<span  key={key}  id={p.name} onClick={() => { this.props.history.push({pathname: `/production/`,state: { filter: p.name }})   }  } className={css((filter==p.name)? AppStyle.link_active:AppStyle.link, AppStyle.marginRight15)}>{p.catalog_tittle}</span>);
                ++key;
            })
            return r;
        }

        return (
            <div id='productuion_container' className={css(ProductionStyle.productCnt)}>
                <div  className={css(ProductionStyle.groupProduct)}>{getLIproduct()}</div>
                <br/>
                <br/>
                <div className={css(ProductionStyle.productTable)}>
                { Katalog.getRenderedShowcase(Katalog.getGroupItems(filter))}
                </div>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }

    componentDidMount(){
        //alert($("#productuion_container").offset().top)
        $("html, body").animate({
            scrollTop: $("#productuion_container").offset().top-30 + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
    }
}

/*<Link  onClick={history.goBack()} to='/production'>Назад</Link>*/
const backClick = (event) => {
    event.preventDefault();
    history.goBack();
}
const catalogBackClick = (event) => {
    event.preventDefault();
    history.goBack();
}

const AddShoppingCart = (fish, countFish) => {
    Katalog.addShoppingCart(fish, countFish);
}

const countFormat = (num) => (
    num + ' /кг'
)
//require('../img/katalog/keta.jpg')
const Player = (props) => {
    const player = PriceDB.get(props.match.params.id)
    if (!player) {
        return <div>Ничего не найдено</div>
    }
    return (
        <div className={css(ProductionStyle.productCnt)}>
            <div><Link onClick={(event) => { event.preventDefault(); props.history.push({pathname: `/production/`,state: { filter: player.parent.id }})   }  }  className={css(AppStyle.link)} to='/production'>{player.parent.catalog_tittle}</Link></div>
            <br/>
            <div className={css(ProductionStyle.photoDiv)}>
                <img src={player.img} alt=""></img>
            </div>

            <div className={css(ProductionStyle.details)}>
                <h1>{player.name} ({player.price} руб/кг)</h1>

                <h2 dangerouslySetInnerHTML={{__html: player.info}}></h2>
                <div className={css(AppStyle.center_text)}><br/><br/><span>
                    <NumericInput id="countFish" value={1} style={{
                        input: {
                            width: '7em', height: '3em'
                        }
                    }} format={countFormat}/>кг&nbsp;&nbsp;</span><span
                    onClick={() => {
                        AddShoppingCart(player, $('#countFish'))
                    }} className={css(AppStyle.button)}>В корзину</span><br/><br/></div>
            </div>

            <div className={css(ProductionStyle.clear)}></div>
            <br/>
            <br/>
            <div><Link onClick={backClick} className={css(AppStyle.link)} to='/production'>Назад</Link></div>
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