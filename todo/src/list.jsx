var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({

  renderList: function() {

    if(this.props.items && Object.keys(this.props.items).length === 0) {
      return <h4>Add new tasks!</h4>;
    } else {
      var children = [];
      for(var key in this.props.items) {
        var item = this.props.items[key];
        item.key = key;

        if(item.hasOwnProperty('key')) {
          children.push(
            <ListItem item={item} key={key} />
          );
        }
      }

      return children;
    }
  },

  render: function() {
    console.log(this.props.items);
    return <div>
      {this.renderList()}
    </div>
  }
})
