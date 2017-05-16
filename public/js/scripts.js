var app = angular.module('myApp', []);

var pageController = app.controller('pageController', function($scope) {
   $scope.showModal = false;

    $scope.doShowModal = function(doShow) {
        $scope.showModal = doShow;
    }

    $scope.$on('showModal', function() {
    	$scope.doShowModal(true);
    });

    $scope.$on('hideModal', function() {
    	$scope.doShowModal(false);
    });

});

(function handleScroll() {
	var nav = document.getElementsByTagName('nav')[0];
	var navHeight = nav.clientHeight;
	var staticHeading = document.getElementById('static-heading');
	window.addEventListener('scroll', fixNav);

	function fixNav() {
		let scroll_y = window.scrollY;
		if(scroll_y >= navHeight) {
			document.body.classList.add('fixed-heading');
		} else {
			document.body.classList.remove('fixed-heading');
		}
	}
})();


