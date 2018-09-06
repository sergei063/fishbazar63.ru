import React from 'react';
import {Link} from 'react-router-dom';
import Katalog from "../../Katalog";
import {css} from "aphrodite/no-important";
import SeafoodItemStyle from "./SeafoodItemStyle";
import AppStyle from "../../css/AppStyle";
import $ from "jquery";
import Counter from "../../components/Counter/Counter";
import {connect} from "react-redux";
import {addFishToSeafoodShoppingCart} from "../../actions";
import Iinfo from "../../components/Iinfo/Iinfo";
import AllCards from "../../components/Cards/AllCards";
import {MobileAgent} from "../../components/MobileAgent/MobileAgent";
import PouchIcon from "../../containers/PouchIcon/PouchIcon";


const BreadCrumbs = (props) => {
    return (
        <div>
            <Link onClick={(event) => {
                event.preventDefault();
                props.history.push({pathname: '/production', state: {filter: null}});
                /*this.scrollToProductuionContainer(); */
            }} className={css(SeafoodItemStyle.link)} to='/production'>Морепродукты</Link>
            &nbsp;/&nbsp;
            <Link onClick={(event) => {
                event.preventDefault();
                props.history.push({pathname: '/production', state: {filter: props.item.parent.id}});
                /*this.scrollToProductuionContainer(); */
            }} className={css(SeafoodItemStyle.link)} to='/production'>{props.item.parent.catalog_tittle}</Link>
            &nbsp;/&nbsp;
            <Link onClick={(event) => {
                event.preventDefault();
            }} className={css(SeafoodItemStyle.link)} to='/production'>{props.item.name}</Link>
        </div>
    )
};

const SeafoodItem = (props) => {

    const item = Katalog.get(props.match.params.id);
    if (!item) {
        return <div>Ничего не найдено</div>
    }
    let countFishFoGroups = (document.body.clientWidth <=1305)? 2:3;


    //let groupItems = Katalog.getGroupItems(null, countFishFoGroups);
    let groupItems = Katalog.getWithThisProductBuy(item, countFishFoGroups);

    return (
        <div className={css(SeafoodItemStyle.cnt)}>
            <div className={css(SeafoodItemStyle.h124)}></div>
            <div className={css(SeafoodItemStyle.flexContainer)}>
                <div className={css(SeafoodItemStyle.fishContainer, SeafoodItemStyle.width40P)}>
                    <div className={css(SeafoodItemStyle.fishContainerFirst)}>
                        <div className={css(SeafoodItemStyle.mobileShow650,SeafoodItemStyle.nameDiv)}><span className={css(SeafoodItemStyle.name)}>{item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className={css(SeafoodItemStyle.price)}><nobr>{item.price}руб/кг</nobr></span><br/>
                            {item.info}
                        </div>
                        <div className={css(SeafoodItemStyle.mobileHidden650)}><BreadCrumbs item={item} history={props.history}/></div>
                        <div><img className={css(SeafoodItemStyle.img)} src={item.img} ></img></div>

                        <div className={css(SeafoodItemStyle.mobileHidden650)}>
                            <div>{(item.catchDate) ? `Вылов: ${item.catchDate}` : ""}</div>
                            <div>&nbsp;</div>
                            <div
                                style={{width: '80%'}}>{(item.producer) ? `Производитель: ${item.producer}` : ""}</div>
                        </div>
                    </div>
                </div>

                <div className={css(SeafoodItemStyle.infoContainer, SeafoodItemStyle.width30P)}>

                    <div className={css(SeafoodItemStyle.mobileHidden650,SeafoodItemStyle.nameDiv)}><span className={css(SeafoodItemStyle.name)}>{item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className={css(SeafoodItemStyle.price)}><nobr>{item.price}руб/кг</nobr></span><br/>
                        {item.info}
                    </div>

                    <Counter id="countFish" packaging={item.packaging}/>
                    <div>
                        <button onClick={() => {
                            AddShoppingCart(item,  $('#countFish'),props)
                        }} style={{width: '174px'}} className={css(AppStyle.buttonRed)}>В корзину
                        </button>
                    </div>
                    <div  className={css((!item.weightOfOneFish?AppStyle.hidden:SeafoodItemStyle.aboutFish))}>
                        Вес одной рыбы ~ <span className={css(SeafoodItemStyle.price)}>{item.weightOfOneFish} кг</span> <br/>
                        Стоимость одной рыбы ~ <span className={css(SeafoodItemStyle.price)}>{item.weightOfOneFish*item.price} руб</span><br/>
                        <span className={css(SeafoodItemStyle.hidden_text)}>вес может отличатся +/– 200гр</span>
                    </div>

                    <div className={css( (item.packaging==='шт'?SeafoodItemStyle.aboutDelivery:AppStyle.hidden))}>Это весовой товар, после отправки заказа мы позвоним вам и сообщим точную стоимость одной
                        рыбы
                    </div>
                    <div>
                        <Link to='/delivery'>
                            <div className={css(SeafoodItemStyle.deliveryMore)} title={"Подробнее о бесплатной доставке"}>
                                <div><Iinfo/></div>
                                <div className={css(SeafoodItemStyle.hidden_text)}>Подробнее о бесплатной доставке</div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

            <div className={css(SeafoodItemStyle.mobileHidden)}>
                <div style={{height: '178px'}}></div>
                <div className={css(SeafoodItemStyle.withBuy)}>С этим товаром покупают</div>
                <div style={{height: '48px'}}></div>
                <div className={css(SeafoodItemStyle.withBuyDiv)}>
                   <div> <AllCards items={groupItems}/></div>
                </div>
            </div>

            <div style={{height:'93px'}}></div>
        </div>
    )
};
const AddShoppingCart = (fish, countFishEl,props) => {
    let countFish = Number.parseInt(countFishEl[0].value,10);
    Katalog.addShoppingCart(fish, countFish);

    props.addSeafoodItem(fish, countFish)
    //alert("Добавлено в корзину: " + fish.name + " (" + countFish + " " + fish.packaging + ")");

};



const mapStateToProps = (state) => (state);

const matchDispatchToProps = (dispatch) => ({
    addSeafoodItem:(fish, countFish)=>{
        dispatch(addFishToSeafoodShoppingCart(fish,countFish))
    }
});

export default connect(mapStateToProps,matchDispatchToProps) (SeafoodItem);