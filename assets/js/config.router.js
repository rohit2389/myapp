
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
                // For any unmatched url, send to /business
    // $urlRouterProvider.otherwise("/")
     
    $stateProvider
        .state('app', {
        	url: '/',
        	templateUrl: 'assets/view/app.html',
            isLogin: false
        })
        .state('dashboard', {
        	url: '/dashboard',
        	templateUrl: 'assets/view/dashboard.html',
            isLogin: true
        })
        .state('logout', {
            url: '/logout',
            templateUrl: 'assets/view/app.html',
            isLogin: false
        })
    $locationProvider.html5Mode(true);
}]);