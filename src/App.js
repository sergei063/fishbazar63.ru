import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Home from './pages/Home/Home';
import About from './pages/About';
import AboutFish from './pages/AboutFish';
import ShoppingCart from './pages/ShoppingCart';
import axios from 'axios';
import Location from './pages/Location';
import {css } from 'aphrodite/no-important';
import AppStyle from './css/AppStyle';

import './index.css';
import './App.css';
import {  Switch, Route, Link } from 'react-router-dom'
import News from "./pages/News";
import SocialNetworkBlockStyle from "./pages/Delivery/SocialNetworkBlock/SocialNetworkBlockStyle";
import Instagram from "./components/SocialNetwork/Instagram";
import VK from "./components/SocialNetwork/Vk";
import QualityAssurance from "./pages/QualityAssurance/QualityAssurance";
import DeliveryPage from "./pages/Delivery/DeliveryPage";
import Seafood from "./pages/Seafood/Seafood";
import Blog from "./pages/Blog/Blog";
import PouchIcon from "./containers/PouchIcon/PouchIcon";
import {connect} from "react-redux";
import {setPlaceOfDelivery, setPrice} from "./actions";
import Katalog from "./Katalog";
import config from "./config";
import Admin from "./pages/Admin/Admin";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/production' component={Seafood}/>
            <Route path='/fbadmin' component={Admin}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/about' component={About}/>
            <Route path='/news' component={News}/>
            <Route path='/about_fish' component={AboutFish}/>
            <Route path='/shopping_cart' component={ShoppingCart}/>
            <Route path='/location' component={Location}/>
            <Route path='/quality_assurance' component={QualityAssurance}/>
            <Route path='/delivery' component={DeliveryPage}/>
        </Switch>
    </main>
);
const Footer = () => (
    <div className={css(AppStyle.footer, AppStyle.textAlignCenter)}>
        <div><Link to={`/`}>
            <img src={require('./img/design/footer_logo/footer_logo.png')}
                 srcSet={`${require('./img/design/footer_logo/footer_logo2x.png')} 2x, ${require('./img/design/footer_logo/footer_logo3x.png')} 3x`}
                 width='136px' height='96px'></img></Link>
        </div>
        <div className={css(AppStyle.footer_menu)}>
            <div className={css(AppStyle.phoneNumberMobileShow)}>
                <div className={css(AppStyle.phoneNumber)}>
                    <a href='tel:+88007070794'>
                        <nobr>8 800 707-07-94</nobr>
                    </a>
                </div>
            </div>
            <Link className={css(AppStyle.footer_link)} to='/production'>Морепродукты</Link><br/>
            <Link className={css(AppStyle.footer_link)} to='/quality_assurance'>Гарантия качества</Link>
        </div>

        <div className={css(AppStyle.footer_menu)}>
            <Link className={css(AppStyle.footer_link)} to='/delivery'>Доставка</Link><br/>
            <Link className={css(AppStyle.footer_link)} to='/blog'>Рецепты</Link>
        </div>
        <div className={css(AppStyle.phoneNumberMobileHide)}>
            <div className={css(AppStyle.phoneNumber)}>
                <a href='tel:+88007070794'>
                    <nobr>8 (917) 168 27 71</nobr>
                </a>
            </div>
            <Instagram/><span className={css(SocialNetworkBlockStyle.PL20)}>
                            <VK/>
                        </span>
        </div>


        {/*<a href="https://metrika.yandex.ru/stat/?id=46654176&amp;from=informer"
               target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/46654176/3_1_FFFFFFFF_EFEFEFFF_0_pageviews" style={{width:"88px", height:"31px", border:"0"}} alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" class="ym-advanced-informer" data-cid="46654176" data-lang="ru" /></a>*/}
    </div>

);

class App extends React.Component {
    constructor(props) {
        super(props);


    }
    componentWillMount() {

    }
    render() {

        let {history} = this.props;
        return (
            <div className={css(AppStyle.container)}>
                <Header isMobile={this.props.isMobile} />
                <PouchIcon/>
                {history.location.pathname==='/'&&
                <Slider/>
                }
                <Main />
                <Footer />
            </div>
        )
    }
    componentDidMount(){


        axios.get(`${config.serverAPI}/catalog`)
            .then(res => {

                const price = res.data;
                Katalog.setPrice(res.data);
                this.forceUpdate();
                //console.log(price);
                //this.props.setPrice(price);
            })


    }
    componentDidUpdate(){

    }
}


export default App;

//const mapStateToProps = (state) => ({});


//export default connect(mapStateToProps) (App);

/*const mapStateToProps = (state) => ({});

const matchDispatchToProps = (dispatch) => ({
    setPrice: (document) => {
        dispatch(setPrice(document))
    }
});

export default connect(mapStateToProps, matchDispatchToProps, null, {withRef: true})(App);*/
