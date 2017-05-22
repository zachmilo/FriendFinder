$(document).ready(function() {

  $("#submit").click(function() {
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

    if(isValid) {

      $.ajax({
        method: "POST",
        url: "/api/friends",
        data: { "name": name, "img":photo, "answers":answers },
        dataType: "json"
      })
      .done(function(result) {
        console.log(result.name);
        $("#namePop").html("Name: "+ result.name);
        $("#photoImg").html("<img src='"+ result.img+ "' alt='Smiley face' height='42' width='42'>");
        $("#popup").modal('show')
      });
    }
  });

  $(".dropdown-menu li").click(function() {
    $(this).parent().siblings().html(this.value+"<span class='caret'></span>");
  });
});
