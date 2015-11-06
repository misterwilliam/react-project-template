/* flow */

var React = require('react');
var ReactDOM = require('react-dom');

class DataStore {
  constructor() {
    this.message = "message";
  }
};

var Foo = React.createClass({
  render: function(): ?ReactElement {
    return (
      <div>Foo</div>
    )
  }
});

ReactDOM.render(
  <Foo/>,
  document.getElementById('react-container')
);