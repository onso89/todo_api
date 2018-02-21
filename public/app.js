/*global $ */

$(document).ready(function(){
   $.getJSON("/api/todos")
   .then(showTodos);
   
   $('#todoInput').keypress(function(event){
     if(event.which == 13){
      createTodo();   
     }
   });
});

function showTodos(todos) {
    // add todos to page
    todos.forEach(function(todo){
        showTodo(todo);
    });
}

function showTodo(todo){
     var newTodo = $('<li class="task">' + todo.name + '</li>');
     if(todo.completed){
        newTodo.addClass('done');  
      }
      $(".list").append(newTodo);
}

function createTodo(){
    //send request to creat new todo
    var userInput = $('#todoInput').val();
    $.post("/api/todos", {name: userInput})
    .then(function(todo){
       $('todoInput').val('');
       showTodo(todo);
    })
    .catch(function(error){
       console.log(error); 
    });
}