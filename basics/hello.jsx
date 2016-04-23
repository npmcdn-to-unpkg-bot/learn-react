const ClickCounterButton = React.createClass({
  render: function() {
    return (
      <button onClick={this.props.clickHandler}>Don't click {this.props.times} times!</button>
    );
  }
});

const HelloWorld = React.createClass({

  getInitialState: function() {

    var _this = this;
    setInterval(() => {
      _this.setState({ a: Math.random() });
    }, 300);

    return { a: 0, count: 0 };
  },

  getName: function() {
    return 'aoi';
  },

  click: function() {
    this.setState({ count: this.state.count + 1 });
    if(this.state.count >= 2) {
      alert('bomb');
      this.setState({count: 0});
    }
  },

  render: function() {

    return (
      <div>
        <h1>hello, {this.getName()}.</h1>
        <p>random number: {this.state.a}</p>
        <br/>
        <p>count: {this.state.count}</p>
        <ClickCounterButton times={3} clickHandler={this.click}/>
      </div>
    );
  }
});

ReactDOM.render(<HelloWorld/>, document.getElementById('example'));
