//Write a function that splits an array (first argument) 
//into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
  
  var rr = [];
  var k=0;
  
  for(var i=0;i<arr.length/size;i++)
    {
      var temp=[];
        for(var j=0;j<size&&k<arr.length;j++)
        {
              temp.push(arr[k]);
              k++;
        }
      rr.push(temp);
    }
  
  arr = rr;
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);