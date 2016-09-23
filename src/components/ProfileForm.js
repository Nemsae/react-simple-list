import React from 'react';
import ProfileStore from '../stores/ProfileStore';

const ProfileForm = React.createClass({
  getInitialState() {
    return {
      username: undefined,
      picture: undefined,
      bio: undefined,
    }
  },

  editUsername(e) {
    let editedUsername = e.target.value;
    console.log('editedUsername: ',editedUsername);
    this.setState({
      username: editedUsername,
    })
  },

  editPicture(e) {
    let editedPicture = e.target.value;
    console.log('editedPicture: ',editedPicture);
    this.setState({
      picture: editedPicture,
    })
  },

  editBio(e) {
    let editedBio = e.target.value;
    console.log('editedBio: ',editedBio);
    this.setState({
      bio: editedBio,
    })
  },

  submitEdit(e) {
    let { username, picture, bio } = this.state;
    let { editProfile } = this.props;
    e.preventDefault();
    let updatedUsername = username;
    let updatedPicture = picture;
    let updatedBio = bio;

    let profilePackage = {
      username: updatedUsername,
      picture: updatedPicture,
      bio: updatedBio,
    }

    editProfile(profilePackage);
  },

  render() {
    let { profile } = this.props;

    return (
      <div>
        <div className="container">
          <div className="col-xs-12">
            <h2 id="profileName" ref='profileName'>{profile.username}</h2>
          </div>
          <div className='col-xs-6'>
            <img id='profilePicture' ref='profilePicture' src={profile.picture} alt="Narwhal" height="420" width="420"></img>
          </div>
          <div className='col-xs-6'>
            <h3>About Meself</h3>
            <p id='profileBio' ref='profileBio'>{profile.bio}</p>
          </div>
          <button data-toggle="modal" data-target="#profileModal">Edit</button>
        </div>

        <div className="modal fade" id="profileModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">Edit Event</h4>
              </div>
              <div className="modal-body">

                <form id='modalForm'>
                  <div className="form-group">
                    <label htmlFor="editUsername">Username:</label>
                    <input onChange={this.editUsername} ref='editUsername' type="text" className="form-control" id="editUsername" required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="editPicture">Profile Picture:</label>
                    <input onChange={this.editPicture} ref='editPicture' type="text" className="form-control" id="editPicture"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="editBio">Bio:</label>
                    <input onChange={this.editBio} ref='editBio' type="text" className="form-control" id="editBio"/>
                  </div>
                </form>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button onClick= {this.submitEdit} type="button" className="btn btn-primary" data-dismiss="modal">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
});

export default ProfileForm;
