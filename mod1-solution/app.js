
(
	function () {

angular.module('LunchCheck', [])

.controller('LunchCheckController', control);
control.$inject = ['$scope'];
function control($scope){
    $scope.list = '';
    $scope.message = '';
    $scope.message2 = '';
  $scope.LunchCheckfunction = function() {

        $scope.message2 = $scope.list;
  		let a=0;
  		let i=0;
  		let first=false;
  		var temp1='';
  		var temp2='';
  	
    $scope.message2.trim();
    while(a<$scope.message2.length){
    if ($scope.message2.charAt(a)==' ') { 
        temp1 = $scope.message2.substring(0,a);
      	temp2 = $scope.message2.substring(a+1);
      	$scope.message2=temp1.trim()+temp2.trim();
      	a--;
      }
      a++;
    }
    a=0;
    temp1='';
    temp2='';
    $scope.message2.trim();

  	while(a<$scope.message2.length){
    if ($scope.message2.charAt(a)==',') {
      	first=true;
  	 while (first==true){ 
  	 	i=a; i++;
      if ($scope.message2.charAt(i)==','){
      	temp1 = $scope.message2.substring(0,i);
      	temp2 = $scope.message2.substring(i+1);
      	$scope.message2=temp1.trim()+temp2.trim();
      }
      else
      {
       	first=false;
       	a++;
      }
     }
    } a++;
   }//while

        $scope.list = $scope.message2;
        $scope.message2 = $scope.list;

  	   if ($scope.list == ''){
  	   	$scope.mytext = {"border-color" : "red"}
  	   	$scope.myfont = {"color" : "red"}
  	   	$scope.message = 'Please enter data first';}
      else if (($scope.list.split(',').length >= 1) && ($scope.list.split(',').length <= 3)){
      	$scope.mytext = {"border-color" : "green"}
      	$scope.myfont = {"color" : "green"}
        $scope.message = 'Enjoy!';
      }
      else if ($scope.list.split(',').length >= 4){
      	$scope.mytext = {"border-color" : "green"}
      	$scope.myfont = {"color" : "green"}
        $scope.message = 'Too much!';
      }
      
  }
 }
}
)()
