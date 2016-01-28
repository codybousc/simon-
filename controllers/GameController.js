simon = angular.module("simon", [])

simon.controller('GameController', ['$scope','$http',
function($scope, $http) {

$scope.buttonChoices = [1, 2, 3, 4];
$scope.roundArray = [];
$scope.playerArray = [];
$scope.arraysAreEqual = true;

$scope.buttonSelection = function() {
  var randomSelection = Math.floor((Math.random() * 4) + 1);
  $scope.roundArray.push(randomSelection);
  console.log("RoundArray = ", $scope.roundArray);
}

$scope.playerSelection = function(selection) {
  $scope.playerArray.push(selection);
  console.log("playerArray = ", $scope.playerArray);
}

$scope.compareArrays = function() {
  for(var i = 0; i < roundArray.length; i++) {
    if($scope.playerArray[i] != $scope.roundArray[i]) {
      $scope.arraysAreEqual = false;
      break;
    }
  }
}

$scope.playerButtonPress = function(selection) {
  if(selection == 'topLeft') {
    topLeftAudio.play();
  }
  else if(selection == 'topRight') {
    topRightAudio.play();
  }
  else if(selection == 'bottomLeft') {
    bottomLeftAudio.play();
  }
  else if(selection == 'bottomRight') {
    bottomRightAudio.play();
  }
}

$scope.playBack = function(passedArray) {
  var topLeftAudio = document.getElementById("topLeftAudio");
  var topRightAudio = document.getElementById("topRightAudio");
  var bottomLeftAudio = document.getElementById("bottomLeftAudio");
  var bottomRightAudio = document.getElementById("bottomRightAudio");
  var i = 0, l = passedArray.length;
    (function iterator() {
      if(passedArray[i] == 1) {
        topLeftAudio.play();
      }
      else if(passedArray[i] == 2) {
        topRightAudio.play();
      }
      else if(passedArray[i] == 3) {
        bottomLeftAudio.play();
      }
      else if(passedArray[i] == 4) {
        bottomRightAudio.play();
      }
      if(++i<l) {
          setTimeout(iterator, 1000);
      }
      })();

}

var arr = [1, 2, 3];

$scope.playBack(arr);




}]);
