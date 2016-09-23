import AppDispatcher from '../AppDispatcher';
import EventEmitter from 'events';

let _profile = { username: 'Kid Narwhal', picture: 'http://pre04.deviantart.net/c04d/th/pre/f/2013/140/9/8/cute_little_narwhal_by_fallenstar20-d65z1e4.png', bio:'Short introduction to Kid Narwhal' };
console.log('_profile: ',_profile);

const ProfileStore = Object.assign({}, EventEmitter.prototype, {

  startListening(callback) {
    this.on('CHANGE', callback)
  },

  stopListening(callback) {
    this.removeListener('CHANGE', callback)
  },

  getAll() {
    return _profile;
  },
});

AppDispatcher.register(action => {
  const { type, payload } = action;

  switch (type) {
    case 'EDIT_PROFILE':
      const { myPackage } = payload;
      _profile = Object.assign({}, myPackage);
      console.log('payload: ',payload);
      ProfileStore.emit('CHANGE');

      break;
  }
});

export default ProfileStore;
