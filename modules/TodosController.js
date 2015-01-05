var React = require('react');
var Todos = require('./Todos');
var TodoStore = require('./TodoStore');

function getState(){
  return {
    todos: TodoStore.getTodos()
  }
}

/** Controller view */

var TodosController = React.createClass({
  mixins: [TodoStore.mixin],
  getInitialState: function(){
    return getState();
  },
  onChange: function(){
    this.setState(getState());
  },
  render: function(){
    return <Todos todos={this.state.todos} />;
  }
});

module.exports = TodosController;
