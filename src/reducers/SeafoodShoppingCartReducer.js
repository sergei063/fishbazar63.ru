
const getInitialState = ()=> {

    let seafoodShoppingCart = JSON.parse(localStorage.getItem('seafoodShoppingCart'));
    if (!seafoodShoppingCart) {
        seafoodShoppingCart = { allFish: {},totalCost:0}
    }
    return seafoodShoppingCart
}

const getCost = (fish,count) => {

    let weightOfOneFish = (fish.weightOfOneFish) ? fish.weightOfOneFish : 1;
    let cost = count * fish.price * weightOfOneFish;

    return cost
}

const getTotalCost = (catalog) => {

    let totalSum = 0;

    for (let p in catalog) {
        totalSum += getCost(catalog[p],catalog[p].count);
    }



    return totalSum
}

const saveToLocalStorage = (allFish,totalCost) => {

    let seafoodShoppingCart = getInitialState();

    seafoodShoppingCart.allFish = allFish;
    seafoodShoppingCart.totalCost = totalCost;
    localStorage.setItem('seafoodShoppingCart', JSON.stringify(seafoodShoppingCart))
}

const SeafoodShoppingCartReducer = function (state = getInitialState(), action) {

    switch (action.type) {
        case 'ADD_SEAFOOD':
            let stateAllFish = state.allFish;
            if(action.count===0){
                delete stateAllFish[action.fish.id]
            } else {
                stateAllFish[action.fish.id] = {
                    ...action.fish,
                    count: action.count,
                    cost: getCost(action.fish, action.count)
                };
            }
            let totalCost  = getTotalCost(stateAllFish);
            saveToLocalStorage(stateAllFish,totalCost);

            return Object.assign({}, state, {
                allFish: stateAllFish,
                totalCost:totalCost
            });

        default:
            return state
    }

}

export default SeafoodShoppingCartReducer;
