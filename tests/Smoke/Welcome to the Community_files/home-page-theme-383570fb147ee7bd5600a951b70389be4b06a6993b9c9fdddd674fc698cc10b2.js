angular.module('HomePageTheme', ['sml.widgets', 'ui.slider', 'colorpicker.module']);

function HomePageTheme($scope, $http, themeUpdateService) {
  $scope.validators = {};

  $scope.init = function (args) {
    themeUpdateService.getHomePageTheme($scope, args.account_id)
  };

  function alertSuccessfullySaved() {
    alertify.log('Changes successfully saved');
  }

  $scope.save = function () {
    if (themeUpdateService.isValid($scope)) {
      themeUpdateService.tryToSaveHomePage($scope, alertSuccessfullySaved)
    }
  };

  $scope.preview = function (mobile, width) {
    if (themeUpdateService.isValid($scope)) {
      themeUpdateService.tryToPreview($scope,mobile, width)
    }
  };

  $scope.getParams = function(home_page_theme){
    return {
      account: {
        home_page_theme_attributes: home_page_theme
      }
    }
  }
}
;
