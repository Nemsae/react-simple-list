import AppDispatcher from '../AppDispatcher'

const PlaceActions = {
  createPlace(place) {
    AppDispatcher.dispatch({
      type: 'CREATE_PLACE',
      payload: {
        place: place,
      }
    })
  },

  clearPlaces() {
    AppDispatcher.dispatch({
      type: 'CLEAR_PLACES',
      payload: {
        place1: [],
      }
    })
  },
}

export default PlaceActions;
