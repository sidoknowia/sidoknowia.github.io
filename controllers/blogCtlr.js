sidoknowia.controller('blogCtlr',['$scope' , '$interval', '$location', 'chartService',function($scope , $interval, $location,chartService) {
	//$scope.pageclass = "slide-up";

	$scope.tableCssPlugin = function(){
		$("#mytable").tableCss({
					textColor : '#333',
					thColor    : '#1fa756',
					trOdd	     : 'lightBlue'
				}).hide().fadeIn('slow');
	}

	$scope.tableCssPlugin();



}]);