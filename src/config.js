import React from 'react';


//imgRequire1 : require.context('./img/seafood/', true, /\.(png|jpg|svg)$/),

const config = {
    //common
    imgBlogRequire : require.context('./img/Recipes/', true, /\.(png|jpg|svg)$/),
    //serverImgDir:'/../public/img/src/img/seafood/',

    //server
    imgRequire :img=>( `${img.replace('./',"/img/src/img/seafood/")}`),
    serverAPI:'http://api.fishbazar63.ru',


    //local
   /* imgRequire :img=>( `${img.replace('./',"/img/src/img/seafood/")}`), //local
    serverAPI:'http://localhost:3212',*/



}

export default config

