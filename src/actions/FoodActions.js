import AppDispatcher from '../AppDispatcher'

const FoodActions = {
  createFood(food) {
    AppDispatcher.dispatch({
      type: 'CREATE_FOOD',
      payload: {
        food: food,
      }
    })
  }
}

export default FoodActions;
