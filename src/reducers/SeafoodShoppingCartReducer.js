const getInitialState = () => {
  let seafoodShoppingCart = JSON.parse(localStorage.getItem('seafoodShoppingCart'));
  if (!seafoodShoppingCart) {
    seafoodShoppingCart = { allFish: {}, totalCost: 0 };
  }
  return seafoodShoppingCart;
};

const getCost = (fish, count) => {
  // let cost = p.count * p.price * ((p.packaging!=='кг')?weightOfOneFish:1);

  const weightOfOneFish = fish.weightOfOneFish && fish.packaging !== 'кг' ? fish.weightOfOneFish : 1;
  return count * fish.price * weightOfOneFish;
};

const getTotalCost = (catalog) => {
  let totalSum = 0;

  for (const p in catalog) {
    totalSum += getCost(catalog[p], catalog[p].count);
  }

  return totalSum;
};

const saveToLocalStorage = (allFish, totalCost) => {
  const seafoodShoppingCart = getInitialState();

  seafoodShoppingCart.allFish = allFish;
  seafoodShoppingCart.totalCost = totalCost;
  localStorage.setItem('seafoodShoppingCart', JSON.stringify(seafoodShoppingCart));
};

const SeafoodShoppingCartReducer = function (state = getInitialState(), action) {
  switch (action.type) {
    case 'ADD_SEAFOOD':
      const stateAllFish = state.allFish;
      if (action.count === 0) {
        delete stateAllFish[action.fish.id];
      } else {
        stateAllFish[action.fish.id] = {
          ...action.fish,
          count: action.count,
          cost: getCost(action.fish, action.count),
        };
      }
      const totalCost = getTotalCost(stateAllFish);
      saveToLocalStorage(stateAllFish, totalCost);

      return Object.assign({}, state, {
        allFish: stateAllFish,
        totalCost,
      });

    default:
      return state;
  }
};

export default SeafoodShoppingCartReducer;
