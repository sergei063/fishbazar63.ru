import React from "react";
import Katalog from "../../Katalog";
import ShoppingCartStyle from "../../css/ShoppingCartStyle";
import ProductionStyle from "../../css/ProductionStyle";
import Counter from "../../components/Counter/Counter";
import $ from "jquery";
import {connect} from "react-redux";
import {addFishToSeafoodShoppingCart} from "../../actions";
import AppStyle from "../../css/AppStyle";
import Iinfo from "../../components/Iinfo/Iinfo";
import {Link} from 'react-router-dom';
import {MetaSerifProBookFont} from "../../css/Fonts";
import {StyleSheet,css} from 'aphrodite/no-important';

const calbackFn = (id, props) => {
    let fish = Katalog.get(id);
    let count = $(`#fishNum_${id}`);
    let countFish = Number.parseInt(count[0].value,10);

    props.addSeafoodItem(fish, countFish);
};
class ShoppingCartList extends React.Component {

    componentDidMount() {

        //this.setState({totalSum:this.totalSum});
        //this.props.onChangeShoppingCart(this.totalSum)
    }
    getSeafoodShoppingCartInArray() {
        let shoppingCart = this.props.seafoodShoppingCart.allFish;
        let res = [];
        if (shoppingCart != null) {
            for (let el in shoppingCart) {
                res.push(shoppingCart[el]);
            }
        }
        return res;
    }

    renderMobile(catalog) {
        let i = 0;
        return (
            <div>{catalog.map(p => {
                i++;
                let weightOfOneFish = (p.weightOfOneFish) ? p.weightOfOneFish : 1;
                let cost = p.count * p.price * weightOfOneFish;
                this.totalSum += cost;

                return (
                    <div>
                        <div className={css(ShoppingCartStyle.divTable)}>
                            <div className={css(ShoppingCartStyle.divTableBody)}>
                                <div className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeader)}>
                                    <div className={css(ShoppingCartStyle.divTableCell)}>Товар</div>
                                    <div className={css(ShoppingCartStyle.divTableCell)}>Цена</div>
                                </div>

                                <div
                                    className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeaderLine)}>
                                    <div className={css(ShoppingCartStyle.divTableCell)}>
                                        <hr/>
                                    </div>
                                    <div className={css(ShoppingCartStyle.divTableCell)}>
                                        <hr/>
                                    </div>
                                </div>


                                <div id={p.id} key={p.id}
                                     className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowText)}>
                                    <div className={css(ShoppingCartStyle.divTableCell)}>{p.showCaseName}</div>
                                    <div className={css(ShoppingCartStyle.divTableCell)}>{p.price} руб/кг</div>

                                </div>


                                <div
                                    className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeaderLine)}>
                                    <div className={css(ShoppingCartStyle.divTableCell)}>
                                        <hr/>
                                    </div>
                                    <div className={css(ShoppingCartStyle.divTableCell)}>
                                        <hr/>
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className={css(ShoppingCartStyle.divTable)}>
                            <div className={css(ShoppingCartStyle.divTableBody)}>
                                <div className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeader)}>
                                    <div className={css(ShoppingCartStyle.divTableCell)}>Кол-во</div>
                                    <div className={css(ShoppingCartStyle.divTableCell, AppStyle.textAlignCenter)}>Cтоимость</div>
                                </div>

                                <div
                                    className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeaderLine)}>
                                    <div className={css(ShoppingCartStyle.divTableCell)}>
                                        <hr/>
                                    </div>
                                    <div className={css(ShoppingCartStyle.divTableCell)}>
                                        <hr/>
                                    </div>
                                    <div className={css(ShoppingCartStyle.divTableCell)}>
                                        <hr/>
                                    </div>
                                </div>


                                <div id={p.id} key={p.id}
                                     className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowText)}>
                                    <div className={css(ShoppingCartStyle.divTableCell)}>
                                        <Counter id={`fishNum_${p.id}`} counter={p.count} packaging={p.packaging}
                                                 calbackFn={() => {
                                                     calbackFn(p.id, this.props);
                                                     /*{
                                                         this.props.onChangeShoppingCart(totalSum)
                                                     }*/
                                                 }}/>
                                    </div>
                                    <div className={css(ShoppingCartStyle.divTableCell, AppStyle.textAlignCenter)}><span className={css(ShoppingCartStyle.price)}><nobr>{cost.toFixed(0)} руб</nobr></span>
                                    </div>
                                    <div className={css(ShoppingCartStyle.divTableCell)}>
                                        <Iinfo style={tooltiptMobileStyle} tooltip={"Это весовой товар, вес может отличаться +/– 200 гр. После отправки заказа, мы позвоним вам,\n" +
                                        "и сообщим точную стоимость заказа"}/>
                                    </div>
                                </div>


                                <div
                                    className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeaderLine)}>
                                    <div className={css(ShoppingCartStyle.divTableCell)}>
                                        <hr/>
                                    </div>
                                    <div className={css(ShoppingCartStyle.divTableCell)}>
                                        <hr/>
                                    </div> <div className={css(ShoppingCartStyle.divTableCell)}>
                                        <hr/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div style={{height:'35px'}}></div>
                    </div>



                )
            })}</div>
        )
    }






    renderAll(catalog) {
        let i = 0;

        return (
            <div className={css(ShoppingCartStyle.divTable)}>
                <div className={css(ShoppingCartStyle.divTableBody)}>
                    <div className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeader)}>
                        <div className={css(ShoppingCartStyle.divTableCell)}>Товар</div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>Цена</div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>Кол-во</div>
                        <div className={css(ShoppingCartStyle.divTableCell,AppStyle.textAlignRigh)}>Cтоимость</div>
                        <div className={css(ShoppingCartStyle.divTableCell,AppStyle.textAlignRigh)}></div>
                    </div>
                    <div className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeaderLine)}>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr className={css(ShoppingCartStyle.divTableCellLine)}/>
                        </div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr className={css(ShoppingCartStyle.divTableCellLine)}/>
                        </div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr className={css(ShoppingCartStyle.divTableCellLine)}/>
                        </div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr className={css(ShoppingCartStyle.divTableCellLine)}/>

                        </div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr className={css(ShoppingCartStyle.divTableCellLine)}/>

                        </div>
                    </div>


                    {catalog.map(p => {
                        i++;
                        let weightOfOneFish = (p.weightOfOneFish) ? p.weightOfOneFish : 1;
                        let cost = p.count * p.price * weightOfOneFish;
                        this.totalSum += cost;

                        return (
                            <div id={p.id} key={p.id}
                                 className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.divTableRowHeight, ShoppingCartStyle.tableRowText)}>
                                <div className={css(ShoppingCartStyle.divTableCell,ShoppingCartStyle.divTableCellVerticalAlign)}>{p.showCaseName}</div>
                                <div className={css(ShoppingCartStyle.divTableCell,ShoppingCartStyle.divTableCellVerticalAlign)}>{p.price} руб/кг</div>
                                <div className={css(ShoppingCartStyle.divTableCell,ShoppingCartStyle.divTableCellVerticalAlign)}>
                                    <Counter id={`fishNum_${p.id}`} counter={p.count} packaging={p.packaging}
                                             calbackFn={() => {
                                                 calbackFn(p.id, this.props);
                                                 /*{
                                                     this.props.onChangeShoppingCart(totalSum)
                                                 }*/
                                             }}/>
                                </div>
                                <div className={css(ShoppingCartStyle.divTableCell,ShoppingCartStyle.divTableCellVerticalAlign,AppStyle.textAlignRigh)}>
                                    <span className={css(ShoppingCartStyle.price,ShoppingCartStyle.divTableCellVerticalAlign)}><nobr>{cost.toFixed(0)} руб</nobr></span>
                                </div>
                                <div className={css(ShoppingCartStyle.divTableCell,ShoppingCartStyle.divTableCellVerticalAlign,ShoppingCartStyle.divTableCellInfo,AppStyle.textAlignRigh)}>
                                    <Iinfo style={tooltiptStyle} tooltip={"Это весовой товар, вес может отличаться +/– 200 гр. После отправки заказа, мы позвоним вам, и сообщим точную стоимость заказа"}/>
                                </div>
                            </div>

                        )
                    })}


                    <div className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeaderLine)}>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr className={css(ShoppingCartStyle.divTableCellLine)}/>
                        </div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr className={css(ShoppingCartStyle.divTableCellLine)}/>
                        </div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr className={css(ShoppingCartStyle.divTableCellLine)}/>
                        </div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr className={css(ShoppingCartStyle.divTableCellLine)}/>
                        </div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr className={css(ShoppingCartStyle.divTableCellLine)}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    render(){
        let catalog = this.getSeafoodShoppingCartInArray();
        if ((catalog === null) || (catalog.length === 0)) {
            return (<div className={css(ProductionStyle.text)}>Ваша корзина пуста<br/><br/><br/></div>)
        }

        return (document.body.clientWidth <=634)? this.renderMobile(catalog):this.renderAll(catalog);
    }
}

const tooltiptStyle = StyleSheet.create({
    tooltiptext:{
        ':after': {
            marginLeft: "-30px",
        }
    }
});
const tooltiptMobileStyle = StyleSheet.create({
    tooltiptext:{
        width:'200px',
        left: "-180px",
        marginLeft: "-60px",
        ':after': {
            marginLeft: "90px",
        }
    }
});
const mapStateToProps = (state) => ({shoppingCart: state.shoppingCart,seafoodShoppingCart: state.seafoodShoppingCart});
//const mapStateToProps = (state) => (state);

const matchDispatchToProps = (dispatch) => ({
    onChangeShoppingCart:(totalSum)=>{
        dispatch({type:'CHANGE',totalSum:totalSum})
    },

    addSeafoodItem:(fish, countFish)=>{
        dispatch(addFishToSeafoodShoppingCart(fish,countFish))
    }
});

export default connect(mapStateToProps,matchDispatchToProps) (ShoppingCartList);