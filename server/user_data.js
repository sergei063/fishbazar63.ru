'use strict';

var express = require('express');

var jwt  = require("jsonwebtoken");

var admin_user_db = [{login:"admin",pass:"admin"},{login:"root",pass:"pass"}];

function check_login (login,pass)  {
    var isUser = p => p.login === login && p.pass === pass;
    var found_user = admin_user_db.find(isUser)
    if (found_user){
        return {
            is_autentificate:true,
            user_name:found_user.login
        }
    } else {
        return {
            is_autentificate:false,
            user_name:null
        }
    }

};

function get_token (user,secret) {
    return jwt.sign({data: user}, secret, { expiresIn: '1h' });
};
function get_user (token,secret) { return jwt.verify(token,secret)}




module.exports ={

    check_login:check_login,
    get_token:get_token,
    get_user:get_user,
}