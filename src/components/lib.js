/**
 *
 * @param func
 * @param fallbackValue
 * @returns {*}
 * @private
 *
 * _try(() => props.history.location.state.blogFilter, null)
 */
export const _try = (func,fallbackValue) => {
    try {
        return func();
    } catch (e) {
        return fallbackValue;
    }
};