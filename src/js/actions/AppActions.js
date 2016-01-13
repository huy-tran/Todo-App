var AppConstants = require('../constants/AppConstants');

module.exports = {
  addTodo: function (text) {
    this.dispatch(AppConstants.ADD_TODO, {text: text});
  },
  toggleTodo: function (todo) {
    this.dispatch(AppConstants.TOGGLE_TODO, {todo: todo});
  },
  clearTodos: function(){
    this.dispatch(AppConstants.CLEAR_TODOS);
  }
};