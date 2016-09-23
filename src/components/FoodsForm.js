import React from 'react';

const FoodsForm = React.createClass({
  submitForm(e) {
    e.preventDefault();
    let { FoodsInput } = this.refs;

    let newFood = FoodsInput.value;
    FoodsInput.value = '';
    this.props.addFood(newFood);
  },

  render() {
    return(
      <form onSubmit={this.submitForm}>
        <input ref='FoodsInput' type="text"/>
        <button>Add</button>
      </form>
    )
  }
})


export default FoodsForm;
