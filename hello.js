'use strict';

var HelloWorld = React.createClass({
  displayName: 'HelloWorld',

  render: function render() {
    return React.createElement(
      'h1',
      null,
      'Hello, component!'
    );
  }
});

ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('example'));
