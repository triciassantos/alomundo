/* nome variavel que criou no app.js e depois o nome da função*/
alo.config(['$routeProvider', function($routeProvider){
		$routeProvider.
		when('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeController',		
	    }).
	    otherwise({
	    	redirectTo: '/'
	    });	       
}]);