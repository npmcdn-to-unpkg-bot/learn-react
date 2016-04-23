"use strict";

var Timer = React.createClass({
  displayName: "Timer",


  getInitialState: function getInitialState() {

    return {
      time: null,
      interval: null
    };
  },

  startTimer: function startTimer(time) {

    var _this = this;
    clearInterval(this.state.interval);

    var interval = setInterval(function () {
      var tl = _this.state.time - 1;
      if (tl === 0) {
        clearInterval(interval);
      }

      _this.setState({ time: tl });
    }, 1000);

    return this.setState({
      time: time,
      interval: interval
    });
  },

  render: function render() {

    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        "Timer"
      ),
      React.createElement(Button, { time: "5", startTimer: this.startTimer }),
      React.createElement(Button, { time: "10", startTimer: this.startTimer }),
      React.createElement(Button, { time: "15", startTimer: this.startTimer }),
      React.createElement(Time, { time: this.state.time })
    );
  }
});

var Button = React.createClass({
  displayName: "Button",


  startTimer: function startTimer() {
    return this.props.startTimer(this.props.time);
  },

  render: function render() {

    return React.createElement(
      "button",
      { onClick: this.startTimer },
      this.props.time,
      " seconds"
    );
  }
});

var Time = React.createClass({
  displayName: "Time",


  render: function render() {

    if (this.props.time === null) {
      return React.createElement("div", null);
    }

    return React.createElement(
      "h1",
      null,
      this.props.time
    );
  }
});

ReactDOM.render(React.createElement(Timer, null), document.getElementById('timer'));
