/** McFly */
var React = require('react');
var McFly = require('mcfly');
var Flux = new McFly();

/** Store */

var _todos = [];

function addTodo(text) {
  _todos.push(text);
}

var TodoStore = Flux.createStore({
  getTodos: function(){
    return _todos;
  }
}, function(payload){
  if (payload.actionType === 'ADD_TODO') {
    addTodo(payload.text);
    TodoStore.emitChange();
  }
});

/** Actions */

var TodoActions = Flux.createActions({
  addTodo: function(text) {
    return {
      actionType: 'ADD_TODO',
      text: text
    }
  }
});

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

React.render(<TodosController />, document.body);
