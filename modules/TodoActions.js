
var McFly = require('mcfly');
var Flux = new McFly();

/** Actions */

var TodoActions = Flux.createActions({
  addTodo: function(text) {
    return {
      actionType: 'ADD_TODO',
      text: text
    }
  }
});

module.exports = TodoActions;
