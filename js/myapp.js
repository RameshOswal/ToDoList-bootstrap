angular.module("myapp",[])
			.controller("mycontroller",function($scope){
				$scope.taskno = 1;
				$scope.myData = {}; 
				$scope.myData.myText = "" ;
				$scope.myData.myText.myDescription = "";
				$scope.myTask = [];
				$scope.myTask.push({taskno :$scope.taskno, todo : "item1", description:"my desc",done:false ,showeditTB:false,showDescription:false});
				$scope.addTask = function (){	
					if($scope.myData.myText == "")
						alert("Plz enter a task to add");
					else	
						$scope.myTask.push({taskno : $scope.taskno, todo: $scope.myData.myText, description: $scope.myData.myDescription ,done:false,showeditTB:false,showDescription:false});
					$scope.taskno++;	
					$scope.myData.myText = "";
					$scope.myData.myDescription = "";
					
				};
				$scope.viewDescription = function (tasknum){	
						$index = 0;
					for(var i= 0;i<$scope.myTask.length;i++){
						if($scope.myTask[i].taskno == tasknum){
							//alert("mila");
							break;
						}//if
						$index++;
					}//foreach
					//show textbox to edit
					//$scope.myTask[$index].showDescription = !$scope.myTask[$index].showDescription;
					return $scope.myTask[$index].showDescription;
					
				};
				$scope.toggleDescription = function (tasknum){	
						$index = 0;
					for(var i= 0;i<$scope.myTask.length;i++){
						if($scope.myTask[i].taskno == tasknum){
							//alert("mila");
							break;
						}//if
						$index++;
					}//foreach
					//show textbox to edit
					$scope.myTask[$index].showDescription = !$scope.myTask[$index].showDescription;
					//return $scope.myTask[$index].showDescription;
					
				};
				$scope.editTask = function(tasknum){
					$index = 0;
					for(var i= 0;i<$scope.myTask.length;i++){
						if($scope.myTask[i].taskno == tasknum){
							//alert("mila");
							break;
						}//if
						$index++;
					}//foreach
					//show textbox to edit
					$scope.myTask[$index].showeditTB = !$scope.myTask[$index].showeditTB;
					
					//alert($index);
					//$scope.myData.myText = $scope.myTask[$index].todo;
					//alert("aya");
					//$scope.myTask.splice($index,1);
				};
				$scope.isDone = function (tasknum){
					$index = 0;
					//alert("aya");
					for(var i= 0;i<$scope.myTask.length;i++){
						if($scope.myTask[i].taskno == tasknum){
							//alert("mila");
							break;
						}//if
						$index++;
					}//foreach
					return $scope.myTask[$index].done ;
					
				};
				$scope.toggle = function (tasknum){
					$index = 0;
					//alert("aya");
					for(var i= 0;i<$scope.myTask.length;i++){
						if($scope.myTask[i].taskno == tasknum){
							//alert("mila");
							break;
						}//if
						$index++;
					}//foreach
					 $scope.myTask[$index].done = !$scope.myTask[$index].done ;
					
				};
				$scope.delTask = function(tasknum){
					$index = 0;
					//alert("aya");
					for(var i= 0;i<$scope.myTask.length;i++){
						if($scope.myTask[i].taskno == tasknum){
							//alert("mila");
							break;
						}//if
						$index++;
					}//foreach
					if( $scope.myTask[$index].done == true)
					 $scope.myTask.splice($index,1);
					else
						alert("First mark as done");
					
				};
				
			}
			);