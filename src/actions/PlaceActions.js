import AppDispatcher from '../AppDispatcher'

const PlaceActions = {
  createPlace(place) {
    AppDispatcher.dispatch({
      type: 'CREATE_PLACE',
      payload: {
        place: place,
      }
    })
  }
}

export default PlaceActions;
