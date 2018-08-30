import React from 'react';

import {css} from "aphrodite/no-important";
import QualityAssuranceStyle from "./QualityAssuranceStyle";
import PouchIcon from "../../containers/PouchIcon/PouchIcon";
import {MobileAgent} from "../../components/MobileAgent/MobileAgent";





const QualityAssurance = (props) => {
    let {isMinimize} = props;

    return (
        <div className={css(QualityAssuranceStyle.cnt, (!isMinimize)? QualityAssuranceStyle.cnt_grey:null)}>

            <div className={css(QualityAssuranceStyle.quality_assurance_area)}></div>
            <div className={css(QualityAssuranceStyle.h1)}>Гарантия качества</div>
            <div className={css(QualityAssuranceStyle.quality_assurance_area)}></div>

            <div className={css(QualityAssuranceStyle.flexContainer)}>
                <div className={css(QualityAssuranceStyle.seafood_layer2, QualityAssuranceStyle.MR96)}>
                    <img src={require('../../img/design/seafood_layer2/seafood_layer.png')}
                         srcSet={`${require('../../img/design/seafood_layer2/seafood_layer2x.png')} 2x, ${require('../../img/design/seafood_layer2/seafood_layer3x.png')} 3x`}
                         width='100%' height='100%'></img>
                </div>


                <div className={css(QualityAssuranceStyle.flexContainer2)}>
                    <div className={css(QualityAssuranceStyle.w304, QualityAssuranceStyle.MR96)}>
                        <div className={css(QualityAssuranceStyle.h44)}></div>
                        <div className={css(QualityAssuranceStyle.caption)}>Природные места<br/>добычи</div>
                        <div className={css(QualityAssuranceStyle.h44)}></div>
                        <div className={css(QualityAssuranceStyle.text)}>Рыба - наш семейный бизнес. Поставляем
                            свежемороженные морепродукты более 20 лет, сотрудничаем с крупнейшими добывающими компаниями
                            Дальнего Востока, и импортируем рыбу и морепродукты из Аргентины и Чили.
                        </div>

                        <div style={(isMinimize) ? {display: 'none'} : {display: 'block'}}>
                            <div style={{height:'40px'}}></div>
                            <div className={css(QualityAssuranceStyle.caption)}>Качество подтвержденное
                                сертификатами<br/>добычи
                            </div>
                            <div className={css(QualityAssuranceStyle.h44)}></div>
                            <div className={css(QualityAssuranceStyle.text)}>Морепродукты «FishBazar» соответствуют как
                                международным, так и российским стандартам качества. Наши эксперты отбирают лучшие
                                партии,
                                отвечают за проверку документации и ветеринарного свидетельства.
                            </div>
                        </div>

                    </div>
                    <div  style={{width:'100%'}} className={css(QualityAssuranceStyle.mobileShow, QualityAssuranceStyle.w304, QualityAssuranceStyle.MR96)}>
                        <div className={css(QualityAssuranceStyle.h44)}></div>
                        <img src={require('../../img/design/seafood_layer2/seafood_layer.png')}
                             srcSet={`${require('../../img/design/seafood_layer2/seafood_layer2x.png')} 2x, ${require('../../img/design/seafood_layer2/seafood_layer3x.png')} 3x`}
                             width='70%' height='80%'></img>



                    </div>
                    <div className={css(QualityAssuranceStyle.w304, QualityAssuranceStyle.MR96)}>
                        <div className={css(QualityAssuranceStyle.h44)}></div>
                        <div className={css(QualityAssuranceStyle.caption)}>Правильная перевозка и<br/>хранение</div>
                        <div className={css(QualityAssuranceStyle.h44)}></div>
                        <div className={css(QualityAssuranceStyle.text)}>Знаем как сохранить природную свежесть
                            продукта. На этапах транспортировки и хранения поддерживаем требуемый температурный режим и
                            влажность. Морепродукты замораживаются только один раз.
                        </div>

                        <div style={(isMinimize) ? {display: 'none'} : {display: 'block'}}>
                            <div className={css(QualityAssuranceStyle.h44)}></div>
                            <div className={css(QualityAssuranceStyle.caption)}>Работаем без<br/>посредников</div>
                            <div className={css(QualityAssuranceStyle.h44)}></div>
                            <div className={css(QualityAssuranceStyle.text)}>Главная причина низкого качества и высокой
                                цены
                                морепродуктов в магазинах, это транспортировка через 33 оптовика до конечного
                                покупателя. Мы
                                напрямую закупаем морепродукты у добывающих компаний и организуем доставку с Дальнего
                                Востока до Самарской области, это и помогает сохранять низкие цены близкие к оптовым.
                            </div>
                        </div>


                    </div>
                </div>

            </div>

            <div style={(isMinimize) ? {display: 'none'} : {display: 'block'}}>
                <div style={{height:'140px'}}></div>
            </div>
        </div>
    );
};

export default QualityAssurance;