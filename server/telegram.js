var express = require('express');
var request = require('request');
var Agent = require('socks5-https-client/lib/Agent');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('*', function (req, res) {
    var r = res;
    var url = 'https://api.telegram.org' + req.url;
    var url1 = 'https://jsonplaceholder.typicode.com/posts/1';
    //res.redirect('https://api.telegram.org/' + req.url);
    console.log(url);
    //res.send(url)

    request({
        url: url,
        //strictSSL: true,
        //agentClass: Agent,
        // agentOptions: {
        //     socksHost: 'vhgct.teletype.live', // Defaults to 'localhost'.
        //     socksPort: 443,
        //     socksUsername: 'telegram',
        //     socksPassword: 'telegram',
        // }
    }, function(err, res,body) {
        console.log(err || res.body);
        r.send(body);
        
    });
    //r.send(url);

});
app.post('*', function (req, res) {


    var url = 'https://api.telegram.org' + req.url;
    console.log(url)
    request.post({
        headers: {'content-type' : 'multipart/form-data'},
        url:     url,
        body:    req.body
    }, function(error, response, body){
        console.log(body);
    });

});

app.listen(8080, function () {
    console.log('Example app listening on port 3000!');
});


