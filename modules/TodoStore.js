var McFly = require('mcfly');
var Flux = new McFly();

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

module.exports = TodoStore;;
