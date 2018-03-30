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
            r.push(<span id="filter_btn_all"  key={key} onClick={() => { this.props.history.push({pathname: `/production/`,state: { filter: null }});this.scrollToProductuionContainer();   }  } className={css(ProductionStyle.marginRight15,ProductionStyle.gpoupItem, AppStyle.center_text)}><span key={key} className={css((!filter)? AppStyle.link_active:AppStyle.link)}>Все</span></span>);
            ++key;

            Katalog.getGroup().map(p => {
                r.push(<span  key={key}  id={p.name} onClick={() => {this.props.history.push({pathname: `/production/`,state: { filter: p.name }}); this.scrollToProductuionContainer();   }  } className={css(ProductionStyle.marginRight15,ProductionStyle.gpoupItem, AppStyle.center_text)}><span  key={key} className={css((filter==p.name)? AppStyle.link_active:AppStyle.link)}> {p.catalog_tittle}</span> </span>);
                ++key;
            })
            return r;
        }

        return (
            <div>
                <div  className={css(ProductionStyle.groupProduct)}>{getLIproduct()}</div>
            <div id='productuion_container' className={css(ProductionStyle.productCnt)}>
                <br/>
                <br/>
                <div>
                { Katalog.getRenderedShowcase(Katalog.getGroupItems(filter))}
                </div>
                <br/>
                <br/>
                <br/>
            </div>
            </div>
        )
    }

    scrollToProductuionContainer(){
        $("html, body").animate({
            scrollTop: $("#productuion_container").offset().top-10 + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
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


    alert("Добавлено в корзину: "+fish.name+" ("+countFish[0].getValueAsNumber()+" "+fish.packaging+")");

}

const countFormatKg = (num) => (
    num + ' /кг'
)
const countFormatPc = (num) => (
    num + ' /шт'
)
//require('../img/katalog/keta.jpg')

class Player extends React.Component {
    render(){
        const player = PriceDB.get(this.props.match.params.id)
        if (!player) {
            return <div>Ничего не найдено</div>
        }
        return (
            <div id="production_card" className={css(ProductionStyle.productCnt)}>
                <div><Link onClick={(event) => { event.preventDefault(); this.props.history.push({pathname: `/production/`,state: { filter: player.parent.id }})   }  }  className={css(AppStyle.link)} to='/production'>{player.parent.catalog_tittle}</Link></div>
                <br/>
                <div className={css(ProductionStyle.photoDiv)}>
                    <img src={player.img} alt=""></img>
                    <div className={css(ProductionStyle.nutritionalValue)}>Пищевая ценность в 100г продукта:</div>
                    <div className={css(ProductionStyle.nutritionalValue)} dangerouslySetInnerHTML={{__html: player.nutritionalValue||""}}></div>

                </div>

                <div className={css(ProductionStyle.details)}>
                    <h1>{player.name} <nobr>({player.price}руб/кг)</nobr></h1>

                    <h3 dangerouslySetInnerHTML={{__html: player.info}}></h3>
                    <h3 dangerouslySetInnerHTML={{__html: player.packagingInfo}}></h3>
                    <div className={css(AppStyle.center_text)}><br/><br/><span>
                    <NumericInput min={0} id="countFish" value={1} style={{
                        input: {
                            width: '9em', height: '3em'
                        }
                    }} format={(player.packaging=="кг")?countFormatKg:countFormatPc}/> &nbsp;&nbsp;</span>

                        <span onClick={() => {
                            AddShoppingCart(player, $('#countFish'))
                        }} className={css(AppStyle.button)}><nobr>В корзину</nobr></span><br/><br/></div>
                </div>
                <div className={css(ProductionStyle.clear)}></div>



                <br/>
                <br/>
                <div><Link onClick={backClick} className={css(AppStyle.link)} to='/production'>Назад</Link></div>
                <br/>
                <br/>
                <div className={css(ProductionStyle.shopInfo)}>
                    <p><b> Доставка FishBazar63.ru </b></p>
                    <span> - Принимаем</span><span> заказы с 8:00-20:00 без перерывов и выходных</span><br/>
                    <span> - Минимальный заказ всего от 600 руб!!!</span><br/>
                    <span> - На каждой неделе мы делаем по 2 дня бесплатной доставки о чем сообщаем заблаговременно во вкладке <a className={css(ProductionStyle.a)}  target="_blank" href='https://vk.com/id454817122'>новости</a> или  <a className={css(ProductionStyle.a)}  target="_blank" href='https://vk.com/id454817122'>VK</a>! Не пропустите!</span><br/>
                    <span> - Доставка в остальные дни :</span><br/>
                    <div className={css(AppStyle.marginLeft15)}><address><span>г. Новокуйбышевск; п.Гранный -70 руб</span></address>
                    <address><span>г. Самара -150 руб</span></address>
                        <address><span>Сухая Самарка; Жилой район Волгарь; 116км. -100руб</span></address><br/></div>
                    <span><b>Наши преимущества:</b></span><br/>
                    - Превосходное качество<br/>
                    - Цены ниже рыночных<br/>
                    - Нет посредников (мы сами доставляем рыбу и морепродукты с Дальнего Востока)<br/>
                    - Доставим не просто быстро, а в удобное для Вас время!<br/>

                </div>
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
    componentDidMount(){

        $("html, body").animate({
            scrollTop: $("#production_card").offset().top-30 + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
    }
}

const Production = () => (
    <Switch>
        <Route exact path='/production' component={AllProducts}/>
        <Route path='/production/:id' component={Player}/>
    </Switch>
)
export default Production;