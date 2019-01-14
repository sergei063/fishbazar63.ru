/**
 *
 * @param func
 * @param fallbackValue
 * @returns {*}
 * @private
 *
 * _try(() => props.history.location.state.blogFilter, null)
 */
export const _try = (func, fallbackValue) => {
    try {
        return func()
    } catch (e) {
        return fallbackValue
    }
}

/*
    Склонение числительных
 */
export const declOfNum = (titles) => {
    const number = Math.abs(number)
    const cases = [2, 0, 1, 1, 1, 2]
    return  (number) =>{
        return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]
    }
}
