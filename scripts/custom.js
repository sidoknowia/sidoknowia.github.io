(function($){

	var sidSpace = {

		init : function(page){

			if(page == "index_page"){
				this.updateTime();
				setInterval(this.updateTime,1000);
				this.bindIndexPageEvents();
			} else if (page == "home_page") {

			}
			
		},

		bindIndexPageEvents : function(){
			
			$("#sl_icn").on('mousedown',function(){
				$("#slide_text").css({'opacity' : '0.3'})
			});

			$("#sl_icn").on('mouseup',function(){
				$("#slide_text").css({'opacity' : '1'})
			});

			$( "#slide_icon" ).draggable({
				containment: $('#slide_icon').parent()
			});

			$('#box').droppable({
				accept: "#slide_icon",
				drop: function (event, ui) {
				  window.location.href = 'home.html';
				}
			});


		},

		updateTime : function(){
			var date = new Date();

			var hours = date.getHours();
			if(hours < 10){
				hours = "0"+hours;
			}

			var min	= date.getMinutes();
			if(min < 10){
				min = "0"+min;
			}

			var sec = date.getSeconds();
			if(sec < 10){
				sec = "0"+sec;
			}

			var dd = date.getDate();
		    var mm = date.getMonth()+1; //January is 0!

		    var yyyy = date.getFullYear();
		    if(dd<10){
		        dd='0'+dd
		    } 
		    if(mm<10){
		        mm='0'+mm
		    } 
		    var today = dd+'/'+mm+'/'+yyyy+" ";

			var time = today + hours + ":" +min + ":" + sec;

			document.getElementById('current_time').innerHTML = time;
		}
	};

	window.sidSpace = sidSpace;
	
})(jQuery);