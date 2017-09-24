app.controller('loginCtrl', ['$scope', '$state', '$cookies', '$cookieStore', '$rootScope', function($scope, $state, $cookies, $cookieStore, $rootScope){
	$scope.login = user => {
		if(user.email == "mbadajena@uniheightsinterio.com" && user.password == "bbb@123"){
			$cookieStore.put('userName', user.email);
			$rootScope.userName = user.email;
			$state.go('dashboard')
		}
	}
}])