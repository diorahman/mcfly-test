var React = require('react');
var TodoActions = require('./TodoActions');

/** Component */

var Todos = React.createClass({
  addTodo: function(){
    TodoActions.addTodo('test');
  },
  render: function(){
    return (
      <div className="todos_app">
        <ul className="todos">
	  {this.props.todos.map(function(todo, index){
	    return <li key={index}>Todo {todo} {index}</li>
	  })}
	</ul>
	<button onClick={this.addTodo}>Add</button>
      </div>
    );
  }
});

module.exports = Todos;
