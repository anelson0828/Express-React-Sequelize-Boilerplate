import React from 'react';

export default function Spots(props) {
  return (
    <div className="container">
      <div id="spots" className="row wrap">
        {props.spots.map(spot => {
          return (
            <div
              key={spot.id}
              className="spot"
              onClick={() => {
                props.clickSpot(spot.id);
              }}
            >
              <a>
                <img src={spot.imageUrl} />
                <p>{spot.name}</p>
                <small>{spot.category.name}</small>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
