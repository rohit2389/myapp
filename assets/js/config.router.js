
App.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
                // For any unmatched url, send to /business
    // $urlRouterProvider.otherwise("/")
     
    $stateProvider
        .state('app', {
        	url: '/',
        	templateUrl: 'assets/view/app.html'
        })
        .state('app.login', {
        	url: '/login',
        	templateUrl: 'assets/view/login.html'
        })
        .state('/dashboard', {
        	url: '/',
        	templateUrl: 'assets/view/dashboard.html'
        })
    $locationProvider.html5Mode(true);
}]);