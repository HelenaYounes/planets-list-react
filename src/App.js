import React from 'react';
import Planet from './Planet.js';


const App = (props) => {
  return (
    <div className="container">
      {
        props.planets.map((planet) => {
          return <Planet key={planet.id} {...planet} />
        })
    }
    </div>
  );
}
// =============================================================
//   WRITE YOUR CODE BELOW
// =============================================================

// 1: Create a 'Planet' component that renders a planet card

// 2: Create a container component that iterates over the planets array
//    and renders a 'Planet' component for each object in the array


// 3: Render the container component to the DOM
export default App;
