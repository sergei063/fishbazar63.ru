/*  eslint-disable no-unused-vars */
import React from 'react'
/*  eslint-disable no-unused-vars */
import _ from 'lodash'

//  imgRequire1 : require.context('./img/seafood/', true, /\.(png|jpg|svg)$/),

const serverConfig = {
    imgRequire: img => `${img.replace('./', '/img/src/img/seafood/')}`,
    serverAPI: 'http://api.fishbazar63.ru',
}

const localConfig = {
    imgRequire: img => `${img.replace('./', '/img/src/img/seafood/')}`, // local
    serverAPI: 'http://localhost:3212',
}

const common = {
    //  common
    imgBlogRequire: require.context('./img/Recipes/', true, /\.(png|jpg|svg)$/),
    //  serverImgDir:'/../public/img/src/img/seafood/',
}
let settings = {
    ...common,
}

if (process.env.NODE_ENV === 'production') {
    settings = _.assign(serverConfig, settings)
} else {
    //  settings = _.assign(localConfig, settings);
    settings = _.assign(serverConfig, settings)
}
const config = _.clone(settings)
export default config
