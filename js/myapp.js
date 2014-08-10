angular.module("myapp",[])
			.controller("mycontroller",function($scope){
				$scope.taskno = 1;
				$scope.myData = {}; 
				$scope.myData.myText = "" ;
				$scope.myTask = [];
				$scope.myTask.push({taskno :$scope.taskno, todo : "item1", done:false});
				$scope.addTask = function (){	
					if($scope.myData.myText == "")
						alert("Plz enter a task to add");
					else	
						$scope.myTask.push({taskno : $scope.taskno, todo: $scope.myData.myText, done:false});
					$scope.taskno++;	
					$scope.myData.myText = "";
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
					//alert($index);
					$scope.myData.myText = $scope.myTask[$index].todo;
					alert("aya");
					$scope.myTask.splice($index,1);
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