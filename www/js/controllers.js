angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, Envelopes) {
    $scope.Envelopes = Envelopes.all();
    $scope.analyzeByE() = function()
         {
            //lots of data interpretation
        if ($scope.Envelopes.AmtSpent > $scope.Envelopes.MaxAmt)
            {
                console.log("You went over budget in this envelope.");
                console.log("You spent " + (this.AmtSpent - this.MaxAmt) + " more than you should have.");
                console.log("Maybe you can reallocate some money to this envelope.");
            }
            else {
                console.log("Great job! You stayed within budget of this envelope.");
            }
        }
})

.controller('ChatsCtrl', function($scope, Envelopes) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
   

    //var transaction = function()
    //{

        //establish newExp variable
        //select appropriate envelope
        //Envelopes.AmtSpent = (Envelopes.AmtSpent)+newExp;
        //Envelopes.transactionC ++;
    //}
    //var income = function()
    //{
        //Envelope.MaxAmt = balance+(portion based on user input) 
    //}
    //var exchange = function()
    //{
        //i keep forgetting how this works
    //}
    var assessSpending = function() 
    {
        //outputs analysis based on user behavior
        //makes suggestions on how to budget and how to stick to it among other things.
        console.log("Happy Spending");
    }//wip

    //use mongo DB to make new instances of Envelope 
    //establish budget will set the max amt with respect to income
  $scope.Envelopes = Envelopes.all();
  $scope.remove = function(chat) {
    Envelopes.remove(chat);
  };
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Envelopes) {
    $scope.chat = Envelopes.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
