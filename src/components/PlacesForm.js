import React from 'react';

const PlacesForm = React.createClass({
  submitForm(e) {
    e.preventDefault();
    const { PlacesInput } = this.refs;

    let newPlace = PlacesInput.value;
    PlacesInput.value = '';
    PlacesInput.focus();

    this.props.addPlace(newPlace);
  },

  clearForm() {
    let { clearOutPlaces } = this.props;
    clearOutPlaces();
  },

  render() {
    return (
      <form>
        <input ref='PlacesInput' type="text"/>
        <button onClick={this.submitForm}>Add</button>
        <button onClick={this.clearForm}>Clear</button>
      </form>
    )
  }
})

export default PlacesForm;
