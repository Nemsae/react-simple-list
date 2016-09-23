import React from 'react';
import PlacesForm from './PlacesForm';
import PlacesList from './PlacesList';

//44:44
//import * as ActionsObj from '../actions/NameActions'
//or
//import { createName } from '../actions/NameActions'
//or
import NameActions from '../actions/NameActions'
import NameStore from '../stores/NameStore'


const App = React.createClass({
  getInitialState() {
    return {
      places: NameStore.getAll(),
    }
  },

  componentWillMount() {
    NameStore.startListening(this._onChange);
  },

  _onChange() {
    this.setState({
      places: NameStore.getAll(),
    })
  },

  componentWillUnmount() {
    NameStore.stopListening(this._onChange);
  },

  //sending an action
  addPlace(newPlace) {

    NameActions.createName(newPlace);
  },

  render() {
    const { places } = this.state;

    return (
      <div className='container'>
        <h1>My Profile</h1>
        <PlacesForm addPlace={this.addPlace} />
        <PlacesList places={places} />
      </div>
    )
  }
})

export default App;
//module.exports = App;
