import AppDispatcher from '../AppDispatcher';
import EventEmitter from 'events';

let _foods = [];

const FoodStore = Object.assign({}, EventEmitter.prototype, {

  startListening(callback) {
    this.on('CHANGE', callback)
  },

  stopListening(callback) {
    this.removeListener('CHANGE', callback)
  },

  getAll() {
    return _foods;
  },
});

AppDispatcher.register(action => {
  const { type, payload } = action;

  switch (type) {
    case 'CREATE_FOOD':
      const { food } = payload;
      _foods.push(food);
      FoodStore.emit('CHANGE');

      break;

    case 'CLEAR_FOODS':
      const { food1 } = payload;
      _foods = food1;
      FoodStore.emit('CHANGE');

      break;
  }
});

export default FoodStore;
