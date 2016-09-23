import React from 'react';
import PlacesForm from './PlacesForm';
import PlacesList from './PlacesList';
import FoodsList from './FoodsList';
import FoodsForm from './FoodsForm';
//
import PlaceActions from '../actions/PlaceActions';
import PlaceStore from '../stores/PlaceStore';
import FoodActions from '../actions/FoodActions';
import FoodStore from '../stores/FoodStore';


const App = React.createClass({
  getInitialState() {
    return {
      places: PlaceStore.getAll(),
      foods: FoodStore.getAll(),
    }
  },

  componentWillMount() {
    PlaceStore.startListening(this._onChange);
    FoodStore.startListening(this._onChangeFoods);
  },

  _onChange() {
    this.setState({
      places: PlaceStore.getAll(),
    })
  },

  _onChangeFoods() {
    this.setState({
      foods: FoodStore.getAll(),
    })
  },

  componentWillUnmount() {
    PlaceStore.stopListening(this._onChange);
    FoodStore.stopListening(this._onChangeFoods);
  },

  addPlace(newPlace) {
    PlaceActions.createPlace(newPlace);
  },

  addFood(newFood) {
    FoodActions.createFood(newFood);
  },

  render() {
    const { places, foods } = this.state;

    return (
      <div className='container'>
        <h1>My Profile</h1>
        <PlacesList places={places} />
        <PlacesForm addPlace={this.addPlace} />
        <FoodsList foods={foods} />
        <FoodsForm addFood={this.addFood} />
      </div>
    )
  }
})

export default App;
//module.exports = App;
