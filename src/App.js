import React from 'react'
import axios from 'axios'
import { css } from 'aphrodite/no-important'

import Home from './pages/Home/Home'
import About from './pages/About'
import AboutFish from './pages/AboutFish'
import ShoppingCart from './pages/ShoppingCart'
import Location from './pages/Location'
import AppStyle from './css/AppStyle'

import './index.css'
import './App.css'
import News from './pages/News'
import SocialNetworkBlockStyle from './pages/Delivery/SocialNetworkBlock/SocialNetworkBlockStyle'
import QualityAssurance from './pages/QualityAssurance/QualityAssurance'
import DeliveryPage from './pages/Delivery/DeliveryPage'
import Seafood from './pages/Seafood/Seafood'
import Blog from './pages/Blog/Blog'
import Katalog from './Katalog'
import config from './config'
import Admin from './pages/Admin/Admin'
import { setAllPlacesOfDelivery } from './actions'
import { allPlacesOfDeliveryFetchData } from './actions/allPlacesOfDeliveryFetchData'
/*  eslint-disable no-unused-vars */
import Header from './Header'
import Slider from './Slider'
import { Link, Route, Switch, withRouter } from 'react-router-dom'
import Instagram from './components/SocialNetwork/Instagram'
import VK from './components/SocialNetwork/Vk'
import PouchIcon from './containers/PouchIcon/PouchIcon'
import { YMInitializer } from 'react-yandex-metrika'
import connect from 'react-redux/es/connect/connect'
/*  eslint-disable no-unused-vars */

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/production" component={Seafood} />
            <Route path="/fbadmin" component={Admin} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            <Route path="/about_fish" component={AboutFish} />
            <Route path="/shopping_cart" component={ShoppingCart} />
            <Route path="/location" component={Location} />
            <Route path="/quality_assurance" component={QualityAssurance} />
            <Route path="/delivery" component={DeliveryPage} />
        </Switch>
    </main>
)
const Footer = () => (
    <div>
        <div className={css(AppStyle.footer, AppStyle.textAlignCenter)}>
            <div>
                <Link to={'/'}>
                    <img
                        src={require('./img/design/footer_logo/footer_logo.png')}
                        srcSet={`${require('./img/design/footer_logo/footer_logo2x.png')} 2x, ${require('./img/design/footer_logo/footer_logo3x.png')} 3x`}
                        width="136px"
                        height="96px"
                    />
                </Link>
            </div>

            <div className={css(AppStyle.footer_menu)}>
                <div className={css(AppStyle.phoneNumberMobileShow)}>
                    <div className={css(AppStyle.phoneNumber)}>
                        <a href="tel:+88007070794">
                            <nobr>8 800 707-07-94</nobr>
                        </a>
                    </div>
                </div>
                <Link className={css(AppStyle.footer_link)} to="/production">
                    Морепродукты
                </Link>
                <br />
                <Link className={css(AppStyle.footer_link)} to="/quality_assurance">
                    Гарантия качества
                </Link>
            </div>

            <div className={css(AppStyle.footer_menu)}>
                <Link className={css(AppStyle.footer_link)} to="/delivery">
                    Доставка
                </Link>
                <br />
                <Link className={css(AppStyle.footer_link)} to="/blog">
                    Рецепты
                </Link>
            </div>

            <div className={css(AppStyle.phoneNumberMobileHide)}>
                <div className={css(AppStyle.phoneNumber)}>
                    <a href="tel:+88007070794">
                        <nobr>8 (917) 168 27 71</nobr>
                    </a>
                </div>
                <Instagram />
                <span className={css(SocialNetworkBlockStyle.PL20)}>
                    <VK />
                </span>
            </div>
        </div>
    </div>
)

class App extends React.Component {
    render() {
        const { history } = this.props
        return (
            <div className={css(AppStyle.container)}>
                <YMInitializer accounts={[46654176]} />
                <Header isMobile={this.props.isMobile} />
                <div style={{ position: 'relative' }}>
                    <PouchIcon />
                    {history.location.pathname === '/' && <Slider />}
                    <Main />
                </div>
                <Footer />
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchAllPlacesOfDelivery(`${config.serverAPI}/all_places_of_delivery`)
        (async () => {
            /* try {
                  const responseAllPlacesOfDelivery = await axios.get(`${config.serverAPI}/all_places_of_delivery`);
                  this.props.setAllPlacesOfDelivery(responseAllPlacesOfDelivery.data.AllPlacesOfDelivery);
              } catch (e) {
                  console.error(e);
              }
      */
            try {
                const responseCatalog = await axios.get(`${config.serverAPI}/catalog`)
                Katalog.setPrice(responseCatalog.data)
            } catch (error) {
                console.error(error)
            }

            try {
                if (localStorage.getItem('auth_token')) {
                    try {
                        await axios.post(`${config.serverAPI}/check_user`, {
                            auth_token: localStorage.getItem('auth_token'),
                        })
                    } catch (e) {
                        localStorage.removeItem('auth_token')
                    }
                }
            } catch (error) {
                console.error(error)
            }
            this.forceUpdate()
        })()
    }

    componentDidUpdate() {}
}

const mapStateToProps = state => ({
    allPlacesOfDelivery: state.allPlacesOfDelivery,
})

const matchDispatchToProps = dispatch => ({
    setAllPlacesOfDelivery: allPlacesOfDelivery => {
        dispatch(setAllPlacesOfDelivery(allPlacesOfDelivery))
    },
    fetchAllPlacesOfDelivery: url => dispatch(allPlacesOfDeliveryFetchData()),
})
// export default App;
export default withRouter(
    connect(
        mapStateToProps,
        matchDispatchToProps,
        null,
        { withRef: true }
    )(App)
)
/* export default connect(
  mapStateToProps,
  matchDispatchToProps,
  null,
  { withRef: true },
)(App); */
//  export default App;

// const mapStateToProps = (state) => ({});

// export default connect(mapStateToProps) (App);

/* const mapStateToProps = (state) => ({});

const matchDispatchToProps = (dispatch) => ({
    setPrice: (document) => {
        dispatch(setPrice(document))
    }
});

export default connect(mapStateToProps, matchDispatchToProps, null, {withRef: true})(App); */
