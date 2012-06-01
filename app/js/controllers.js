'use strict';

/* Controllers */


function aesCtrl($scope,WordService) {

  var passPhraseWordCount = 18;

  $scope.message = '';
  $scope.cypher = '';
  $scope.cypherString = '';
  $scope.passphrase = '';
  $scope.feedBack = '';



  $scope.encrypt = function () {

    if ($scope.message != '' && $scope.passphrase != '' ) {

      $scope.cypher = CryptoJS.AES.encrypt($scope.message, $scope.passphrase);

      $scope.cypherString = String($scope.cypher);

      $scope.message = '';

      $scope.feedBack = 'You Message was successfully encrypted.';

    } else {

      $scope.feedBack = 'Message and Pass phrase are required';

    }
    
  }


  $scope.decrypt = function () {

    
    if ($scope.cypher == '' | $scope.passphrase == '' ) {

      $scope.feedBack = 'Cypher and Pass phrase are required';

    } else {

      $scope.message = CryptoJS.AES.decrypt($scope.cypher, $scope.passphrase).toString(CryptoJS.enc.Utf8);

      if ($scope.message == '') {

        $scope.feedBack = 'Cypher and Key do not match';

      } else {

        $scope.cypherString = '';

        $scope.cypher = '';

        $scope.feedBack = 'Your Cypher was successfully decrypted.';

      }

    }

  }


  $scope.newPassPhrase = function () {

    $scope.passphrase = WordService.getWords(passPhraseWordCount);
    
  }

  $scope.clear = function () {

    $scope.message = '';
    $scope.cypher = '';
    $scope.cypherString = '';
    $scope.passphrase = '';
    $scope.feedBack = '';
    
  }

}





function navigationCtrl($scope, $location) {

  //required to high light the active navigational point
  $scope.location = $location;

}

function aboutCtrl() {

}

function phrasesCtrl($scope,WordService) {

  $scope.wordCount = 18;

  $scope.getRandomWords = function () {

    $scope.words = WordService.getWords($scope.wordCount);
    
  }

}
