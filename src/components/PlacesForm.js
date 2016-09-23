import React from 'react';

const PlacesForm = React.createClass({
  submitForm(e) {
    e.preventDefault();
    const { PlacesInput } = this.refs;

    let newPlace = PlacesInput.value;
    PlacesInput.value = '';
    //PlacesInput.focus();

    this.props.addPlace(newPlace);
  },
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input ref='PlacesInput' type="text" required/>
        <button>Add</button>
      </form>
    )
  }
})

export default PlacesForm;
