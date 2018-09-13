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

            <div className={css(QualityAssuranceStyle.gridBaseContainer)}>
                <div className={css(QualityAssuranceStyle.seafood_layer2)}>
                    <img src={require('../../img/design/seafood_layer2/seafood_layer.png')}
                         srcSet={`${require('../../img/design/seafood_layer2/seafood_layer2x.png')} 2x, ${require('../../img/design/seafood_layer2/seafood_layer3x.png')} 3x`}
                         width='100%' height='100%'></img>
                </div>


                <div className={css(QualityAssuranceStyle.gridContainer)}>

                    <div className={css(QualityAssuranceStyle.gridCell)}>
                        <div className={css(QualityAssuranceStyle.caption)}><h2 style={{maxWidth:'224px'}} className={css(QualityAssuranceStyle.h2)}>Природные места добычи</h2></div>
                        <div className={css(QualityAssuranceStyle.text)}>Рыба - наш семейный бизнес. Поставляем
                            свежемороженные морепродукты более 20 лет, сотрудничаем с крупнейшими добывающими компаниями
                            Дальнего Востока, и импортируем рыбу и морепродукты из Аргентины и Чили.
                        </div>
                    </div>

                    <div className={css(QualityAssuranceStyle.gridCell)}>
                        <div className={css(QualityAssuranceStyle.caption)}><h2 className={css(QualityAssuranceStyle.h2)}>Правильная перевозка и хранение</h2></div>
                        <div className={css(QualityAssuranceStyle.text)}>Знаем как сохранить природную свежесть
                            продукта. На этапах транспортировки и хранения поддерживаем требуемый температурный режим и
                            влажность. Морепродукты замораживаются только один раз.
                        </div>
                    </div>
                    <div  style={{marginLeft:'0px'}} className={css(QualityAssuranceStyle.mobileShow, QualityAssuranceStyle.gridCell)}>
                        <img src={require('../../img/design/seafood_layer2/seafood_layer.png')}
                             srcSet={`${require('../../img/design/seafood_layer2/seafood_layer2x.png')} 2x, ${require('../../img/design/seafood_layer2/seafood_layer3x.png')} 3x`}
                             width='70%' height='80%'></img>
                    </div>
                    <div style={(isMinimize) ? {display: 'none'} : {display: 'block'}} className={css(QualityAssuranceStyle.gridCell)}>
                        <div className={css(QualityAssuranceStyle.caption)}><h2 className={css(QualityAssuranceStyle.h2)}>Качество подтвержденное сертификатами</h2>
                        </div>
                        <div className={css(QualityAssuranceStyle.text)}>Морепродукты «FishBazar» соответствуют как
                            международным, так и российским стандартам качества. Наши эксперты отбирают лучшие
                            партии,
                            отвечают за проверку документации и ветеринарного свидетельства.
                        </div>
                    </div>
                    <div style={(isMinimize) ? {display: 'none'} : {display: 'block'}} className={css(QualityAssuranceStyle.gridCell)}>
                        <div className={css(QualityAssuranceStyle.caption)}><h2 className={css(QualityAssuranceStyle.h2)}>Работаем без посредников</h2></div>
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

            <div style={(isMinimize) ? {display: 'none'} : {display: 'none'}}>

            </div>
        </div>
    );
};

export default QualityAssurance;