const Timer = React.createClass({

  getInitialState: function() {

    return {
      time: null,
      interval: null
    }
  },

  startTimer: function(time) {

    var _this = this;
    clearInterval(this.state.interval);

    let interval = setInterval(function() {
      var tl = _this.state.time - 1;
      if(tl === 0) {
        clearInterval(interval);
      }

      _this.setState({ time: tl });
    }, 1000);

    return this.setState({
      time: time,
      interval: interval
    });
  },

  render: function() {

    return (
      <div>
        <h2>Timer</h2>
        <Button time="5" startTimer={this.startTimer}/>
        <Button time="10" startTimer={this.startTimer}/>
        <Button time="15" startTimer={this.startTimer}/>

        <Time time={this.state.time}/>
      </div>
    );
  }
});

const Button = React.createClass({

  startTimer: function() {
    return this.props.startTimer(this.props.time);
  },

  render: function() {

    return (
      <button onClick={this.startTimer}>{this.props.time} seconds</button>
    );
  }
});

const Time = React.createClass({

  render: function() {

    if(this.props.time === null) {
      return <div/>
    }

    return <h1>{this.props.time}</h1>
  }
});

ReactDOM.render(<Timer/>, document.getElementById('timer'));
