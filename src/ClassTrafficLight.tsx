import { Component } from "react";

export class ClassTrafficLight extends Component<{}, TrafficLightState> {
  state = { index: 0 };

  updateIndex = () => {
    const nextIndex = (this.state.index + 1) % 3;
    this.setState({ index: nextIndex });
  }

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle ${this.state.index == 0 ? 'red' : 'black'}`}></div>
          <div className={`circle ${this.state.index == 1 ? 'yellow' : 'black'}`}></div>
          <div className={`circle ${this.state.index == 2 ? 'green' : 'black'}`}></div>
        </div>
        <button className="next-state-button" onClick={this.updateIndex}>Next State</button>
      </div>
    );
  }
}

interface TrafficLightState {
  index: number;
}
