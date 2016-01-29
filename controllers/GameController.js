simon = angular.module("simon", [])

simon.controller('GameController', ['$scope','$http',
function($scope, $http) {

$scope.buttonChoices = [1, 2, 3, 4];
$scope.roundArray = [];
$scope.playerArray = [];
$scope.arraysAreEqual = false;

//populates first index of roundArray on init and subsequent iterations on correct answer submission
//(found on $scope.arraysAreEqual boolean)
$scope.buttonSelection = function() {
  var randomSelection = Math.floor((Math.random() * 4) + 1);
  $scope.roundArray.push(randomSelection);
  console.log("Line 16 RoundArray = ", $scope.roundArray);
}

//populates playerArray and calls compareArrays function
$scope.playerSelection = function(selection) {
  $scope.playerArray.push(selection);
  console.log("playerSelection Function playerArray = ", $scope.playerArray);
  console.log("=========================================================");
  if($scope.playerArray.length == $scope.roundArray.length) {
    console.log("SAME LENGTH ");
    console.log("playerSelection Function playerArray = ", $scope.playerArray);
    console.log("playerSelection Function roundArray = ", $scope.roundArray);
    $scope.compareArrays();
  }
}

//compares player and round arrays and sets arraysAreEqual variable (boolean)
$scope.compareArrays = function() {
  console.log("Making it to compareArrays");
  roundArray = $scope.roundArray;
  for(var i = 0; i < roundArray.length; i++) {
    console.log("$scope.playerArray[i] = ",  $scope.playerArray[i] );
    console.log("roundArray[i] = ",  roundArray[i] )

    if($scope.playerArray[i] == roundArray[i]) {
      $scope.arraysAreEqual = true;
    }
    else if($scope.playerArray[i] != roundArray[i]) {
      $scope.arraysAreEqual = false;
      break;
    }
  }
  console.log("line 37, $scope.arraysAreEqual ", $scope.arraysAreEqual);
}

//plays sounds on player button press
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

//TODO Need to make the buttons light up on playerButtonPress and playback
//Iterates through roundArray and plays back populated sounds
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
    else if(passedArray[i] == 4) {
      bottomLeftAudio.play();
    }
    else if(passedArray[i] == 3) {
      bottomRightAudio.play();
    }
    if(++i<l) {
        setTimeout(iterator, 1000);
    }
    })();
}

$scope.gamePlayer = function() {
  var roundArray = $scope.roundArray;
  console.log("line 80 arraysAreEqual ", $scope.arraysAreEqual);
  if($scope.playerArray.length == roundArray.length && $scope.arraysAreEqual) {
    console.log("Correct selection");
    console.log("============================================")
    $scope.buttonSelection();

     setTimeout(function() {
       $scope.playBack(roundArray);
    }, 2000);

    //Reset playerArray
    $scope.playerArray = [];
  }
  else if(!$scope.arraysAreEqual) {
    console.log("Incorrect selection");
    setTimeout(function() {
      $scope.playBack(roundArray);
   }, 2000);
  }
}

}]);
