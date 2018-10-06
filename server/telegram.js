var express = require('express');
var request = require('request');
var Agent = require('socks5-https-client/lib/Agent');

var app = express();

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

app.listen(8080, function () {
    console.log('Example app listening on port 3000!');
});


