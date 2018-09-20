import React, {Fragment} from 'react';
import $ from "jquery";
import {css} from "aphrodite/no-important";
import SeafoodItemStyle from "../SeafoodItemStyle";
import AppStyle from "../../../css/AppStyle";
import InputTextBox from "../../../components/InputTextBox/InputTextBox";
import Katalog from "../../../Katalog";
import * as ReactDOM from "react-dom";
import _ from "lodash/core";
import {_try} from "../../../components/lib";
import Checkbox from "../../../components/Checkbox/Checkbox";
import InputSelect from "../../../components/InputSelect";
import config from "../../../config";
import axios from 'axios';

class AddFishItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.idRef=React.createRef();
        this.sizeRef=React.createRef();
        this.imgRef=React.createRef();
        this.nameRef=React.createRef();
        this.showCaseNameRef=React.createRef();
        this.fishGroupRef=React.createRef();
        this.packagingGroupRef=React.createRef();
        this.priceRef = React.createRef();
        this.infoRef = React.createRef();
        this.catchDateRef = React.createRef();
        this.producerRef = React.createRef();
        this.hitRef = React.createRef();
        this.weightFishHelpRef = React.createRef();
        this.weightOfOneFishRef = React.createRef();

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
    getSizeFish() {
       return  [{value:"",text: "Отсутствует"},{value:"s",text: "s"},{value:"m",text: "m"},{value:"l",text: "l"}];
    }
    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    getFishItemFromRefs(){
        const item =  _.clone(Katalog.get(this.idRef.current.wrappedInstance.getValue()) || Katalog.getFishItem());



        item.id = this.idRef.current.wrappedInstance.getValue();
        item.showCaseName = null;
        item.name = this.nameRef.current.wrappedInstance.getValue();
        item.showCaseName = this.showCaseNameRef.current.wrappedInstance.getValue();
        item.info = this.infoRef.current.wrappedInstance.getValue();
        item.isRedFish = null;
        item.packaging = this.packagingGroupRef.current.ref.current.value;

        item.packagingInfo = null;
        item.nutritionalValue = null;
        item.hit = this.hitRef.current.getChecked();
        item.img = _try(() => "./"+this.imgRef.current.files[0].name, null)
        item.weightOfOneFish = this.weightOfOneFishRef.current.wrappedInstance.getValue();
        item.weightFish = {size:this.sizeRef.current.ref.current.value, help : this.weightFishHelpRef.current.wrappedInstance.getValue()};
        item.producer = this.producerRef.current.wrappedInstance.getValue();
        item.catchDate = this.catchDateRef.current.wrappedInstance.getValue();
        item.price = parseFloat(this.priceRef.current.wrappedInstance.getValue().replace(",","."))

        return item;

    }
    saveData(selectedFish){

        const newFish = this.getFishItemFromRefs();


        Katalog.setFishItem(this.fishGroupRef.current.ref.current.value,newFish)

        let imgFile = _try(() => this.imgRef.current.files[0], null)
        if (imgFile) {
            const formData = new FormData();
            formData.append('myFile', imgFile, imgFile.name);
            axios.post('http://localhost:3212/file-upload', formData);
        }

        axios.post(`http://localhost:3212/set_catalog`, {
            catalog: Katalog.price
        })
            .then(function (response) {
                alert('Сохранено')
                console.log(response);
            })
            .catch(function (error) {
                alert('Ошибка при сохранении')
                console.log(error);
            });

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

        let imgFile = null
        try {
            imgFile = config.imgRequire(item.img)
        } catch (e) {
        }

        return ( <div className={css(SeafoodItemStyle.cnt)}>
            <div className={css(SeafoodItemStyle.h124)}></div>
            <div  className={css(SeafoodItemStyle.flexContainer)}>
                <div className={css(SeafoodItemStyle.fishContainer, SeafoodItemStyle.width40P)}>
                    <div className={css(SeafoodItemStyle.fishContainerFirst)}>
                        <InputSelect ref={this.fishGroupRef} text={"Группа"} options={this.getFishGroup()} value={ _try(() => item.parent.id, "")}/>

                        <div><span className={css(SeafoodItemStyle.img)}>Изображение</span><br/>
                            {(item.img) && <img className={css(SeafoodItemStyle.img)} src={imgFile}></img>}<br/>

                            &nbsp;<input type="file" ref={this.imgRef} onChange={this.fileUploadOnChange}/></div>

                        <div>
                            <div style={{width: '50%'}}>Вылов <InputTextBox text={item.catchDate}  ref={this.catchDateRef}  id={'add_fish_catchDate'} placeholder={''}/></div>
                            <div>&nbsp;</div>
                            <div style={{width: '50%'}}>Производитель<InputTextBox text={item.producer}  ref={this.producerRef}  id={'add_fish_producer'} placeholder={''}/></div>
                            <div style={{width: '50%'}}>
                                <Checkbox ref={this.hitRef} isChecked={item.hit} text={"Хит"}/>

                            </div>
                        </div>
                    </div>
                </div>

                <div style={{height:'550px'}} className={css(SeafoodItemStyle.infoContainer, SeafoodItemStyle.width30P)}>

                    <div className={css(SeafoodItemStyle.nameDiv)}>
                        <span className={css(SeafoodItemStyle.name)}>
                            Идентификатор<InputTextBox text={item.id} ref={this.idRef}  id={'add_fish_id'} placeholder={''}/></span>
                        <span className={css(SeafoodItemStyle.name)}>
                            Наименование полное<InputTextBox text={item.name} ref={this.nameRef}  id={'add_fish_name'} placeholder={''}/></span>

                        <span className={css(SeafoodItemStyle.name)}>
                            Наименование для карточки<InputTextBox text={item.showCaseName} ref={this.showCaseNameRef}  id={'add_fish_showCaseName'} placeholder={''}/></span>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className={css(SeafoodItemStyle.price)}>
                             <nobr>цена<InputTextBox text={item.price}  ref={this.priceRef}  id={'add_fish_price'} placeholder={''}/></nobr></span><br/>
                        <span className={css(SeafoodItemStyle.name)}>Информация<InputTextBox text={item.info} ref={this.infoRef}  id={'add_fish_info'} placeholder={''}/></span>
                    </div>

                    <div className={css(SeafoodItemStyle.nameDiv)}>
                         <span className={css(SeafoodItemStyle.name)}>
                        <InputSelect ref={this.packagingGroupRef} text={"Фасовка"} options={this.getAllPackage()} value={ _try(() => item.packaging, "")}/>
                         </span>
                    </div>
                    <div className={css(SeafoodItemStyle.nameDiv)}>
                         <span className={css(SeafoodItemStyle.name)}>
                        <InputSelect ref={this.sizeRef} text={"Размер"} options={this.getSizeFish()} value={ _try(() => item.weightFish.size, "")}/>
                         </span>
                    </div>
                    <div  className={css(SeafoodItemStyle.aboutFish)}>
                        Расчетный вес одной рыбы ~ <InputTextBox text={item.weightOfOneFish} ref={this.weightOfOneFishRef}  id={'add_fish_weightOfOneFish'} placeholder={''}/><br/>
                        Текст подсказка вес одной рыбы ~ <InputTextBox text={_try(() => item.weightFish.help, "")} ref={this.weightFishHelpRef}  id={'add_fish_weightFish_help'} placeholder={''}/><br/>

                    </div>

                    <div>
                        <button onClick={() => {
                            this.saveData(item);
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