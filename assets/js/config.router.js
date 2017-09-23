
App.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
                // For any unmatched url, send to /business
    $urlRouterProvider.otherwise("/")
     
    $stateProvider
        .state('/', {
        	url: '/',
        	templateUrl: 'assets/view/app.html'
        })
    $locationProvider.html5Mode(true);
}]);