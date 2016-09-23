import AppDispatcher from '../AppDispatcher'

const FoodActions = {
  createFood(food) {
    AppDispatcher.dispatch({
      type: 'CREATE_FOOD',
      payload: {
        food: food,
      }
    })
  },

  clearFoods() {
    AppDispatcher.dispatch({
      type: 'CLEAR_FOODS',
      payload: {
        food1: [],
      }
    })
  },
}

export default FoodActions;
