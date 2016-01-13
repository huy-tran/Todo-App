var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

var TodoItem = React.createClass({
  mixins: [FluxMixin],
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },
  handleClick: function(){
    this.getFlux().actions.toggleTodo(this.props.todo);
  },
  render: function(){
    var style = {
      textDecoration: this.props.todo.complete ? 'line-through' : ''
    };
    return (        
      <span style={style} onClick={this.handleClick}>{this.props.todo.text}</span>
    );
  }
});

module.exports = TodoItem ;