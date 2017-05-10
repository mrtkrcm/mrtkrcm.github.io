import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerID);
  }

  tick() {
    const jsContainer = document.getElementById("jsContainer");

    jsContainer.innerHTML = `
      <div class="demo">
        Hello JS <br />
        <span>Testing Real-Time render</span>
        <p>${new Date().toLocaleTimeString()}</p>
      </div>
    `;

    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <div id="jsContainer">x</div>
        <hr />
        <div id="reactContainer">
          <div className="demo">
            Hello React <br />
            <span>Testing Real-Time render</span>
            <p>{this.state.date.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    );
  }
}