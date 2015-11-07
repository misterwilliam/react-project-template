/* @flow */

var React = require('react');
var ReactDOM = require('react-dom');

var DataStore = require('./dataStore');

var data = new DataStore();

var Foo = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.message}
      </div>
    )
  }
});

ReactDOM.render(
  <Foo message={"hi"} />,
  document.getElementById('react-container')
);