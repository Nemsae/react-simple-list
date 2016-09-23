//What does the store do?
  //Manage and modify the data
  //Listening/watching the dispatcher for actions to come in
    //Those actions may prompt the store to modify its data
    //One action can cause multiple stores to change its data
  //When its data changes, it will EMIT a change event

import AppDispatcher from '../AppDispatcher';
// 'events' is a core module of node.js, therefore no need to insall it via npm
import { EventEmitter } from 'events';

// '_' means its a private variable, no one can see this variable directly
let _places = [];

//EventEmitter.prototype will take all methods of EventEmitter and assign into that object
const PlaceStore = Object.assign({}, EventEmitter.prototype, {
  //add extra information/methods on top of the prototype


  // invoked by the component, anytime they want to begin listening to the store
  startListening(callback) {
    //'CHANGE' is the event type
    this.on('CHANGE', callback);
    // anytime a change event is emitted, the callback that the component passed in will be invoked, so it can change the state

  },

  stopListening(callback) {
    this.removeListener('CHANGE', callback);
  },


  // at any given point any component can find out whats in our store
  getAll() {
    return _places;
  },

});

AppDispatcher.register(action => {
  //action is the object {type:"CREATE_PLACE"...}
  const { type, payload } = action;
  console.log('PlaceStore Action: ',action);


  //if 'type' is 'CREATE_PLACE', then we will pull the place out of the payload, push it to the array,
  //than emit a change to all listening
  switch (type) {
    case 'CREATE_PLACE':
      const { place } = payload;
      _places.push(place);
      PlaceStore.emit('CHANGE');
      break;
  }
});

export default PlaceStore;
