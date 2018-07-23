import React, {Component} from 'react';
import Header from './Header';
import Slider from './Slider';
import Home from './pages/Home/Home';
import About from './pages/About';
import AboutFish from './pages/AboutFish';
import Production from './pages/Production';
import ShoppingCart from './pages/ShoppingCart';
import Recipes from './pages/Recipes';
import Location from './pages/Location';
import { StyleSheet, css } from 'aphrodite/no-important';
import AppStyle from './css/AppStyle';

import './index.css';
import './App.css';
import {  HashRouter, Switch, Route, Link } from 'react-router-dom'
import Katalog from './Katalog'
import News from "./pages/News";
import SocialNetworkBlockStyle from "./pages/Delivery/SocialNetworkBlock/SocialNetworkBlockStyle";
import Instagram from "./components/SocialNetwork/Instagram";
import VK from "./components/SocialNetwork/Vk";
import QualityAssurance from "./pages/QualityAssurance/QualityAssurance";
import DeliveryPage from "./pages/Delivery/DeliveryPage";
import Seafood from "./pages/Seafood/Seafood";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/production' component={Seafood}/>
            <Route path='/about' component={About}/>
            <Route path='/news' component={News}/>
            <Route path='/about_fish' component={AboutFish}/>
            <Route path='/shopping_cart' component={ShoppingCart}/>
            <Route path='/location' component={Location}/>
            <Route path='/recipes' component={Recipes}/>
            <Route path='/quality_assurance' component={QualityAssurance}/>
            <Route path='/delivery' component={DeliveryPage}/>
        </Switch>
    </main>
)
const Footer = () => (
        <div className={css(AppStyle.footer, AppStyle.textAlignCenter)}>
            <div><img src={require('./img/design/footer_logo/footer_logo.png')}
                      srcSet={`${require('./img/design/footer_logo/footer_logo2x.png')} 2x, ${require('./img/design/footer_logo/footer_logo3x.png')} 3x`}
                      width='136px' height='96px'></img>
            </div>
            <div className={css(AppStyle.footer_menu)}>
                <Link className={css(AppStyle.footer_link)} to='/production'>Морепродукты</Link><br/>
                <Link className={css(AppStyle.footer_link)} to='/quality_assurance'>Гарантия качества</Link>
            </div>
            <div className={css(AppStyle.footer_menu)}>
                <Link className={css(AppStyle.footer_link)}to='/delivery'>Доставка</Link><br/>
                <Link className={css(AppStyle.footer_link)} to='/recipes'>Рецепты</Link></div>
            <div>
                <div className={css(AppStyle.phoneNumber)}>
                    <a href='tel:+88007070794'><nobr>8 800 707-07-94</nobr></a>
                </div>
                <Instagram/><span className={css(SocialNetworkBlockStyle.PL20)}>
                            <VK/>
                        </span>
            </div>


            {/*<a href="https://metrika.yandex.ru/stat/?id=46654176&amp;from=informer"
               target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/46654176/3_1_FFFFFFFF_EFEFEFFF_0_pageviews" style={{width:"88px", height:"31px", border:"0"}} alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" class="ym-advanced-informer" data-cid="46654176" data-lang="ru" /></a>*/}
        </div>

)

class App extends React.Component {
    componentWillMount() {

    }
    render() {

        let {history} = this.props;
        return (
            <div className={css(AppStyle.container)}>
                <Header isMobile={this.props.isMobile} />
                {history.location.pathname==='/'&&
                <Slider/>
                }
                <Main />
                <Footer />
            </div>
        )
    }
    componentDidMount(){


    }
    componentDidUpdate(){

    }
}


export default App;
