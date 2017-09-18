import React from 'react';
import Katalog from '../Katalog';
import {  HashRouter, Switch, Route, Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important';

import HomeStyle from '../css/HomeStyle';

const showcase={};

//<img className={css(HomeStyle.productPhotoImg)} src={require(`${p.img}`)} alt=""></img>
const AllShowcase = (props) => {

    return (
        <div className={css(HomeStyle.cnt)}>
                {Katalog.getRenderedShowcase(Katalog.getShowcaseItems())}
        </div>
    )
}

const Home = () => (
    <Switch>
        <Route exact path='/' component={AllShowcase}/>
    </Switch>
)
export default Home;