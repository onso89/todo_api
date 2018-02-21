/*global $ */

$(document).ready(function(){
   $.getJSON("/api/todos")
   .then(addTodos);
});

function addTodos(todos) {
    // add todos to page
    todos.forEach(function(todo){
      var newTodo = $('<li class="task">' + todo.name + '</li>');
      $(".list").append(newTodo);
    });
}