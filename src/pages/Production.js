
import React from 'react';
import {  HashRouter, Switch, Route, Link } from 'react-router-dom'




const PriceDB = {
    losos:[
        {id:"pink_salmon",name:"Горбуша", info:"НР неразделанная / ПСГ потрошеная с головой / ПБГ потрошеная безголовая",price:300},
        {id:"chum",name:"Кета", info:"ПСГ потрошеная с головой / ПБГ потрошеная безголовая",price:400},
        {id:"red_salmon",name:"Нерка", info:"ПБГ потрошеная безголовая",price:500},
        {id:"coho",name:"Кижуч", info:"ПБГ потрошеный безголовый",price:600},
        {id:"sea_run_char",name:"Голец", info:"НР неразделанный",price:700},
        {id:"chinook_salmon",name:"Чавыча", info:"ПСГ потрошеная с головой / ПБГ потрошеная безголовая",price:800}
    ],
    Treska:[
        {id:"treska", name:"Треска",info:"тихоокеанская ПБГ потрошеная безголовая навеской 0,3-0,5 /0,5-1/1-1,5/1,5-2/2-3",price:1000},
        {id:"mintay", name:"Минтай",info:"ПБГ потрошеный безголовый 21+/25+/30+/35+",price:1000},
        {id:"navaga", name:"Равага",info:"ПБГ потрошеная безголовая 21+/25+/30+,price:1000"}
    ],
    Flounder:[],
    Shellfish:[],
    Shrimp:[],

    get: function(id) {
        const isProduct = p => p.id === id;
        return this.losos.find(isProduct) || this.Treska.find(isProduct)
    }
}
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

const creatLinkProductMenu =(name,arr) =>{
    return (<div>
        {name}<ul>
        {
            arr.map(p => (
                <li key={p.id}>
                    <Link to={`/production/${p.id}`}>{p.name}</Link>
                </li>
            ))
        }
    </ul>
    </div>)
}
const AllProducts = () => (
    <div>
        {creatLinkProductMenu("Лососевые", PriceDB.losos)}
        {creatLinkProductMenu("Тресковые", PriceDB.Treska)}
        </div>
)

const Player = (props) => {
    const player = PriceDB.get(props.match.params.id)
    if (!player) {
        return <div>Sorry, but the player was not found</div>
    }
    return (
        <div>
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