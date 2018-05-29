var express = require('express');
var request = require('request');
var Agent = require('socks5-https-client/lib/Agent');

var app = express();

app.get('*', function (req, res) {
    var r = res;
    var url = 'https://api.telegram.org/' + req.url;
    var url1 = 'https://jsonplaceholder.typicode.com/posts/1';
    //res.redirect('https://api.telegram.org/' + req.url);
    request({
        url: url1,
        strictSSL: true,
        agentClass: Agent,
        agentOptions: {
            socksHost: 'par3.google.385444444444444493392625027464760522671600012331238.proxy.veesecurity.com', // Defaults to 'localhost'.
            socksPort: 443,
            socksUsername: 'PROXY_5AD56021BB1FE',
            socksPassword: 'b7ed4bc319a808fb',
        }
    }, function(err, res,body) {
        console.log(err || res.body);
        r.send(body);
    });

});

app.listen(8080, function () {
    console.log('Example app listening on port 3000!');
});


