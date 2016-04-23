const Menu = React.createClass({

  getInitialState: function() {
    return { selectedItemIndex: 0 };
  },

  clicked: function(index) {
    this.setState({selectedItemIndex: index});
  },

  render: function() {

    let _this = this;

    return(
      <div>
        <ul className="nav nav-pills">
          {this.props.items.map((item, index) => {
            var className = '';

            if(_this.state.selectedItemIndex == index) {
              className = 'active';
            }

            return (
              <li role="presentation"
                  key={index}
                  className={className}
                  onClick={_this.clicked.bind(_this, index)}>
                <a href="#">{item}</a>
              </li>
            )
          })}
        </ul>

        <p>Selected: {this.props.items[this.state.selectedItemIndex]}</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Menu items={['Home', 'About', 'Prices', 'Contact']} />,
  document.getElementById('menu')
);
