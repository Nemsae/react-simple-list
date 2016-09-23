import AppDispatcher from '../AppDispatcher';
import EventEmitter from 'events';

let _profile = { username: 'Kid Narwhal', picture: 'http://pre04.deviantart.net/c04d/th/pre/f/2013/140/9/8/cute_little_narwhal_by_fallenstar20-d65z1e4.png', bio:'The narwhal, or narwhale (Monodon monoceros), is a medium-sized toothed whale that possesses a large tusk from a protruding canine tooth. It lives year-round in the Arctic waters around Greenland, Canada, and Russia. It is one of two living species of whale in the Monodontidae family, along with the beluga whale. The narwhal males are distinguished by a long, straight, helical tusk, which is an elongated upper left canine. The narwhal was one of many species described by Carl Linnaeus in his publication Systema Naturae in 1758. Like the beluga, narwhals are medium-sized whales. For both sexes, excluding the males tusk, the total body size can range from 3.95 to 5.5 m (13.0 to 18.0 ft), the males are slightly larger than the females. The average weight of an adult narwhal is 800 to 1,600 kg (1,800 to 3,500 lb). At around 11 to 13 years old, the males become sexually mature, females become sexually mature at about 5 to 8 years old. Narwhals do not have a dorsal fin, and their neck vertebrae are jointed like those of other mammals, not fused as in dolphins and most whales.'};

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
      ProfileStore.emit('CHANGE');

      break;
  }
});

export default ProfileStore;
