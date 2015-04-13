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

      var deferred = $q.defer();

      $q.all([
        githubService.queryUser('kevinmershon'),
        githubService.queryUser('devleorepo'),
        githubService.queryUser('cpascua'),
        githubService.queryUser('bethgrace5'),
        githubService.queryUser('teahermit')
      ]).then(
        function(success) {
          deferred.resolve(success);
        },
        function(error) {
          deferred.reject(error);
        }
      );

      return deferred.promise;
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




