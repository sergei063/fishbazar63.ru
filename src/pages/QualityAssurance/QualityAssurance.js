import React from 'react';

import {css} from "aphrodite/no-important";
import QualityAssuranceStyle from "./QualityAssuranceStyle";
import DeliveryStyle from "../Delivery/DeliveryStyle";




const QualityAssurance = (props) => {

    return (
        <div className={css(QualityAssuranceStyle.cnt)}>
            <div className={css(QualityAssuranceStyle.h116)}></div>
            <div className={css(QualityAssuranceStyle.h1)}>Гарантия качества</div>

            <div className={css(QualityAssuranceStyle.flexContainer)}>
                <div className={css(QualityAssuranceStyle.seafood_layer2, QualityAssuranceStyle.MR96)}>
                    <img src={require('../../img/design/seafood_layer2/seafood_layer.png')}
                         srcSet={`${require('../../img/design/seafood_layer2/seafood_layer2x.png')} 2x, ${require('../../img/design/seafood_layer2/seafood_layer3x.png')} 3x`}
                         width='100%' height='100%'></img>
                </div>

                <div className={css(QualityAssuranceStyle.w304, QualityAssuranceStyle.MR96)}>
                    <div className={css(QualityAssuranceStyle.h116)}></div>
                    <div className={css(QualityAssuranceStyle.caption)}>Природные места<br/>добычи</div>
                    <div className={css(QualityAssuranceStyle.h44)}></div>
                    <div className={css(QualityAssuranceStyle.text)}>Рыба - наш семейный бизнес. Поставляем свежемороженные морепродукты более 20 лет, сотрудничаем с крупнейшими  добывающими компаниями Дальнего Востока, и импортируем рыбу и морепродукты из Аргентины и Чили.</div>
                </div>
                <div className={css(QualityAssuranceStyle.w304, QualityAssuranceStyle.MR96)}>
                    <div className={css(QualityAssuranceStyle.h116)}></div>
                    <div className={css(QualityAssuranceStyle.caption)}>Правильная перевозка и<br/>хранение</div>
                    <div className={css(QualityAssuranceStyle.h44)}></div>
                    <div className={css(QualityAssuranceStyle.text)}>Знаем как сохранить природную свежесть продукта. На этапах транспортировки и хранения поддерживаем требуемый температурный режим и влажность. Морепродукты замораживаются только один раз.</div>
                </div>


            </div>

        </div>
    );
}

export default QualityAssurance;