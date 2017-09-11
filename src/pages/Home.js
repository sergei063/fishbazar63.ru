import React from 'react';
import Katalog from '../Katalog';
import {  HashRouter, Switch, Route, Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important';

import HomeStyle from '../css/HomeStyle';

const showcase={};


const AllShowcase = (props) => {

    return (
        <div>
            <ul className={css(HomeStyle.ul)}>
                {
                    Katalog.getShowcaseItems().map(p => (
                        <li className={css(HomeStyle.li)} key={p.id}>
                            <Link className = {css(HomeStyle.card)} to={`/production/${p.id}`}>{p.name}</Link>
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