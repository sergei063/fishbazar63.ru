/*  eslint-disable no-unused-vars */
import React from 'react'
/*  eslint-disable no-unused-vars */
import _ from 'lodash'

//  imgRequire1 : require.context('./img/seafood/', true, /\.(png|jpg|svg)$/),

const serverConfig = {
    imgRequire: img => `${img.replace('./', '/img/src/img/seafood/')}`,
    serverAPI: `${window.location.protocol}//api.fishbazar63.ru`,
}

const localConfig = {
    imgRequire: img => `${img.replace('./', '/img/src/img/seafood/')}`, // local
    serverAPI: `${window.location.protocol}//localhost:3212`,
}

const common = {
    //  common
    telegramUrl: `${window.location.protocol}//telegram.fishbazar63.ru/bot274564744:AAEGwFztcyAHcXcuNNR6ZzwiXoY4eY-nXCM`,
    imgBlogRequire: require.context('./img/Recipes/', true, /\.(png|jpg|svg)$/),
    //  serverImgDir:'/../public/img/src/img/seafood/',
}
let settings = {
    ...common,
}

if (process.env.NODE_ENV === 'production') {
    settings = _.assign(serverConfig, settings)
} else {
    settings = _.assign(localConfig, settings)
    //  settings = _.assign(serverConfig, settings)
}
const config = _.clone(settings)
export default config
