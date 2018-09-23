import React from 'react';

const config = {
    imgRequire1 : require.context('./img/seafood/', true, /\.(png|jpg|svg)$/),
    imgRequire :img=>( `${img.replace('./',"img/src/img/seafood/")}`),
    imgBlogRequire : require.context('./img/Recipes/', true, /\.(png|jpg|svg)$/),
    serverImgDir:'/../public/img/src/img/seafood/',
    serverAPI:'http://api.fishbazar63.ru',
    //serverAPI:'http://fishbazar63.ru:3212',
    localAPI:'http://localhost:3212'
}

export default config

