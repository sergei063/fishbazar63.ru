import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {connect} from "react-redux";
import {css} from "aphrodite";
import AppStyle from "../../css/AppStyle";
import AllBlogStyle from "./AllBlogStyle";
import MenuBlog, {MenuBlogFilter} from "../../components/Blog/Menu/MenuBlog";
import {_try} from "../../components/lib";
import SeafoodItemStyle from "../Seafood/SeafoodItemStyle";
import {MobileAgent} from "../../components/MobileAgent/MobileAgent";
import Katalog from "../../Katalog";
import axios from "axios/index";
import config from "../../config";



const RecipesDB = {
    "fish": {
        "catalog_tittle": "Рыба",
        "items": [
            {
                "name": "cod_in_green_sauce",
                "tittle": "Треска в зеленом соусе”",
                "img": './cod_in_green_sauce.jpg',
                "date": "2018-09-01",
                "fish_for_recipe":["treska_15"],
                "ingredients": [
                    "125 мл оливкового масла",
                    "1 ст.л. мелко нарезанного чеснока",
                    "700 г филе трески",
                    "горсть листьев петрушки или укропа или их смеси"
                ],
                "html_text": "<p>Оливковое масло налейте в&nbsp;просторную сковороду, добавьте чеснок и&nbsp;нагревайте на&nbsp;маленьком огне не&nbsp;менее 10&nbsp;минут. Чеснок должен начать подрумяниться.</p>\n" +
                "<p>Добавьте рыбное филе, увеличьте огонь под сковородой до&nbsp;умеренного и&nbsp;готовьте 3&nbsp;минуты. Осторожно переверните рыбу, добавьте мелко нарубленную зелень. Готовьте минут 5-7, встряхивая сковороду, пока рыба не&nbsp;станет матовой по&nbsp;всей толщине филе. Подавайте на&nbsp;стол, украсив свежей петрушкой. Подавайте с&nbsp;отварным молодым картофелем или картофельным пюре.</p>"

            },
            {
                "name": "flounder_baked",
                "tittle": "Камбала запеченая",
                "img": './flounder_baked.jpg',
                "date": "2018-09-02",
                "ingredients": [
                    "600 г филе камбалы – 4 куска",
                    "1 красный сладкий перец",
                    "1 зеленый сладкий перец",
                    "100-120 мл белого сухого вина",
                    "1 луковица",
                    "4 кружка лимона",
                    "растительное масло",
                    "зелень укропа, лавровый лист",
                    "соль,чёрный перец"
                ],
                "fish_for_recipe":["Flounder_s"],
                "html_text": "<p><span>Заранее из&nbsp;пергамента вырезать 8&nbsp;кругов диаметром 14&nbsp;см. Рыбу вымыть, обсушить. Лук очистить, нарезать тонкими полукольцами. Перцы вымыть, разрезать пополам и&nbsp;удалить сердцевину, нарезать тонкой соломкой. Укроп вымыть, обсушить и&nbsp;измельчить.</span></p>\n" +
                "<p><span>На&nbsp;4&nbsp;круга положить по&nbsp;куску рыбы. На&nbsp;рыбу положить по&nbsp;кружку лимона, а&nbsp;затем&nbsp;— нарезанные овощи. Посолить, поперчить, сбрызнуть вином.</span></p>\n" +
                "<p><span>Духовку разогреть до&nbsp;180 °С.&nbsp;Противень сбрызнуть маслом. Накрыть рыбу с&nbsp;овощами вторым кружком пергамента, завернуть края. Сверху смазать пергамент маслом. Поставить в&nbsp;духовку, готовить 30&nbsp;мин. Подавать к&nbsp;столу в&nbsp;пергаменте, сделав посередине разрез и&nbsp;отогнув края. Перед подачей блюдо можно сбрызнуть бальзамическим уксусом или лимонным соком, посыпать рыбу мелко нарезанным укропом или кинзой.</span></p>"

            },
            {
                "name": "salmon_in_citrus_sauce",
                "tittle": "Семга в цитрусовом соусе",
                "img": './salmon_in_citrus_sauce.jpg',
                "date": "2018-09-03",
                "ingredients": [
                    "4 куска филе лосося по 120 г каждый",
                    "сок половины лимона",
                    "оливковое масло",
                    "соль, свежемолотый черный перец",
                    "шнитт-лук для подачи"
                ],
                "fish_for_recipe":["salmon_of_chile_s"],
                "to_sauce": [
                    "2 желтка",
                    "185 г сливочного масла",
                    "сок половины лимона",
                    "цедра 1 апельсина",
                    "щепотка кайенского перца",
                    "соль"
                ],
                "html_text": "<p><span>Нарежьте сливочное масло кубиками, положите в&nbsp;сотейник и&nbsp;растопите на&nbsp;среднем огне. Немного остудите. Натрите апельсиновую цедру на&nbsp;мелкой терке.</span></p>\n" +
                "<p><span>Разогрейте духовку с&nbsp;грилем до&nbsp;180 °С.&nbsp;Застелите противень бумагой для выпечки. Куски лосося положите на&nbsp;противень, посолите, поперчите, сбрызните лимонным соком и&nbsp;оливковым маслом. Поставьте в&nbsp;духовку и&nbsp;запекайте 10&nbsp;мин.</span></p>\n" +
                "<p><span>В&nbsp;это&nbsp;же время приготовьте водяную баню для соуса. Поставьте на&nbsp;огонь кастрюлю с&nbsp;водой и&nbsp;доведите до&nbsp;кипения. На&nbsp;кастрюлю установите стальную или стеклянную миску, чтобы вода не&nbsp;касалась дна. Положите в&nbsp;миску желтки, щепотку соли и&nbsp;взбивайте венчиком или электрическим миксером, пока масса не&nbsp;посветлеет.</span></p>\n" +
                "<p><span>Тонкой струйкой вливайте в&nbsp;желтки растопленное масло, не&nbsp;прекращая взбивать, пока соус не&nbsp;загустеет. Добавьте лимонный сок, апельсиновую цедру и&nbsp;кайенский перец, смешайте. Снимите соус с&nbsp;водяной бани и&nbsp;сохраняйте теплым. Разложите семгу и&nbsp;брокколи на&nbsp;тарелки, полейте соусом. Посыпьте измельченным шнитт-луком.</span></p>"

            },
            {
                "name": "trout_in_sweet_and_sour_sauce",
                "tittle": "Форель в кисло-сладком соусе",
                "img": './trout_in_sweet_and_sour_sauce.jpg',
                "date": "2018-09-04",
                "fish_for_recipe":["Trout_of_chile"],
                "html_text": "<p><span>Форель очистить, выпотрошить и&nbsp;тщательно промыть. Удалить голову, хвост и&nbsp;плавники.</span></p>\n" +
                "<p><span>Лук очистить и&nbsp;измельчить. С&nbsp;лимона снять цедру, из&nbsp;мякоти выжать сок. Горошины перца раздавить. Укроп и&nbsp;петрушку вымыть и&nbsp;измельчить. Перцы нарезать небольшими кубиками. Снять листики базилика со&nbsp;стеблей. Стебли измельчить. Перцы и&nbsp;базилик отложить.</span></p>\n" +
                "<p><span>Смешать в&nbsp;миске растительное масло, коньяк, соус-маринад. Добавить лук, цедру и&nbsp;сок лимона, перец, укроп, петрушку, сахар и&nbsp;соль по&nbsp;вкусу. Выложить форель на&nbsp;блюдо и&nbsp;полить маринадом. Оставить на&nbsp;15&nbsp;мин., затем перевернуть на&nbsp;другую сторону и&nbsp;оставить еще на&nbsp;15&nbsp;мин.</span></p>\n" +
                "<p><span>Маринад аккуратно слить в&nbsp;сотейник и&nbsp;довести до&nbsp;кипения. Добавить перцы и&nbsp;измельченные стебли базилика, готовить 5&nbsp;мин.</span></p>\n" +
                "<p><span>Добавить вино, довести до&nbsp;кипения, уменьшить огонь и&nbsp;уваривать соус 10&nbsp;мин. Снять с&nbsp;огня, дать остыть, затем перелить в&nbsp;банку или пластиковый контейнер.</span></p>\n" +
                "<p><span>Переложить рыбу на&nbsp;лист фольги, плотно завернуть и&nbsp;поставить в&nbsp;разогретую до&nbsp;160 °С&nbsp;духовку на&nbsp;1&nbsp;ч. Вынуть из&nbsp;духовки, разрезать фольгу и&nbsp;аккуратно слить выделившийся при запекании сок. Переложить рыбу на&nbsp;чистый лист фольги, дать остыть, затем не&nbsp;очень плотно завернуть и&nbsp;поставить в&nbsp;холодильник. На&nbsp;пикнике нарезать рыбу кусками и&nbsp;подать с&nbsp;соусом.</span></p>"

            },
            {
                "name": "salmon_with_fennel",
                "tittle": "Семга с фенхелем",
                "fish_for_recipe":["salmon_of_chile_s"],
                "img": './salmon_with_fennel.jpg',
                "date": "2018-09-05",
                "ingredients": [
                    "4 стейка лосося или куска филе по 180–200 г",
                    "1 небольшой кочанчик фенхеля",
                    "соль, свежемолотый черный перец",
                    "4 зубчика чеснока",
                    "оливковое масло",
                ],
                "html_text": "<p><span>Посолите рыбу и&nbsp;поперчите с&nbsp;обеих сторон. Очистите чеснок и&nbsp;нарежьте кружочками толщиной примерно 5&nbsp;мм. Влейте в&nbsp;самую маленькую кастрюльку 5&nbsp;ст.&nbsp;л. растительного масла, положите чеснок и&nbsp;поставьте на&nbsp;небольшой огонь. Готовьте, пока кусочки чеснока не&nbsp;станут золотистыми, но&nbsp;не&nbsp;коричневыми. Снимите с&nbsp;огня и&nbsp;сразу перелейте в&nbsp;миску, чтобы чеснок не&nbsp;пережарился.</span></p>\n" +
                "<p><span>Разогрейте духовку до&nbsp;180 °С. У&nbsp;фенхеля срежьте поврежденные участки внешних листьев. Удалите стебли и&nbsp;зелень. Разрежьте кочанчик&shy; вдоль пополам и&nbsp;нарежьте по&nbsp;диагонали на&nbsp;8&nbsp;секторов, стараясь, чтобы все листочки остались прикрепленными к&nbsp;основанию и&nbsp;не&nbsp;разваливались.</span></p>\n" +
                "<p><span>Налейте на&nbsp;сковороду пару ложек чесночного масла (без чеснока), обжарьте фенхель до&nbsp;золотистого цвета с&nbsp;обеих сторон.</span></p>\n" +
                "<p><span>Сделайте 4&nbsp;квадрата из&nbsp;фольги. В&nbsp;центр каждого выложите по&nbsp;2&nbsp;ломтика фенхеля. На&nbsp;них уложите по&nbsp;1&nbsp;рыбному стейку, на&nbsp;рыбу&nbsp;— кусочки чеснока. Полейте маслом.</span></p>\n" +
                "<p><span>Поднимите края фольги и&nbsp;закрепите так, чтобы над рыбой осталось пространство для выхода пара. Положите «конверты» с&nbsp;рыбой на&nbsp;противень, стоящий в&nbsp;нижней трети духовки. Запекайте <nobr>12–15 мин.,</nobr> в&nbsp;зависимости от&nbsp;толщины стейка. Подавайте горячими.</span></p>"

            },

        ]
    },
    "Shrimp": {
        "catalog_tittle": "Креветки",
        "items": [
            {
                "name": "spring_roll",
                "tittle": "Салат с квертками “Spring roll”",
                "img": './spring_rol.jpg',
                "date": "2018-09-06",
                "ingredients": [
                    "250 г крупных креветок",
                    "100 г рисовой лапши",
                    "2 небольшие морковки",
                    "1 средний огурец",
                    "6 веточек кинзы",
                    "3 пера зеленого лука",
                    "половина красной луковицы",
                    "по 1 ч. л. светлых и черных семян кунжута",
                    "соль"
                ],
                "fish_for_recipe":["shrimp_angular"],
                "to_refill": [
                    "3 см корня имбиря",
                    "1 ст. л. меда",
                    "1/4 стакана лаймового сока",
                    "1/4 стакана воды",
                    "1/4 стакана растительного масла",
                    "1 ст. л. рисового винного уксуса",
                    "соль, свежемолотый черный перец"
                ],
                "html_text": "<p>Вскипятите воду в&nbsp;кастрюле. Положите рисовую лапшу и&nbsp;варите 5&nbsp;мин., до&nbsp;готовности. Откиньте на&nbsp;дуршлаг, затем промойте холодной водой. Остудите.</p>\n" +
                "<p>Очистите креветки от&nbsp;панциря, удалите голову и&nbsp;хвостик. Надрежьте вдоль спинки острым ножом и&nbsp;удалите темную вену. Вскипятите воду в&nbsp;сотейнике, посолите и&nbsp;отварите креветки до&nbsp;готовности, 2&nbsp;мин. Остудите.</p>\n" +
                "<p>Для заправки очистите имбирь и&nbsp;натрите на&nbsp;мелкой терке. Смешайте все компоненты заправки в&nbsp;банке с&nbsp;завинчивающейся крышкой и&nbsp;хорошо потрясите. Очистите морковь и&nbsp;нарежьте тонкой соломкой или натрите на&nbsp;терке для корейской моркови. Зеленый лук нарежьте наискосок. Огурец разрежьте вдоль пополам и&nbsp;нарежьте ломтиками. Крупно порубите листья кинзы. Красный лук нарежьте тонкими четвертинками колец. Выложите овощи и&nbsp;зелень в&nbsp;миску.</p>\n" +
                "<p>Добавьте в&nbsp;салат рисовую лапшу и&nbsp;креветки и&nbsp;полейте заправкой. Разложите салат по&nbsp;тарелкам и&nbsp;посыпьте белым и&nbsp;черным кунжутом.</p>"

            },
            {
                "name": "tuscan_salad_with_tiger_prawns_and_white_beans",
                "tittle": "Тосканский салат с тигровыми креветками и белой фасолью",
                "img": './tuscan_salad_with_tiger_prawns_and_white_beans.jpg',
                "date": "2018-09-06",
                "fish_for_recipe":["shrimp_tiger"],
                "ingredients": [
                    "руккола – 300 г",
                    "тигровые креветки – 200 г",
                    "помидоры черри – 100 г",
                    "отварной белой фасоли – 100 г",
                    "оливковое масло – 3 ст.л.",
                    "горчица зерновая французская – 1 ч.л.",
                    "соевый соус – 1 ст.л.",
                    "мёд – 1/4 ч.л.",
                    "сок лимона – 1 ч.л."
                ],
                "to_refill": [
                    "смешиваем оливковое масло с соевым соусом в пропорции 1:3.",
                    "добавляем немного горчицы, мёда и сока лимона.",
                    "заправка готова."
                ],
                "html_text": "<p><span>На&nbsp;разогретую сковороду выливаем немного оливкового масла. Когда оно закипит, выкладываем на&nbsp;сковороду немного раздавленные чесночные зубчики. Обжариваем&nbsp;их, пока они не&nbsp;пожелтеют. Далее выкладываем креветки (в&nbsp;панцире или без) и&nbsp;обжариваем их&nbsp;на&nbsp;сильном огне <nobr>(1-2 мин),</nobr> сбрызнув соевым соусом.</span></p>\n" +
                "<p><span>Далее смешиваем свежую рукколу с&nbsp;помидорами, добавляем креветки и&nbsp;заправляем получившимся соусом.</span></p>"

            }
        ]
    },
    "Langoustines": {
        "catalog_tittle": "Лангустины",
        "items": []
    },
    "Shellfish": {
        "catalog_tittle": "Моллюски",
        "items": [
            {
                "name": "scallops_with_miso_sauce",
                "tittle": "Морские гребешки с соусом мисо",
                "img": './scallops_with_miso_sauce.jpg',
                "date": "2018-09-06",
                "fish_for_recipe":["scallop"],
                "ingredients": [
                    "сливки – 2 ст. л.",
                    "паста мисо – 2 ст. л.",
                    "мелкий сахар – 1 ч. л.",
                    "чеснок – 1 зубчик",
                    "соль, перец",
                    "соевый соус – 1 ч. л.",
                    "белое сухое вино – 3 ст. л.",
                    "мука – 3 ст. л.",
                    "морские гребешки – 250 г",
                    "растительное масло – 2 ст. л."

                ],
                "to_refill": [],
                "html_text": "<p>Разморозьте гребешки, затем обжарьте на&nbsp;оливковом масле на&nbsp;медленном огне. Приправить гребешки солью и&nbsp;перцем. Чеснок очистить, измельчить и&nbsp;смешать с&nbsp;мукой. Обвалять в&nbsp;этой смеси гребешки.Обжарить гребешки в&nbsp;разогретом масле, по&nbsp;2-3&nbsp;мин.&nbsp;с&nbsp;каждой стороны. Переложить на&nbsp;блюдо.</p>\n" +
                "<p>Добавить в&nbsp;сковороду пасту мисо, вино, соевый соус, сахар и&nbsp;2&nbsp;ст.&nbsp;л. воды. Помешивая, довести на&nbsp;среднем огне до&nbsp;кипения. Добавить сливки, снять с&nbsp;огня. Вылить горячий соус на&nbsp;гребешки.</p>"

            },
            {
                "name": "grilled_squid",
                "tittle": "Кальмары на гриле",
                "img": './grilled_squid.jpg',
                "date": "2018-09-06",
                "fish_for_recipe":["squid"],
                "html_text": "<p><span>Размораживать кальмары, следует либо в&nbsp;холодильнике, либо при комнатной температуре. </span></p>\n" +
                "<p><b><br/>\n" +
                " \t</b> \n" +
                "</p>\n" +
                "<p><span>Есть два способа обработки:</span></p>\n" +
                "<p><span>1. После размораживания отрезать щупальца, вытянуть хорду, вывернуть кальмара и&nbsp;счистить все пленки.</span></p>\n" +
                "<p><span>2. Опустить кальмара в&nbsp;кипяток на&nbsp;30&nbsp;секунд, как только белок начнет сворачиваться, пленка сама отсоединится от&nbsp;тушки. Сразу достать и&nbsp;под струей холодной воды счистить все лишнее. </span></p>\n" +
                "<p><b><br/>\n" +
                " \t</b> \n" +
                "</p>\n" +
                "<p><span>Выложить кальмара на&nbsp;гриль на&nbsp;<nobr>1-2 минуты.</nobr> Снять с&nbsp;огня, посолить, поперчить&nbsp;— продукт готов к&nbsp;употреблению.Главное, не&nbsp;передержать кальмара на&nbsp;огне, иначе вы&nbsp;получите жесткое мясо.</span></p>\n" +
                "<p><b><br/>\n" +
                " \t</b> \n" +
                "</p>\n" +
                "<p><span>Перед жаркой очищенного кальмара можно замариновать в&nbsp;оливковом масле со&nbsp;смесью специй&nbsp;— соли, перца, тимьяна, розмарина, кориандра.</span></p>\n" +
                "<p><span>Для маринада можно использовать также кефир, сметану, майонез&nbsp;— в&nbsp;зависимости от&nbsp;личных вкусовых предпочтений.</span></p>\n" +
                "<p><span>Подавать кальмары, приготовленные на&nbsp;гриле, можно с&nbsp;зеленым маслом: тимьян, розмарин, чеснок петрушка, растительное масло, оливковое масло.</span></p>"

            },
            {
                "name": "mussels_with_garlic_butter",
                "tittle": "Мидии с чесночным маслом",
                "img": './mussels_with_garlic_butter.jpg',
                "date": "2018-09-06",
                "fish_for_recipe":["mussels"],
                "ingredients":["20 мидий",
                    "50 г сливочного масла",
                    "2 ст. л. оливкового масла",
                    "по 2 веточки укропа, петрушки, базилика и тимьяна",
                    "2 зубчика чеснока",
                    "щепотка хлопьев перца чили",
                    "свежемолотый черный перец",
                    "крупная морская соль",
                ],
                "html_text": "<p><span>Положите чеснок и&nbsp;зелень в&nbsp;чашу блендера и&nbsp;измельчите. Добавьте сливочное и&nbsp;оливковое масло, хлопья чили, посолите&shy; и&nbsp;поперчите. Хорошо перемешайте.</span></p>\n" +
                "<p><span>Разогрейте духовку до&nbsp;180 °С. В&nbsp;форму для выпечки насыпьте крупную соль слоем 5&nbsp;мм, чтобы мидии ровно лежали. Выложите мидии в&nbsp;раковинах. В&nbsp;каждую раковину положите зеленое масло.</span></p>\n" +
                "<p><span>Поставьте противень в&nbsp;духовку и&nbsp;запекайте <nobr>5–7 мин.,</nobr> пока масло полностью не&nbsp;растает. Подавайте мидии с&nbsp;багетом, дольками лимона и&nbsp;белым вином.</span></p>"

            }
        ]
    }


};


export const Recipes = {
    recipes:{},
    getAllItems: () => {
        let res = [];
        for (let el in Recipes.recipes) {


            let group = Recipes.recipes[el];
            if (group.catalog_tittle) {
                let r = group.items.map((recipe, index) => {
                    recipe.parent = {};
                    recipe.parent.id = el;
                    recipe.parent.catalog_tittle = group.catalog_tittle;
                    recipe.dateObj = new Date(recipe.date);
                    return recipe;
                });

                if (r) {
                    res = res.concat(...r);
                }

            }
        }
        return res;
    },
    getAllFilteredGroupItems: (groupName) => {
        let res = [];
        for (let el in Recipes.recipes) {


            let group = Recipes.recipes[el];

            if ((group.catalog_tittle) && (group.catalog_tittle===groupName)) {
                let r = group.items.map((recipe, index) => {
                    recipe.parent = {};
                    recipe.parent.id = el;
                    recipe.parent.catalog_tittle = group.catalog_tittle;
                    recipe.dateObj = new Date(recipe.date);
                    return recipe;
                });

                if (r) {
                    res = res.concat(...r);
                }

            }
        }
        return res;
    },
    getAllSordItems: (groupNameFilter) => {
        //getAllFilteredGroupItems()
        let items = (groupNameFilter)? Recipes.getAllFilteredGroupItems(groupNameFilter): Recipes.getAllItems();
        return items.sort(function (a, b) {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        });
    },
    getGroup: function () {
        let r = [];
        for (let el in Recipes.recipes) {
            let group = Recipes.recipes[el];
            if (group.catalog_tittle) {
                r.push({name: el, catalog_tittle: group.catalog_tittle})

            }
        }

        return r;
    },
    get: function (name) {
        const isProduct = p => p.name === name;

        for (let recipe in Recipes.recipes) {
            let group = Recipes.recipes[recipe];
            if (group.catalog_tittle) {
                let el = group.items.find(isProduct);
                if (el) {
                    el.parent = {};
                    el.parent.id = recipe;
                    el.parent.catalog_tittle = group.catalog_tittle;
                    el.dateObj = new Date(el.date);

                    return el;
                }
            }
        }
    },
};

const dateOptions = {
    //weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric"
};


const AllBlog = (props) => {

    let recipes = Recipes.getAllSordItems(_try(() => props.history.location.state.blogFilter, null));

    if (!recipes || recipes.length===0) {
        return (<div>Подождите...</div>)
    }
    return (
        <div className={css(AllBlogStyle.cnt)}>
           <div className={css(AllBlogStyle.tabletShow, AllBlogStyle.menuBlogFilterStyle)}> {MobileAgent.any() && <MenuBlogFilter history={props.history}/>}

           </div>
            <div className={css(AllBlogStyle.cntFlex)}>
                <div style={{width: '65%'}}>

                    <div className={css((recipes.length>0)?AppStyle.displayNone:AppStyle.displayBlock)}>В категории <span style={{textTransform:'lowercase'}}>{_try(() => props.history.location.state.blogFilter, '')}</span> пока нет рецептов.</div>


                    {recipes.map((recipe, index) => (
                            <div key={index.toString()}>
                                <h1 className={css(AllBlogStyle.h1)}>{recipe.tittle}</h1>
                                <h2 className={css(AllBlogStyle.h2)}>{recipe.parent.catalog_tittle}&nbsp;&nbsp;|&nbsp;&nbsp;{recipe.dateObj.toLocaleString('ru', dateOptions)}  </h2>
                                <div><img className={css(AllBlogStyle.img)} src={config.imgBlogRequire(recipe.img)}></img></div>
                                <div style={{marginTop: '36px', marginBottom: '64px'}}>
                                    <button style={{width: '134px'}} className={css(AppStyle.buttonRed)} onClick={() => {

                                        props.history.push({
                                            state: {...props.history.location.state, selectedRecipe: recipe},
                                            pathname: `${props.history.location.pathname}/${recipe.name}`
                                        });
                                    }}>Рецепт
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                </div>
                <div className={css(AllBlogStyle.tabletHide, AllBlogStyle.stickyBlock)}><MenuBlog history={props.history}/></div>
            </div>

            <div style={{height: '164px'}}></div>
        </div>
    );
};


const BreadCrumbs = (props)  => {
    return (
        <div>
            <Link onClick={(event) => {
                event.preventDefault();
                props.history.push({pathname: '/blog', state: {...props.history.location.state,blogFilter: null}});
                /*this.scrollToProductuionContainer(); */
            }} className={css(SeafoodItemStyle.link)} to='/blog'>Рецепты</Link>
            &nbsp;/&nbsp;
            <Link onClick={(event) => {
                event.preventDefault();
                props.history.push({pathname: '/blog', state: {...props.history.location.state,blogFilter: props.item.parent.catalog_tittle}});

            }} className={css(SeafoodItemStyle.link)} to='/blog'>{props.item.parent.catalog_tittle}</Link>
            &nbsp;/&nbsp;
            <Link onClick={(event) => {
                event.preventDefault();
            }} className={css(SeafoodItemStyle.link)} to='/blog'>{props.item.tittle}</Link>
        </div>
    )
};

const OneBlog = (props) => {
    let selectedRecipe = null;
    try {
        selectedRecipe = props.history.location.state.selectedRecipe;
    } catch (e) {
        selectedRecipe = Recipes.get(props.match.params.recipe);

    }

    if (!selectedRecipe) {
        return (<div>Подождите...</div>)
    }
    return (
        <div className={css(AllBlogStyle.cnt)}>
            <div className={css(AllBlogStyle.mobileHide)}><BreadCrumbs item={selectedRecipe} history={props.history}/></div>
            <div className={css(AllBlogStyle.cntFlex)}>
                <div className={css(AllBlogStyle.recipeBlock)}>
                    <h1 className={css(AllBlogStyle.h1)}>{selectedRecipe.tittle}</h1>
                    <h2 className={css(AllBlogStyle.h2)}>{selectedRecipe.parent.catalog_tittle}&nbsp;&nbsp;|&nbsp;&nbsp;{selectedRecipe.dateObj.toLocaleString('ru', dateOptions)}  </h2>
                    <div><img  className={css(AllBlogStyle.img)} src={config.imgBlogRequire(selectedRecipe.img)}></img></div>
                    <div  style={{  marginTop: '52px', marginBottom: '40px',}}>

                        {(selectedRecipe.ingredients && selectedRecipe.ingredients.length > 0) &&
                        <div>
                            <div className={css(AllBlogStyle.ingredientsHeader)}>
                                <div><img src={require('../../img/logo_fish.png')} width='38px' height='38px'></img>
                                </div>

                                <div
                                    className={css(AllBlogStyle.ingredientsSpan, AllBlogStyle.ingredientsSpanPL40)}>Ингредиенты
                                </div>
                            </div>
                            <ul className={css(AllBlogStyle.ingredientsUL)}>
                                {selectedRecipe.ingredients.map((ingredient, index) => (
                                        <li key={index.toString()} className={css(AllBlogStyle.ingredientsLI)}>
                                            {ingredient}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>}

                    </div>
                    {(selectedRecipe.to_refill && selectedRecipe.to_refill.length>0) && <div  style={{  marginTop: '0px', marginBottom: '0px',}}>
                        <span className={css(AllBlogStyle.ingredientsSpan)}>Для заправки</span>
                        <ul  className={css(AllBlogStyle.ingredientsUL)}>
                            {selectedRecipe.to_refill.map((refill, index) => (
                                    <li key={index.toString()} className={css(AllBlogStyle.ingredientsLI)}>
                                        {refill}
                                    </li>
                                )
                            )}
                        </ul>

                    </div>}

                    {(selectedRecipe.to_sauce && selectedRecipe.to_sauce.length>0) && <div  style={{  marginTop: '0px', marginBottom: '0px',}}>
                        <span className={css(AllBlogStyle.ingredientsSpan)}>Для соуса</span>
                        <ul  className={css(AllBlogStyle.ingredientsUL)}>
                            {selectedRecipe.to_sauce.map((refill, index) => (
                                    <li key={index.toString()} className={css(AllBlogStyle.ingredientsLI)}>
                                        {refill}
                                    </li>
                                )
                            )}
                        </ul>

                    </div>}
                    <div className={css(AllBlogStyle.recipeHtmlText)}
                         dangerouslySetInnerHTML={{__html: selectedRecipe.html_text || ""}}>{}</div>
                </div>
                <div className={css(AllBlogStyle.tabletHide, AllBlogStyle.stickyBlock)}><MenuBlog history={props.history} fish_for_recipe={selectedRecipe.fish_for_recipe}/></div>
            </div>

            <div style={{height: '164px'}}></div>
        </div>
    );
};

class Blog extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path='/blog' params={this.props} component={connect(mapStateToProps)(AllBlog)}/>
                <Route path='/blog/:recipe' params={this.props} component={connect(mapStateToProps)(OneBlog)}/>
            </Switch>
        )
    }
    componentDidMount(){
        axios.get(`http://localhost:3212/blog`)
            .then(res => {

                Recipes.recipes = res.data
                this.forceUpdate();

            })


    }
}


const mapStateToProps = (state) => ({
    seafoodShoppingCart: state.seafoodShoppingCart,
    placeOfDelivery: state.placeOfDelivery
});

export default connect(mapStateToProps)(Blog);