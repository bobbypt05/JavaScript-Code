//Return an array consisting of the largest number from each provided sub-array. 

function largestOfFour(arr) {
  
  var r = [];
  
  for(var i=0;i<arr.length;i++)
    {
      var maxi = -100000;
      for(j=0;j<arr[i].length;j++)
        {
            if(arr[i][j]>maxi)
              maxi=arr[i][j];
        }
      r.push(maxi);
    }
  
  
  return r;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
