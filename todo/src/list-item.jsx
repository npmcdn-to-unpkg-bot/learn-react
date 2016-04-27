var React = require('react');

var rootUrl = require('./config').firebase_url;

module.exports = React.createClass({

  getInitialState: function() {
    return {
      text: this.props.item.text,
      done: this.props.item.done,
      textChanged: false,
    };
  },

  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);
  },

  handleDoneChange: function(ev) {
    var update = { done: ev.target.checked };
    this.setState(update);
    this.fb.update(update);
  },

  handleDeleteClick: function(ev) {
    this.fb.remove();
  },

  handleChangeText: function(ev) {
    this.setState({ text: ev.target.value, textChanged: true });
  },

  handleUndoClick: function(ev) {
    this.setState({ text: this.props.item.text, textChanged: false });
  },

  handleSaveClick: function(ev) {
    this.fb.update({ text: this.state.text });
    this.setState({ textChanged: false });
  },

  changesButton: function() {

    if(!this.state.textChanged) { return null; }

    return [
      <button className="btn btn-default"
              onClick={this.handleSaveClick}>Save</button>,
      <button className="btn btn-default"
              onClick={this.handleUndoClick}>Undo</button>
    ];
  },

  render: function() {
    return (
      <div className="input-group">
        <span className="input-group-addon">
          <input type="checkbox"
                 checked={this.state.done}
                 onChange={this.handleDoneChange} />
        </span>
        <input type="text"
               className="form-control"
               disabled={this.state.done}
               value={this.state.text}
               onChange={this.handleChangeText} />
        <span className="input-group-btn">
          {this.changesButton()}
          <button className="btn btn-default"
                  onClick={this.handleDeleteClick}>
            Delete
          </button>
        </span>
      </div>
    );
  }
});
