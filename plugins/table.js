/**
 * jQuery Plugin to change css of elements in a html table
 * @author - Siddharth Patel ( 758174 )
 * Description - This plugin enables user to control following properties of html table : 
 * 			text-color , 
 * 			background-color , 
 * 			background-color of <th> ,
 * 			provide alternative colors to <tr>
 * 
 * This is a simple example to learn to create plugin and follow best practices while doing so.
 */


// the semi-colon before the function invocation is a safety 
// net against concatenated scripts and/or other plugins 
// that are not closed properly.
;(function (window , document , $ , undefined){
	    
    // window and document are passed through as local 
    // variables rather than as globals, because this (slightly) 
    // quickens the resolution process and can be more 
    // efficiently minified (especially when both are 
    // regularly referenced in your plugin).
	
	
	// This lets jQuery know that you're extending its methods.
	// Creating your own function.
	$.fn.tableCss = function( options ){
		
		
		// Create the defaults once
		var defaults = { 
				textColor 	: 'black',    	// text color inside table
				bkgdColor  	: '#f1f1f1',   	// background color of the table
				thColor 	: '#428bca',    // background color of <th> inside table
				trEven 		: 'white',		// background color of the <tr> with even index table
				trOdd  		: 'silver'		// background color of the <tr> with odd index table
		} ;
		
		
		// jQuery has an extend method that merges the 
        // contents of two or more objects, storing the 
        // result in the first object. The first object 
        // is generally empty because we don't want to alter 
        // the default options for future instances of the plugin
	
		var settings = $.extend({},defaults,options);
		
		
		// Your typical jQuery object will contain references 
		// to any number of DOM elements, and that's why jQuery objects 
		// are often referred to as collections. If you want to do 
		// any manipulating with specific elements 
		// (e.g. getting a data attribute, calculating specific positions) 
		// then you need to use .each() to loop through the elements
		
		this.each(function(){
			// Caching $(this), which will improve performance (slightly).
			// $ sign is added before variable just as reminder that
			// we are working with jQuery Object
			var $this = $(this);
			
			// Adding css to the <table> element that will call this function
			$this.css({
				color 		: settings.textColor,
				background  : settings.bkgdColor
			});
			
			var $th = $this.contents().find('th'),
				$tre = $this.contents().find('tr:even'),
				$tro = $this.contents().find('tr:odd');
				
			$th.css("background" , settings.thColor);
			$tre.css("background" , settings.trEven);
			$tro.css("background" , settings.trOdd);
			
		});
			 
	   // Don't break the chain. we should remember to return the 
	   // jQuery object so other methods can be chained.
		return this;
	};
	
})(window , document, jQuery);