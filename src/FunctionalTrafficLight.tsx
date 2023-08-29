import { useState } from "react";

export const FunctionalTrafficLight = () => {

  const [index, setIndex] = useState(0);

  const updateIndex = () => {
    setIndex((index + 1) % 3);
  }

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${index == 0 ? 'red' : 'black'}`}></div>
        <div className={`circle ${index == 1 ? 'yellow' : 'black'}`}></div>
        <div className={`circle ${index == 2 ? 'green' : 'black'}`}></div>
      </div>
      <button className="next-state-button" onClick={updateIndex}>Next State</button>
    </div>
  );
};



