import React from 'react';
import Katalog from '../Katalog';
import {  HashRouter, Switch, Route, Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important';

import HomeStyle from '../css/HomeStyle';

const showcase={};

//<img className={css(HomeStyle.productPhotoImg)} src={require(`${p.img}`)} alt=""></img>
const AllShowcase = (props) => {

    return (
        <div>
            <ul className={css(HomeStyle.ul)}>
                {
                    Katalog.getShowcaseItems().map(p => (
                        <li className={css(HomeStyle.li)} key={p.id}>
                            <Link className = {css(HomeStyle.card)} to={`/production/${p.id}`}>
                            <div className = {css(HomeStyle.productPhoto)} >
                                <img className={css(HomeStyle.productPhotoImg)} src={require('../img/katalog/keta.jpg')} alt=""></img>
                            </div>
                                <div  className = {css(HomeStyle.productNameDiv)}>
                                    <span  className = {css(HomeStyle.productName)}>{p.showCaseName}</span>
                                    <br/>
                                    <span className = {css(HomeStyle.productPrice)} >
									<b>{p.price}</b>
									<small>руб/кг</small>
								</span>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

const Home = () => (
    <Switch>
        <Route exact path='/' component={AllShowcase}/>
    </Switch>
)
export default Home;