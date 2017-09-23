
App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
                // For any unmatched url, send to /business
    $urlRouterProvider.otherwise("/")
     
    $stateProvider
        .state('/', {
        	url: '/',
        	templateUrl: 'assets/view/app.html'
        })
}]);