sidoknowia.directive('spDraggable', ['$document','$location' ,function($document , $location) {
	return {
    link: function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0;

      var startFixedXPos = element.position();
      var dropXpos = jQuery("#"+attr.drop).position();

      console.log(startFixedXPos);
      console.log(element.offset());

      console.log(dropXpos);
      console.log(jQuery("#"+attr.drop).offset());

      element.css({
       position: 'relative',
       //border: '1px solid red',
      // backgroundColor: 'lightgrey',
       cursor: 'pointer'
      });

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.pageX - x;
        //console.log("startX" + startX);
        //startY = event.pageY - y;

        

        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        //y = event.pageY - startY;
        x = event.pageX - startX;
        console.log("X" + x);
        if(x < 0){
          return;
        }
        if(x > 195){
          $location.path('/r');
          return;
        }

        element.css({
          //top: y + 'px',
          left:  x + 'px'
        });

      }

      function mouseup() {

        if(x > 0 && x < 195){
          x = 0;
          element.css({
            left:  x + 'px'
          });
        }

        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  };
}]);