var express = require('express');
var bodyParser = require('body-parser');
var formidable = require('formidable');
var fs = require('fs');

var MongoClient = require('mongodb').MongoClient;

var seafoodPath = '/../public/img/src/img/seafood/' //local
//var seafoodPath = '/../fishbazar63.ru/img/src/img/seafood/' //server

var db;
var app = express();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

var user_data = require('./user_data');


//jwt
app.set("secret", "hjhgfjklsdh454fasd44563452534434318fs4e523444frsda");
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/check_user', function (req, res) {
    if (!user_data.check_admin(req)) {
        return res.sendStatus(401)
    }

    res.send("ok")

});
app.post('/sign', function (req, res) {
    if (req.body.user.login && req.body.user.pass) {
        var autentificate_result = user_data.check_login(req.body.user.login, req.body.user.pass)
        if (autentificate_result.is_autentificate) {
            var secret = res.app.get("secret")
            var token = user_data.get_token(autentificate_result.user_name, secret)
            //res.cookie("auth_token",token)
            res.send({"auth_token": token});
            return;
        }
    }

    res.send("OK");
});


app.post('/set_catalog', function (req, res) {
    if (!user_data.check_admin(req)) {
        return res.sendStatus(401)
    }


    if (req.body.catalog) {
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


app.post('/file-upload', function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req);
    form.on('fileBegin', function (name, file) {

        file.path = __dirname + seafoodPath + file.name;
    });
    form.on('file', function (name, file) {
        console.log('Uploaded ' + __dirname + seafoodPath + file.name);
    });


});


app.get('/catalog', function (req, res) {

    db.collection("fish_catalog").findOne({}, function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500)
        }

        res.send(docs)

    });
});
app.get('/blog', function (req, res) {

    db.collection("recipes").findOne({}, function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500)
        }

        res.send(docs)

    });
});

app.get('/all_places_of_delivery', function (req, res) {

    db.collection("all_places_of_delivery").findOne({}, function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500)
        }

        res.send(docs)

    });
});
app.post('/set_all_places_of_delivery', function (req, res) {
    if (!user_data.check_admin(req)) {
        return res.sendStatus(401)
    }


    if (req.body.catalog) {
        db.collection("all_places_of_delivery").deleteOne({}, function (err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500)
            }
            db.collection("all_places_of_delivery").insertOne(req.body.catalog, function (err, result) {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500)
                }
                res.send(req.body)
            })
        })


    }


});


app.get('/catalog/:id', function (req, res) {


    db.collection("fish_catalog").find({"items.id": req.params.id}).toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500)
        }

        res.send(docs)

    });

});


/*
var all_places_of_delivery = {
    AllPlacesOfDelivery: [
        {where: 'г.Новокуйбышевск', price: 70},
        {where: 'п.Гранный', price: 70},
        {where: 'г.Самара ', price: 150},
        {where: 'Сухая Самарка', price: 100},
        {where: 'Жилой район Волгарь', price: 100},
        {where: '116км.', price: 100},
        {where: 'Красноглинский район', price: 250},
    ]
}
app.get('/set_all_places_of_delivery123987dfasfs', function (req, res) {

    db.collection("all_places_of_delivery").deleteOne({}, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500)
        }
        db.collection("all_places_of_delivery").insertOne(all_places_of_delivery, function (err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500)
            }
            res.send(all_places_of_delivery)
        })
    })
});*/



MongoClient.connect('mongodb://localhost:27017/', function (err, database) {
    if (err)
        return console.log(err)

    db = database.db('api_fishbazar');

    app.listen(3212, function () {
        console.log('API fishbazr started')
    })
});

