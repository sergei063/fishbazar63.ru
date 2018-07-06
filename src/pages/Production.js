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

class AllProducts extends React.Component {
    render() {

        let filter;
        try {
            filter = this.props.history.location.state.filter;
        } catch (e) {
            filter=null
        }


        return (
            <div>
                <div  className={css(ProductionStyle.groupProduct)}>{Katalog.getProductGroup(this.props,filter)}</div>
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

    getLIproduct(filter) {


        let key=0, r = [];
        r.push(<span id="filter_btn_all"  key={key} onClick={() => { this.props.history.push({pathname: `/production/`,state: { filter: null }});this.scrollToProductuionContainer();   }  } className={css(ProductionStyle.marginRight15,ProductionStyle.gpoupItem, AppStyle.center_text)}><span key={key} className={css((!filter)? AppStyle.link_active:AppStyle.link)}>Все</span></span>);
        ++key;

        Katalog.getGroup().map(p => {
            r.push(<span  key={key}  id={p.name} onClick={() => {this.props.history.push({pathname: `/production/`,state: { filter: p.name }}); this.scrollToProductuionContainer();   }  } className={css(ProductionStyle.marginRight15,ProductionStyle.gpoupItem, AppStyle.center_text)}><span  key={key} className={css((filter===p.name)? AppStyle.link_active:AppStyle.link)}> {p.catalog_tittle}</span> </span>);
            ++key;
        })
        return r;
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
                    <img src={player.img} alt="" width="380" height="253"></img>
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
                    <span> - Доставку</span><span> осуществляем с 8:00-20:00 без перерывов и выходных</span><br/>
                    <span> - Минимальный заказ всего от 600 руб!!!</span><br/>
                    <span> - На каждой неделе мы делаем по 2 дня бесплатной доставки о чем сообщаем заблаговременно во вкладке <Link className={css(ProductionStyle.a)} to='/news'>новости</Link> или  <a className={css(ProductionStyle.a)}  target="_blank" href='https://vk.com/id454817122'>VK</a>! Не пропустите!</span><br/>
                    <span> - Доставка в остальные дни :</span><br/>
                    <div className={css(AppStyle.marginLeft15)}><address><span>г. Новокуйбышевск; п.Гранный -70 руб</span></address>
                    <address><span>г. Самара -150 руб</span></address>
                        <address><span>Сухая Самарка; Жилой район Волгарь; 116км. -100руб</span></address><br/></div>
                    <p>
                        <h2 >Наши преимущества</h2>
                        - <u><b>БЕЗУПРЕЧНОЕ КАЧЕСТВО.</b></u> Наш продукт не лежит на витринах, не перемораживается по несколько раз каждый продукт имеет ветеринарное свидетельство; постоянный контроль условий доставки.<br/><br/>
                        - <u><b>ЦЕНЫ НИЖЕ РЫНОЧНЫХ.</b></u><br/><br/>
                        - <u><b>НЕТ ПОСРЕДНИКОВ.</b></u> Одна из первопричин низкого качества продукта-его долгая(через 33 оптовика) дорога до конечного потребителя…МЫ САМИ ОРГАНИЗУЕМ ДОСТАВКУ С ДАЛЬНЕГО ВОСТОКА!!Сами привезли-сами продали на опт и в розницу. Все просто.<br/><br/>
                        -  <u><b>ДОСТАВИМ НЕ ПРОСТО БЫСТРО, А В УДОБНОЕ ДЛЯ ВАС ВРЕМЯ!</b></u> И кстати 2 раза в неделю у нас бесплатная доставка. Об этом в разделе <Link className={css(ProductionStyle.a)} to='/news'>новости</Link>  или  <a className={css(ProductionStyle.a)}  target="_blank" href='https://www.instagram.com/fishbazar63/'>Instagram</a>,  <a className={css(ProductionStyle.a)}  target="_blank" href='https://vk.com/id454817122'>VK</a>.<br/>

                    </p>


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
            scrollTop: $("#production_card").offset().top-220 + "px"
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