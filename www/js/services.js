angular.module('starter.services', [])

.factory('Envelopes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var Envelopes = [{
    id: 0,
    name: 'Utilities',
    luxuries: false,
    MaxAmt: 550.00,
    AmtSpent: 0.00,
    transactionC: 0,
    balance: function()
    {
        return (this.MaxAmt - this.AmtSpent);
    },
    analysisByE:
    {
        
    }
  }, {
    id: 1,
    name: 'Groceries',
    luxuries: false,
    MaxAmt: 1000.00,
    AmtSpent: 0.00,
    transactionC: 0,
    balance: function () {
        return (this.MaxAmt - this.AmtSpent);
    },
    analysisByE: function () {
        //lots of data interpretation
        if (this.AmtSpent > this.MaxAmt) {
            console.log("You went over budget in this envelope.");
            console.log("You spent " + (this.AmtSpent - this.MaxAmt) + " more than you should have.");
            console.log("Maybe you can reallocate some money to this envelope.");
        }
        else {
            console.log("Great job! You stayed within budget of this envelope.");
        }
    }
  }, {
    id: 2,
    name: 'Entertainment',
    luxuries: true,
    MaxAmt: 50.00,
    AmtSpent: 0.00,
    transactionC: 0,
    balance: function () {
        return (this.MaxAmt - this.AmtSpent);
    },
    analysisByE: function () {
        //lots of data interpretation
        if (this.AmtSpent > this.MaxAmt) {
            console.log("You went over budget in this envelope.");
            console.log("You spent " + (this.AmtSpent - this.MaxAmt) + " more than you should have.");
            console.log("Maybe you can reallocate some money to this envelope.");
        }
        else {
            console.log("Great job! You stayed within budget of this envelope.");
        }
    }
  }, {
    id: 3,
    name: 'Gas',
    luxuries: false,
    MaxAmt: 65.00,
    AmtSpent: 0.00,
    transactionC: 0,
    balance: function () {
        return (this.MaxAmt - this.AmtSpent);
    },
    analysisByE: function () {
        //lots of data interpretation
        if (this.AmtSpent > this.MaxAmt) {
            console.log("You went over budget in this envelope.");
            console.log("You spent " + (this.AmtSpent - this.MaxAmt) + " more than you should have.");
            console.log("Maybe you can reallocate some money to this envelope.");
        }
        else {
            console.log("Great job! You stayed within budget of this envelope.");
        }
    }
  }, {
    id: 4,
    name: 'Blow Money',
    luxuries: true,
    MaxAmt: 500.00,
    AmtSpent: 0.00,
    transactionC: 0,
    balance: function () {
        return (this.MaxAmt - this.AmtSpent);
    },
    analysisByE: function () {
        //lots of data interpretation
        if (this.AmtSpent > this.MaxAmt) {
            console.log("You went over budget in this envelope.");
            console.log("You spent " + (this.AmtSpent - this.MaxAmt) + " more than you should have.");
            console.log("Maybe you can reallocate some money to this envelope.");
        }
        else {
            console.log("Great job! You stayed within budget of this envelope.");
        }
    }
  }];

  return {
    all: function() {
      return Envelopes;
    },
    remove: function(Envelopes) {
      Envelopes.splice(Envelopes.indexOf(Envelopes), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < Envelopes.length; i++) {
        if (Envelopes[i].id === parseInt(chatId)) {
          return Envelopes[i];
        }
      }
      return null;
    }
  };
});
