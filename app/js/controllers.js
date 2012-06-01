'use strict';

/* Controllers */


function SymmetricalCtrl($scope) {

  $scope.message = '';
  $scope.cypher = '';
  $scope.cypherString = '';
  $scope.passphrase = '';
  $scope.status = '';
  $scope.interfaceMode = 'encrypt';

  $scope.encrypt = function () {

    if ($scope.message != '' && $scope.passphrase != '' ) {

      $scope.cypher = CryptoJS.AES.encrypt($scope.message, $scope.passphrase);

      $scope.cypherString = String($scope.cypher);

      $scope.message = '';

      $scope.status = 'You Message was successfully encrypted. See Cypher and Pass Phrase below.';

      $scope.interfaceMode = 'decrypt';

    } else {

      $scope.status = 'Message and Pass phrase are required';

    }
    
  }

  $scope.decrypt = function () {

    
    if ($scope.cypher == '' | $scope.passphrase == '' ) {

      $scope.status = 'Cypher and Pass phrase are required';

    } else {

      $scope.message = CryptoJS.AES.decrypt($scope.cypher, $scope.passphrase).toString(CryptoJS.enc.Utf8);

      if ($scope.message == '') {

        $scope.status = 'Cypher and Key do not match';

      } else {

        $scope.cypherString = '';

        $scope.cypher = '';

        $scope.status = 'Your Cypher was successfully decrypted. See message below.'

        $scope.interfaceMode = 'encrypt';


      }

    }

  }

  $scope.clear = function () {

    $scope.message = '';
    $scope.cypher = '';
    $scope.cypherString = '';
    $scope.passphrase = '';
    $scope.status = '';
    
  }

}
