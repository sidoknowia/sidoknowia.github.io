(function($){

  var offTop = $("#box").offset().top;
  var offLeft = $("#box").offset().left;
  var $draggable = $("#slide_icon");
  var $container = $("#box");
  var top = offTop + $container.height() - $draggable.height();
  var bottom = top + $draggable.height()  - $container.height();
  var left = offLeft + $container.width() - $draggable.width();
  var right = left + $draggable.width() - $container.width();
  console.log(offTop + " " + offLeft);
  console.log(top + " " + bottom + " " + left + " " + right);

  $( "#slide_icon" ).draggable({
    containment: $('#slide_icon').parent()
  });

  $('#box').droppable({
    accept: "#slide_icon",
    drop: function (event, ui) {
      alert("you can redirect!");
    }
  });

})(jQuery);
