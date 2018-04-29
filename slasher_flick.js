
//Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var rr = [];
  
  for(var i=howMany;i<arr.length;i++)
    rr.push(arr[i]);
  
  return rr;
}

slasher([1, 2, 3], 2);
