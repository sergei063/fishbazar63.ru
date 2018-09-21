import React from 'react';

const config = {
    imgRequire : require.context('./img/seafood/', true, /\.(png|jpg|svg)$/),
    imgBlogRequire : require.context('./img/Recipes/', true, /\.(png|jpg|svg)$/),
    serverImgDir:'/../public/img/src/img/seafood/',
    localAPI:'http://api.fishbazar63.ru',
    serverAPI:'http://localhost:3212'
}

export default config

