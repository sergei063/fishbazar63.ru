import React from 'react';
import _ from 'lodash';


//imgRequire1 : require.context('./img/seafood/', true, /\.(png|jpg|svg)$/),

const serverConfig = {
    imgRequire :img=>( `${img.replace('./',"/img/src/img/seafood/")}`),
    serverAPI:'http://api.fishbazar63.ru',
};

const localConfig = {
    imgRequire :img=>( `${img.replace('./',"/img/src/img/seafood/")}`), //local
    serverAPI:'http://localhost:3212',
};

const common = {
    //common
    imgBlogRequire : require.context('./img/Recipes/', true, /\.(png|jpg|svg)$/),
    //serverImgDir:'/../public/img/src/img/seafood/',
};
let config = {
    ...common
}

if ('production'===process.env.NODE_ENV){
    config = _.assign(serverConfig,config);
} else {
    config = _.assign(localConfig,config);
}


export default config

