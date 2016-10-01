app.controller('parentController', ['$scope', '$timeout', 'genderService', function ($scope, $timeout, genderService) {
	var vm = this;
	
	vm.clickButton = function(){
		genderService.loadItem = true;
	}
	
	vm.clickSecondButton = function(){
		genderService.secondButtonClicked = true;
	}
}]);

app.controller('childController', ['$scope', '$timeout', 'genderService', function ($scope, $timeout, genderService) {
	var vm = this;
	vm.buttonClickedCount = 0;
	vm.secondButtonClickedCount = 0;
	var count = 0 ;
	genderService.register('loadItem', function(){
		vm.buttonClickedCount ++;
	});
	genderService.register('secondButtonClicked', function(){
		vm.secondButtonClickedCount ++;
	});
}]);

app.controller('watchController', ['$scope', '$timeout', 'genderService', function ($scope, $timeout, genderService) {
	var vm = this;
	vm.buttonClickedCount = 0;
	vm.secondButtonClickedCount = 0;
	var count = 0 ;
	genderService.register('loadItem', function(){
		vm.buttonClickedCount ++;
	});
	genderService.register('secondButtonClicked', function(){
		vm.secondButtonClickedCount ++;
	});
}]);
