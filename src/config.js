import React from 'react';

const config = {
    imgRequire : require.context('./img/seafood/', true, /\.(png|jpg|svg)$/),
    imgBlogRequire : require.context('./img/Recipes/', true, /\.(png|jpg|svg)$/),
    serverImgDir:'/../public/img/src/img/seafood/'
}

export default config

