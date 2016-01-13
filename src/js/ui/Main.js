var React = require('react');
var TodoItem = require('./TodoItem');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Main = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("TodoStore")],
  getInitialState: function(){
    return { newTodo: '' };
  },
  getStateFromFlux: function(){
    return this.getFlux().store("TodoStore").getState();
  },
  handleChange: function (e) {
    this.setState({ newTodo: e.target.value });
  },
  handleSubmit: function(e){
    e.preventDefault();
    if (this.state.newTodo.trim()) {
      this.getFlux().actions.addTodo(this.state.newTodo);
      this.setState({ newTodo: '' });
    }
  },
  handleClear: function(){
    this.getFlux().actions.clearTodos();
  },
  render: function(){
    return (
      <div className="container" style={{marginTop: 50}}>
        <div className="row well">
          <ul className="col-sm-6">
            {this.state.todos.map(function (todo, i) {
              return <li key={i}><TodoItem todo={todo} /></li>
            })}
          </ul>
          <div className="col-sm-6">
            <form onSubmit={this.handleSubmit} role="form">
              <div className="input-group form-group">
                <input type="text" className="form-control" placeholder="What are you going to do today..." 
                      onChange={this.handleChange} value={this.state.newTodo} require="required"/>
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-success">Add New Todo</button>
                </span>
              </div>
            </form>
            <button type="button" className="btn btn-primary form-group" onClick={this.handleClear}>Clear Completed</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main ;