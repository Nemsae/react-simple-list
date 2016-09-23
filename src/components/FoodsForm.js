import React from 'react';

const FoodsForm = React.createClass({
  submitForm(e) {
    e.preventDefault();
    let { FoodsInput } = this.refs;

    let newFood = FoodsInput.value;
    FoodsInput.value = '';
    FoodsInput.focus();
    this.props.addFood(newFood);
  },

  clearForm() {
    let { clearOutFoods } = this.props;

    clearOutFoods();
  },

  render() {
    return(
      <form>
        <input ref='FoodsInput' type="text"/>
        <button onClick={this.submitForm}>Add</button>
        <button onClick={this.clearForm}>Clear</button>
      </form>
    )
  }
})


export default FoodsForm;
