import React from "react";
import Katalog from "../../Katalog";
import ShoppingCartStyle from "../../css/ShoppingCartStyle";
import {css} from "aphrodite/no-important";
import ProductionStyle from "../../css/ProductionStyle";
import AppStyle from "../../css/AppStyle";
import Counter from "../../components/Counter/Counter";
import $ from "jquery";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addFishToSeafoodShoppingCart} from "../../actions";


const calbackFn = (id, props) => {
    let fish = Katalog.get(id);
    let count = $(`#fishNum_${id}`);
    let countFish = Number.parseInt(count[0].value);

    props.addSeafoodItem(fish, countFish);
}
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

    render() {

        let catalog = this.getSeafoodShoppingCartInArray();



        if ((catalog == null) || (catalog.length == 0)) {
            return (<div className={css(ProductionStyle.text)}>Ваша корзина пуста<br/><br/><br/></div>)
        }



        let i = 0;
        let k = 0;
        return (
            <div className={css(ShoppingCartStyle.divTable)}>
                <div className={css(ShoppingCartStyle.divTableBody)}>
                    <div className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeader)}>
                        <div className={css(ShoppingCartStyle.divTableCell)}>Товар</div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>Цена</div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>Кол-во</div>
                        <div className={css(ShoppingCartStyle.divTableCell)}>Cтоимость</div>
                    </div>
                    <div className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeaderLine)}>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr/>
                        </div>
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


                    {catalog.map(p => {
                        i++;
                        let weightOfOneFish = (p.weightOfOneFish) ? p.weightOfOneFish : 1;
                        let cost = p.count * p.price * weightOfOneFish;
                        this.totalSum += cost;

                        return (
                            <div id={p.id} key={p.id}
                                 className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowText)}>
                                <div className={css(ShoppingCartStyle.divTableCell)}>{p.showCaseName}</div>
                                <div className={css(ShoppingCartStyle.divTableCell)}>{p.price} руб/кг</div>
                                <div className={css(ShoppingCartStyle.divTableCell)}>
                                    <Counter id={`fishNum_${p.id}`} counter={p.count} packaging={p.packaging}
                                             calbackFn={() => {
                                                 calbackFn(p.id, this.props);
                                                 /*{
                                                     this.props.onChangeShoppingCart(totalSum)
                                                 }*/
                                             }}/>
                                </div>
                                <div className={css(ShoppingCartStyle.divTableCell)}><span
                                    className={css(ShoppingCartStyle.price)}><nobr>{cost} руб</nobr></span></div>
                            </div>

                        )
                    })}


                    <div className={css(ShoppingCartStyle.divTableRow, ShoppingCartStyle.tableRowHeaderLine)}>
                        <div className={css(ShoppingCartStyle.divTableCell)}>
                            <hr/>
                        </div>
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

                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({shoppingCart: state.shoppingCart,seafoodShoppingCart: state.seafoodShoppingCart});
//const mapStateToProps = (state) => (state);

const matchDispatchToProps = (dispatch) => ({
    onChangeShoppingCart:(totalSum)=>{
        dispatch({type:'CHANGE',totalSum:totalSum})
    },

    addSeafoodItem:(fish, countFish)=>{
        dispatch(addFishToSeafoodShoppingCart(fish,countFish))
    }
})

export default connect(mapStateToProps,matchDispatchToProps) (ShoppingCartList);