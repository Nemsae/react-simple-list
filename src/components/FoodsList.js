import React from 'react';

const FoodsList = props => {
  let { foods } = props;

  return (
    <div className="container">
      <h3>Favorite Foods List</h3>
      <ul>
        {foods.map((food, i) => (
          <li key={i}>{food}<button>X</button></li>
        ))}
      </ul>
    </div>

  )
}

export default FoodsList;
