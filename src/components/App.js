import React from 'react';
import PlacesForm from './PlacesForm';
import FoodsForm from './FoodsForm';
import ProfileForm from './ProfileForm';
import PlacesList from './PlacesList';
import FoodsList from './FoodsList';
//
import ProfileStore from '../stores/ProfileStore';
import PlaceStore from '../stores/PlaceStore';
import FoodStore from '../stores/FoodStore';
//
import PlaceActions from '../actions/PlaceActions';
import FoodActions from '../actions/FoodActions';
import ProfileActions from '../actions/ProfileActions';


const App = React.createClass({
  getInitialState() {
    return {
      places: PlaceStore.getAll(),
      foods: FoodStore.getAll(),
      profile: ProfileStore.getAll(),
    }
  },

  componentWillMount() {
    PlaceStore.startListening(this._onChange);
    FoodStore.startListening(this._onChangeFoods);
    ProfileStore.startListening(this._onChangeProfile);
  },

  componentWillUnmount() {
    PlaceStore.stopListening(this._onChange);
    FoodStore.stopListening(this._onChangeFoods);
    ProfileStore.stopListening(this._onChangeProfile);
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

  _onChangeProfile() {
    this.setState({
      profile: ProfileStore.getAll(),
    })
  },

  addPlace(newPlace) {
    PlaceActions.createPlace(newPlace);
  },

  addFood(newFood) {
    FoodActions.createFood(newFood);
  },

  editProfile(myPackage) {
    console.log('edited package in app.js: ',myPackage);
    ProfileActions.updateProfile(myPackage);
  },

  render() {
    const { places, foods, profile } = this.state;
    console.log('profile in App.js: ',profile);

    return (
      <div className='container'>
        <h1>My Profile</h1>
        <ProfileForm editProfile={this.editProfile} profile={profile}/>
        <div className="col-xs-6">
          <PlacesList places={places} />
          <PlacesForm addPlace={this.addPlace} />
        </div>
        <div className="col-xs-6">
          <FoodsList foods={foods} />
          <FoodsForm addFood={this.addFood} />
        </div>
      </div>
    )
  }
})

export default App;
//module.exports = App;
