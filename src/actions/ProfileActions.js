import AppDispatcher from '../AppDispatcher'

const ProfileActions = {
  updateProfile(myPackage) {
    AppDispatcher.dispatch({
      type: 'EDIT_PROFILE',
      payload: {myPackage}
    })
  }
}


export default ProfileActions;
