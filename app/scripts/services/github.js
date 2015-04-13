'use strict';

//Github Factory

angular.module('websiteApp').factory('GithubService',
    function (
                $rootScope,
                $http,
                $q
    ){

    var githubService = {};

    //Set up the $http configuration for the github API.
    githubService.setup = function () {
      //For any $http requests that involve github's api.
      $rootScope.githubAPI = 'https://api.github.com';

      //Lock us into the v3 api.
      var githubAPIConfig = {
        'headers': {
          'Accept': 'application/vnd.github.v3+json'
        }
      };

      //Tell angular to always use that.
      $http(githubAPIConfig);
    };

    //Query all users on the team.
    githubService.queryUsers = function () {

      var githubUserInfo = {};

      $q.all([
        githubUserInfo.devin = githubService.queryUser('devleorepo'),
        githubUserInfo.cris = githubService.queryUser('cpascua'),
        githubUserInfo.beth = githubService.queryUser('bethgrace5'),
        githubUserInfo.kevin = githubService.queryUser('kevinmershon'),
        githubUserInfo.aaron = githubService.queryUser('teahermit')
      ]);

      return githubUserInfo;
    };

    //Get the public user info from the github API using $http based on their
    //username.
    githubService.queryUser = function (githubUsername) {

      var deferred = $q.defer();

      $http.get($rootScope.githubAPI + '/users/' + githubUsername).
        success(function(data, status) {
          if(status === 200) {
            deferred.resolve(data);
          }
        }).
        error(function(data, status) {
          deferred.reject(status);
          console.log(data);
        });

      return deferred.promise;
    };

    return githubService;
});




