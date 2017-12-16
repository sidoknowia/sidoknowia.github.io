sidoknowia.controller('resumeCtlr',['$scope' , '$interval', '$location', 'chartService',function($scope , $interval, $location,chartService) {
	//$scope.pageclass = "slide-up";

	chartService.generateCharts();

}]);