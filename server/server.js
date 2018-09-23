var express = require('express');
var bodyParser = require('body-parser');
var formidable = require('formidable');
var fs = require('fs');

var MongoClient = require('mongodb').MongoClient;

//var seafoodPath = '/../src/img/seafood/' //local
var seafoodPath = '/../fishbazar63.ru/img/src/img/seafood/' //server

var db;
var app = express();
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

var user_data = require('./user_data');


//jwt
app.set("secret","hjhgfjklsdh454fasd44563452534434318fs4e523444frsda");
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/test', function (req, res) {
    var token = req.body.auth_token || null;
    console.log(token)
    if (token) {
        var user = user_data.get_user(token, req.app.get('secret'));
        res.send(user)
        return
    }

    res.send("err")


    //res.send("OK")
});
app.post('/sign', function (req, res) {
    if (req.body.user.login && req.body.user.pass) {
        var autentificate_result = user_data.check_login(req.body.user.login, req.body.user.pass)
        if (autentificate_result.is_autentificate){
            var secret = res.app.get("secret")
            var token = user_data.get_token(autentificate_result.user_name,secret)
            //res.cookie("auth_token",token)
            res.send({"auth_token":token});
            return;
        }
    }

    res.send("OK");
});

app.get('/set_catalog123', function (req, res) {

    db.collection("fish_catalog").deleteOne({}, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500)
        }
        db.collection("fish_catalog").insertOne(Price, function (err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500)
            }
            res.send(Price)
        })
    })
});

app.post('/set_catalog', function(req, res) {
    var token = req.body.auth_token || null;

    if (token) {
        try {
            var user = user_data.get_user(token, req.app.get('secret'));
            console.log(user)
        } catch (e) {
            return res.sendStatus(404)
        }

        if (!user){
            return res.sendStatus(404)
        }
    }
    else {
        return res.sendStatus(404)
    }


    if (req.body.catalog){
        db.collection("fish_catalog").deleteOne({}, function (err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500)
            }
            db.collection("fish_catalog").insertOne(req.body.catalog, function (err, result) {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500)
                }
                res.send(req.body)
            })
        })


    }


});

app.post('/file-upload', function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req);
    form.on('fileBegin', function (name, file){

        file.path = __dirname + seafoodPath + file.name;
    });
    form.on('file', function (name, file){
        console.log('Uploaded ' + __dirname + seafoodPath + file.name);
    });






});

app.get('/del_catalog', function (req, res) {


    db.collection("fish_catalog").deleteOne({}, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500)
        }
        res.send(Price)
    })

});

app.get('/set_blog1', function (req, res) {


    db.collection("recipes").insertOne(RecipesDB, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500)
        }
        res.send(RecipesDB)
    })

});

app.get('/catalog', function (req, res) {

    db.collection("fish_catalog").findOne({},function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500)
        }

        res.send(docs)

    });
});
app.get('/blog', function (req, res) {

    db.collection("recipes").findOne({},function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500)
        }

        res.send(docs)

    });
});

app.get('/catalog/:id', function (req, res) {


    db.collection("fish_catalog").find({"items.id":req.params.id}).toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500)
        }

        res.send(docs)

    });

});



var Price = {
    "fish": {
        "catalog_tittle": "Рыба",
        "items": [
            {
                "id": "pink_salmon",
                "showCaseName": "Горбуша",
                "name": "Горбуша",
                "info": "Неразделанная",
                "isRedFish": true,
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно. Ориентировочный вес 1-2 кг",
                "nutritionalValue": "Калории 140ккал<br/>                Белки. 20,5г<br/>            Жиры 6г<br/>            Углеводы. 0г<br/>            Омега3(г). 1,6г<br/>",
                "hit": true,
                "img": "./pink salmon.png",
                "weightOfOneFish": 1.5,
                "weightFish": {
                    "help": "1-2кг"
                },
                "producer": "Рыболовецкая Артель \"Нижнее Пронге\" Россия Хабаровский край",
                "catchDate": "26.06.2018",
                "price": 255
            },
            {
                "id": "chum",
                "showCaseName": "Кета",
                "name": "Кета",
                "info": "Потрошеная  без головы",
                "isRedFish": true,
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно. Ориентировочный вес 1-2 кг",
                "nutritionalValue": "Калории 127ккал<br/>Белки. 19г<br/>Жиры 5,6г<br/>Углеводы. 0г<br/>Омега3(г). 1г",
                "hit": true,
                "weightOfOneFish": 1.9,
                "weightFish": {
                    "help": "1-2кг"
                },
                "img": "./chum.png",
                "producer": "АО \"Хайрюзовский рыбоконсервный завод\" Россия Камчатский край Тигильский район с. Усть-Хайрюзово",
                "catchDate": "01.07.2018",
                "price": 365

            },
            {
                "id": "coho",
                "showCaseName": "Кижуч",
                "name": "Кижуч",
                "info": "Потрошеный с головой",
                "isRedFish": true,
                "packaging": "шт",
                "nutritionalValue": "Калории 140ккал<br/>                Белки. 21,6г<br/>            Жиры 6г<br/>            Углеводы. 0г<br/> Омега3(г). 0г",
                "packagingInfo": "Реализуется штучно. Ориентировочный вес 2-3 кг",
                "hit": false,
                "weightOfOneFish": 2,
                "img": "./coho.png",
                "price": 495

            },
            {
                "id": "salmon_of_chile_s",
                "showCaseName": "Семга Premium",
                "name": "Семга Чили",
                "info": "Потрошеная с головой",
                "isRedFish": true,
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно.",
                "nutritionalValue": "Калории 208ккал<br/>Белки. 20,4г<br/>Жиры 13,4г<br/>Углеводы. 0г<br/>Омега3(г). 2,5г",
                "hit": true,
                "img": "./salmon.png",
                "producer": "Chile Ventisqueros S.A.",
                "weightOfOneFish": 2.5,
                "weightFish": {
                    "size": "s",
                    "help": "2-3кг"
                },
                "price": 720

            },
            {
                "id": "salmon_of_chile_m",
                "showCaseName": "Семга Premium",
                "name": "Семга Чили",
                "info": "Потрошеная с головой",
                "isRedFish": true,
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно.",
                "nutritionalValue": "Калории 208ккал<br/>Белки. 20,4г<br/>Жиры 13,4г<br/>Углеводы. 0г<br/>Омега3(г). 2,5г",
                "hit": false,
                "img": "./salmon.png",
                "producer": "Chile Ventisqueros S.A.",
                "weightOfOneFish": 3.5,
                "weightFish": {
                    "size": "m",
                    "help": "3-4кг"
                },
                "price": 730

            }, {
                "id": "salmon_of_chile_l",
                "showCaseName": "Семга Premium",
                "name": "Семга Чили",
                "info": "Потрошеная с головой",
                "isRedFish": true,
                "packaging": "шт",
                "packagingInfo": "Реализуется штучно.",
                "nutritionalValue": "Калории 208ккал<br/>Белки. 20,4г<br/>Жиры 13,4г<br/>Углеводы. 0г<br/>Омега3(г). 2,5г",
                "hit": false,
                "img": "./salmon.png",
                "producer": "Chile Ventisqueros S.A.",
                "weightOfOneFish": 5.5,
                "weightFish": {
                    "size": "l",
                    "help": "5-6кг"
                },
                "price": 740


            },

            {
                "id": "Trout_of_chile",
                "showCaseName": "Форель Чили Premium",
                "name": "Форель Premium Чили",
                "isRedFish": true,
                "info": "Потрошеная без головы, (2-3)кг Prem Чили",
                "packaging": "шт",
                "weightOfOneFish": 2.7,
                "nutritionalValue": "Калории 141ккал<br>Белки. 19,9г<br>Жиры 6,2г<br>Углеводы. 0г<br>Омега3(г). 0,9г",
                "packagingInfo": "Реализуется штучно.  Ориентировочный вес 2-3 кг",
                "hit": false,
                "img": "./trout.png",
                "price": 780
            },
            {
                "id": "treska_15",
                "showCaseName": "Треска",
                "name": "Треска",
                "info": "Тихоокеанская потрошеная без головы (0,5-1,5)кг",
                "packaging": "кг",
                "packagingInfo": "",
                "nutritionalValue": "Калории 69ккал<br/>                Белки. 15,3г<br/>            Жиры 0,4г<br/>            Углеводы. 3,3г<br/>            Омега3(г). 0,1г",
                "hit": true,
                "img": "./cod.png",
                "producer": "ООО «Морские ресурсы»",
                "catchDate": "05.08.2018",
                "weightOfOneFish": 0.75,
                "weightFish": {
                    "size": "s",
                    "help": "0,5-1кг"
                },
                "price": 246

            }, {
                "id": "treska_03",
                "showCaseName": "Треска",
                "name": "треска",
                "info": "Тихоокеанская потрошеная без головы  (0,3-0,5)кг",
                "packaging": "кг",
                "packagingInfo": "",
                "hit": false,
                "img": "./cod.png",
                "producer": "ООО «Морские ресурсы»",
                "catchDate": "05.08.2018",
                "weightOfOneFish": 1.5,
                "weightFish": {
                    "size": "l",
                    "help": "2-3кг"
                },
                "price": 264


            },
            {
                "id": "mintay",
                "showCaseName": "Минтай",
                "name": "Минтай",
                "info": "Потрошеный без головы (0,3-0,6)кг<br/>",
                "packaging": "кг",
                "packagingInfo": "",
                "nutritionalValue": "Калории 56ккал<br/>Белки. 12,2г<br/>Жиры 0,4г<br/>Углеводы. 0г<br/>Омега3(г). 0,2г",
                "hit": true,
                "img": "./pollock.png",
                "producer": "ООО ПКФ\"Южно-Курильский рыбокомбинат\" Россия Сазалинская обл. п.г.т. Южно-Курильск",
                "catchDate": "25.04.2018",
                "weightOfOneFish": 0.45,
                "weightFish": {
                    "size": "l",
                    "help": "0,3-0,6кг"
                },
                "price": 123

            },
            {
                "id": "Flounder_s",
                "showCaseName": "Камбала",
                "name": "Камбала S",
                "info": "Без головы,белобрюхая,  частично икряная",
                "packaging": "кг",
                "packagingInfo": "",
                "nutritionalValue": "Калории 90ккал<br/>                Белки. 15,7г<br/>           Жиры 3г<br/>            Углеводы. 0г<br/>            Омега3(г). 0г",
                "hit": false,
                "img": "./flounder.png",
                "producer": "ООО \"Морские ресурсы\" Россия САХАЛИНСКСАЯ ОБЛ., Г СЕВЕРО-КУРИЛЬСК",
                "catchDate": "03.04.2018",
                "weightOfOneFish": 0.2,
                "weightFish": {
                    "size": "s",
                    "help": "150-250г"
                },
                "price": 185
            },
            {
                "id": "Flounder_m",
                "showCaseName": "Камбала M",
                "name": "Камбала",
                "info": "Без головы,Белобрюхая",
                "packaging": "кг",
                "packagingInfo": "",
                "hit": true,
                "img": "./flounder.png",
                "producer": "ООО \"Морские ресурсы\" Россия САХАЛИНСКСАЯ ОБЛ., Г СЕВЕРО-КУРИЛЬСК",
                "catchDate": "03.04.2018",
                "weightOfOneFish": 0.3,
                "weightFish": {
                    "size": "m",
                    "help": "250-350г"
                },
                "price": 195
            },
            {
                "id": "Flounder_l",
                "showCaseName": "Камбала",
                "name": "Камбала",
                "info": "Без головы,белобрюхая, икряная",
                "packaging": "кг",
                "packagingInfo": "",
                "hit": false,
                "img": "./flounder.png",
                "producer": "ООО \"Морские ресурсы\" Россия САХАЛИНСКСАЯ ОБЛ., Г СЕВЕРО-КУРИЛЬСК",
                "catchDate": "03.04.2018",
                "price": 210,
                "weightOfOneFish": 0.4,
                "weightFish": {
                    "size": "l",
                    "help": "от 350г"
                },
            },
            /*{
                "id": "osmeridae",
                "showCaseName": "Корюшка",
                "name": "Корюшка",
                "info": "",
                "packaging": "кг",
                "packagingInfo" : "",
                "hit": false,
                "img": "./smelt.png",
                "price": 265
            },*/
            {
                "id": "herring",
                "showCaseName": "Сельдь Атлантика",
                "name": "Сельдь",
                "info": "",
                "packaging": "кг",
                "packagingInfo": "",
                "nutritionalValue": "Калории 248ккал<br/>Белки. 17,7г<br/>Жиры 19,5г<br/>Углеводы. 0г<br/>Омега3(г). 0г",
                "hit": false,
                "img": "./herring.png",
                "weightOfOneFish": 0.275,
                "weightFish": {
                    "size": "m",
                    "help": "0,25-0,3кг"
                },
                "price": 105
            },
            {
                "id": "mackerel",
                "showCaseName": "Скумбрия Атлантика",
                "name": "Скумбрия",
                "info": "",
                "nutritionalValue": "Калории 205ккал<br/>Белки. 18,6г<br/>Жиры 13,9г<br/>Углеводы. 0г<br/>Омега3(г). 2,7г",
                "packaging": "кг",
                "packagingInfo": "",
                "hit": false,
                "img": "./mackerel.png",
                "weightOfOneFish": 0.275,
                "weightFish": {
                    "size": "m",
                    "help": "0,25-0,3кг"
                },
                "price": 180
            },
        ]
    },
    "Shellfish": {
        "catalog_tittle": "Моллюски",
        "items": [
            {
                "id": "mussels",
                "showCaseName": "Мидии",
                "name": "Мидии New Zealand",
                "info": "",
                "packaging": "кор",
                "packagingInfo": "",
                "hit": true,
                "nutritionalValue": "Калории 77ккал<br>Белки. 11,5г<br>Жиры 2г<br>Углеводы. 3,3г<br>Омега3(г). 0г",
                "img": "./mussels.png",
                "price": 590
            }, {
                "id": "scallop",
                "showCaseName": "Гребешок Сахалин",
                "name": "Гребешок Сахалин",
                "info": "",
                "packaging": "кг",
                "packagingInfo": "",
                "hit": false,
                "img": "./scallop.png",
                "price": 2500
            }, {
                "id": "squid",
                "showCaseName": "Кальмар",
                "name": "Кальмар",
                "info": "",
                "packaging": "кг",
                "packagingInfo": "",
                "nutritionalValue": "Калории 100ккал<br/>                Белки. 18г<br/>            Жиры 2,2г<br/>            Углеводы. 2г<br/>            Омега3(г). 1,4г",
                "hit": true,
                "img": "./squid.png",
                "producer": "АО \"Северо-Курильская база Северного флота\" Россия Сахалинская обл г Северо-Курильск",
                "catchDate": "13.06.2018",
                "price": 235
            },

        ]
    },
    "Shrimp": {
        "catalog_tittle": "Креветки",
        "items": [
            {
                "id": "shrimp_angular",
                "showCaseName": "Креветки углохвостые",
                "name": "Креветка углохвостая",
                "info": "Креветка углохвостая 90-110. БЕЗ ГЛАЗУРИ в коробке по 1 кг",
                "packaging": "кг",
                "packagingInfo": "Размер 90 -120",
                "nutritionalValue": "Калории 87ккал<br/>Белки. 18,3г<br/>Жиры 1,2г<br/>Углеводы. 0,8г<br/>Омега3(г). 0,5г",
                "hit": false,
                "img": "./shrimp.png",
                "producer": "ООО\" ДЕФА фишинг\"(судно\"Арктик Лайон\")",
                "catchDate": "07.03.2018",
                "price": "-- "
            },
            {
                "id": "shrimp_tiger",
                "showCaseName": "Тигровая креветка",
                "name": "Тигровая креветка",
                "info": "Индия",
                "packaging": "кор",
                "nutritionalValue": "Калории 98ккал<br/>Белки. 20,5г<br/>Жиры 1,6г<br/>Углеводы. 0,3г<br/>Омега3(г). 0,3г",
                "packagingInfo": "",
                "hit": false,
                "img": "./Tiger shrimp.png",
                "price": 790
            },
            {
                "id": "greenland_shrimp",
                "showCaseName": "Гренландская креветка",
                "name": "Гренландская креветка",
                "info": "Креветка гренландская 90-110. Глазурь не более 3%",
                "packaging": "кг",
                "nutritionalValue": "Калории 98ккал<br/>Белки. 20,5г<br/>Жиры 1,6г<br/>Углеводы. 0,3г<br/>Омега3(г). 0,3г",
                "packagingInfo": "Размер 90 -120",
                "hit": true,
                "img": "./shrimp.png",
                "price": 550
            }

        ]
    },
    "Langoustines": {
        "catalog_tittle": "Лангустины",
        "items": [
            {
                "id": "langoustine",
                "showCaseName": "Лангустины L1",
                "name": "Лангустины  аргентинские L1",
                "info": "Дикий улов. Упаковка 2кг",
                "packaging": "кор",
                "nutritionalValue": "Калории 143ккал<br>Белки. 26,4г<br>Жиры 1,9г<br>Углеводы. 3,1г<br>Омега3(г). 0,5г",
                "packagingInfo": "",
                "hit": true,
                "producer": "Аргентина",
                "catchDate": "01.12.2017",
                "img": "./langoustines.png",
                "price": 690
            },

        ]
    }


};
var RecipesDB = {
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


}

MongoClient.connect('mongodb://localhost:27017/', function (err, database) {
    if (err)
        return console.log(err)

    db = database.db('api_fishbazar');

    app.listen(3212, function () {
        console.log('API fishbazr started')
    })
});

