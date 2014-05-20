
$(document).ready(function(){
  // function(){
// var name = $('#name').val();
// addTodo(name);
// var number = $('#number').val();
// addTodo(number);
// var email = $('#email').val();
// addTodo(email;
// var picture = $('#picture').val();
// addTodo(picture);
// var newContact = "<div><li>" + name + " " + phone + email + picture +"<span class='delete'>Delete?</span></li>";
//     $(newContact).hide().appendTo('div').fadeIn(500);
//     var things = $('#profile_containter div.thing');
//     $(newTodo).appendTo('ul');
//   };
// }

  // $('#input1').keypress(function(e){
  //   if(e.which == 13){
  //     e.preventDefault();
  //     var text = $('#input1').val();
  //       $('#input1').val("");
  //       if ('#input1' == "")  {
  //     $("#input1").show();
  //     $("#input1").focus();
  //     return false;
  //   }
  //     addTodo(text); 
  //     }
  //   });

    $('#name').keypress(function(e){
    if(e.which == 13){
      e.preventDefault();
      var text = $('#name').val();
      if(!text.length)
          alert("Please enter Text")
        $('#name').val("");
      addTodo(text); 
      }
    });   
    $('#number').keypress(function(e){
    if(e.which == 13){
      e.preventDefault();
      var text = $('#number').val();
      if(!text.length)
          alert("Please enter Text")
        $('#number').val("");
      addTodo(text); 
      }
    });
       $('#email').keypress(function(e){
    if(e.which == 13){
      e.preventDefault();
      var text = $('#email').val();
        if(!text.length)
          alert("Please enter Text")
        $('#email').val("");
      addTodo(text); 
      }
    });
        $('#picture').keypress(function(e){
    if(e.which == 13){
      e.preventDefault();
      var text = $('#picture').val();
      if(!text.length)
          alert("Please enter Text")
        $('#picture').val("");
      addTodo(text); 
      }
    });
  ///////////////////////////////////////////////////////////////////////////////

    // var newContact = "<li>" + name + " " + phone + email + image + "<span class='delete'>Delete?</span></li>";
    // $(newContact).hide().appendTo('ul').fadeIn(500)
      var addTodo = function(text){
      var newTodo = "<li>" + text + " " + "<span class= 'delete'>Delete?</span></li>"
        $(newTodo).appendTo('ul');
             };
        $('ul').on('click', 'li' , function(){
      var todo = $(this);
        todo.toggleClass('completed');   
           });
        $('ul').on('click', 'span', function(){
        $(this).parent().fadeOut(500, function(){
        $(this).remove();
          });
        })
        $('#deleteAll').click(function(){
        $('li.completed').fadeOut(500, function(){
        $(this).remove(
        );
      })
    })
});
