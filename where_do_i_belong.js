//Return the lowest index at which a value (second argument) should be inserted into an
//array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  
  arr.sort(function(a,b){return a>b;});

  console.log(arr);
  
  for(var i=0;i<arr.length;i++)
    {
		if(num<=arr[i])
			return i;
    }
  
  return i;
}

getIndexToIns([5, 3, 20, 3], 5);
