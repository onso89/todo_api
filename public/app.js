/*global $ */

$(document).ready(function(){
   $.getJSON("/api/todos")
   .then(showTodos);
   
   $('#todoInput').keypress(function(event){
     if(event.which == 13){
      createTodo();   
     }
   });
   
   $('.list').on('click', 'li', function(){
       updateTodo($(this));
   });
   
   $('.list').on('click', 'span', function(e){
       e.stopPropagation();
       deleteTodo($(this).parent());
   });
   
});

function showTodos(todos) {
    // add todos to page
    todos.forEach(function(todo){
        showTodo(todo);
    });
}

function showTodo(todo){
     var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
     newTodo.data('id', todo._id);
     newTodo.data('completed', todo.completed);
     if(todo.completed){
        newTodo.addClass('done');  
      }
      $(".list").append(newTodo);
}

function createTodo(){
    //send request to creat new todo
    var userInput = $('#todoInput').val();
    $.post("/api/todos", {name: userInput})
    .then(function(newTodo){
       $('#todoInput').val('');
       showTodo(newTodo);
    })
    .catch(function(error){
       console.log(error); 
    });
}


function deleteTodo(todo) {
    console.log("clicked");
    var clickedTodoId = todo.data('id');
    var deletedUrl = "/api/todos/" + clickedTodoId;
    $.ajax({
        method: 'DELETE',
        url: deletedUrl
    })
    .then(function(data){
        todo.remove();
    })
    .catch(function (error) {
        console.log(error);
    });
}

function updateTodo(todo) {
    var updatedTodoUrl = "/api/todos/" + todo.data('id');
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone};
    $.ajax({
        method: 'PUT',
        url: updatedTodoUrl,
        data: updateData,
    })
    .then(function(updatedTodo){
      todo.toggleClass('done');
      todo.data('completed', isDone);
    })
    .catch(function (error) {
        console.log(error);
    });
}



