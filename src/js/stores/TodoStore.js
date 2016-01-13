var Fluxxor = require('fluxxor');
var AppConstants = require('../constants/AppConstants');

var ADD_TODO = AppConstants.ADD_TODO,
    TOGGLE_TODO = AppConstants.TOGGLE_TODO,
    CLEAR_TODOS = AppConstants.CLEAR_TODOS;

var TodoStore = Fluxxor.createStore({
  initialize: function(){
    this.todos = [];

    this.bindActions({
      ADD_TODO: 'addTodo',
      TOGGLE_TODO: 'toggleTodo',
      CLEAR_TODOS: 'clearTodos'
    });
  },
  getState: function(){
    return { todos: this.todos };
  },
  addTodo: function (payload) {
    var todo = {
      text: payload.text,
      complete: false
    };
    this.todos.push(todo);
    this.emit('change');
  },
  toggleTodo: function (payload) {
    payload.todo.complete = !payload.todo.complete;
    this.emit('change');
  },
  clearTodos: function() {
    this.todos = this.todos.filter(function (todo) {
      return !todo.complete;
    });
    this.emit('change');
  }
});

module.exports = TodoStore ;