$(document).ready(function() {

  $("#submit").click(function(){
    var name = $("#name").val();
    var photo = $("#photo").val();
    var isValid = true;
    var answers = [];

    $(".btn-default").each(function(index,val) {
      if($(val).text().trim() === "Select Option"){
        isValid = false;
      }
      else {
        answers.push($(val).text());
      }
    });
    
    if(isValid){
      console.log(answers);
      $.ajax({
        method: "POST",
        url: "/api/friends",
        data: { "name": name, "img":photo, "answers":answers },
        dataType: "json"
      })
      .done(function( data ) {
        console.log(data);
      });
    }
  });

  $(".dropdown-menu li").click(function(e) {
    console.log($(this).parent().siblings().html(this.value+"<span class='caret'></span>"));
  });
})
