import React, {Fragment} from 'react';
import $ from "jquery";
import {css} from "aphrodite/no-important";
import SeafoodItemStyle from "../SeafoodItemStyle";
import AppStyle from "../../../css/AppStyle";
import InputTextBox from "../../../components/InputTextBox/InputTextBox";
import Katalog from "../../../Katalog";
import * as ReactDOM from "react-dom";
import CardStyle from "../../../components/Cards/css/CardStyle";
import {_try} from "../../../components/lib";
import Checkbox from "../../../components/Checkbox/Checkbox";
import InputSelect from "../../../components/InputSelect";

class AddFishItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}

        this.fileUploadOnChange = this.fileUploadOnChange.bind(this);

    }

    getFishGroup (){
        const group = Katalog.getGroup();
        let r = [];
        for (let name in group) {
            r.push({value:group[name].name,text: group[name].catalog_tittle})
        }

        return r;
    }
    getAllPackage() {
       return  [{value:"кг",text: "кг"},{value:"кор",text: "кор"},{value:"шт",text: "шт"}];
    }
    fileUploadOnChange(changeEvent) {
        const data = new FormData();
        data.append('img',changeEvent.target.files[0]);

        /*fetch("http://localhost:3001/todo/upload", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        }).then((response) =>  {
            return response.text();
        })*/
    }


    render() {

        const item = Katalog.get(this.props.match.params.id) || {};

        /*if (!itemFish) {
            return (<div>Добавление новой продукции</div>)
        }*/
        let name=React.createRef(),
            fishGroupRef=React.createRef(),
            packagingGroupRef=React.createRef(),
            price = React.createRef(),
            info = React.createRef(),
            catchDate = React.createRef(),
            producer = React.createRef(),
            hit = React.createRef(),
            weightFishHelp = React.createRef(),
            weightOfOneFish = React.createRef();

        return ( <div className={css(SeafoodItemStyle.cnt)}>
            <div className={css(SeafoodItemStyle.h124)}></div>
            <div className={css(SeafoodItemStyle.flexContainer)}>
                <div className={css(SeafoodItemStyle.fishContainer, SeafoodItemStyle.width40P)}>
                    <div className={css(SeafoodItemStyle.fishContainerFirst)}>
                        <InputSelect ref={fishGroupRef} text={"Группа"} options={this.getFishGroup()} value={ _try(() => item.parent.catalog_tittle, "")}/>

                        <div><span className={css(SeafoodItemStyle.img)}>Изображение</span><br/>
                            {(item.img) && <img className={css(SeafoodItemStyle.img)} src={item.img}></img>}<br/>

                            &nbsp;<input type="file" onChange={this.fileUploadOnChange}/></div>

                        <div>
                            <div style={{width: '50%'}}>Вылов <InputTextBox text={item.catchDate}  ref={catchDate}  id={'add_fish_catchDate'} placeholder={''}/></div>
                            <div>&nbsp;</div>
                            <div style={{width: '50%'}}>Производитель<InputTextBox text={item.producer}  ref={producer}  id={'add_fish_producer'} placeholder={''}/></div>
                            <div style={{width: '50%'}}>
                                <Checkbox ref={hit} isChecked={item.hit} text={"Хит"}/>

                            </div>
                        </div>
                    </div>
                </div>

                <div className={css(SeafoodItemStyle.infoContainer, SeafoodItemStyle.width30P)}>

                    <div className={css(SeafoodItemStyle.nameDiv)}>
                        <span className={css(SeafoodItemStyle.name)}>
                            Наименование<InputTextBox text={item.name} ref={name}  id={'add_fish_name'} placeholder={''}/></span>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className={css(SeafoodItemStyle.price)}>
                             <nobr>цена<InputTextBox text={item.price}  ref={price}  id={'add_fish_price'} placeholder={''}/></nobr></span><br/>
                        <span>Информация<InputTextBox text={item.info} ref={info}  id={'add_fish_info'} placeholder={''}/></span>
                    </div>

                    <div>
                        <InputSelect ref={packagingGroupRef} text={"Фасовка"} options={this.getAllPackage()} value={ _try(() => item.packaging, "")}/>
                    </div>
                    <div  className={css(SeafoodItemStyle.aboutFish)}>
                        Расчетный вес одной рыбы ~ <InputTextBox text={item.weightOfOneFish} ref={weightOfOneFish}  id={'add_fish_weightOfOneFish'} placeholder={''}/><br/>
                        Текст подсказка вес одной рыбы ~ <InputTextBox text={_try(() => item.weightFish.help, "")} ref={weightFishHelp}  id={'add_fish_weightFish_help'} placeholder={''}/><br/>

                    </div>

                    <div>
                        <button onClick={() => {
                            console.log(name.current.wrappedInstance.getValue());
                            console.log(hit.current);
                            console.log(fishGroupRef.current);
                            console.log(packagingGroupRef);
                        }} style={{width: '174px'}} className={css(AppStyle.buttonRed)}>Сохранить
                        </button>
                    </div>


                    <div></div>
                </div>

            </div>



            <div style={{height:'93px'}}></div>
        </div>)
    }

}


export default AddFishItem