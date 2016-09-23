import React from 'react';

const PlacesList = props => {
  const { places } = props;

  return (
    <div className="container">
      <h3>Places Visited</h3>
      <ul>
        {places.map((place, i) => (
          <li key={i}>{place}</li>
        ))}
      </ul>
    </div>

  )
}

export default PlacesList;
