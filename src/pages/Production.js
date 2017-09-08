
import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import {  HashRouter, Switch, Route, Link } from 'react-router-dom'
import AppStyle from '../css/AppStyle';
import Katalog from '../Katalog';



const PriceDB = Katalog;
const PlayerAPI = {
    players: [
        { number: 1, name: "Ben Blocker", position: "G" },
        { number: 2, name: "Dave Defender", position: "D" },
        { number: 3, name: "Sam Sweeper", position: "D" },
        { number: 4, name: "Matt Midfielder", position: "M" },
        { number: 5, name: "William Winger", position: "M" },
        { number: 6, name: "Fillipe Forward", position: "F" }
    ],
    all: function() { return this.players},
    get: function(id) {
        const isPlayer = p => p.number === id
        return this.players.find(isPlayer)
    }
}


const AllProducts = () => (
    <div>
        {Katalog.creatMenu()}
        </div>
)

const Player = (props) => {

    const player = PriceDB.get(props.match.params.id)
    if (!player) {
        return <div>Sorry, but the player was not found</div>
    }
    return (
        <div className={css(AppStyle.blue_text)} >
            <h1>{player.name} (#{player.price} руб.)</h1>
            <h2>{player.info}</h2>
            <Link to='/production'>Назад</Link>
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