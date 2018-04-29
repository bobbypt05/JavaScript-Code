//Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
  
  var arr = str.split(' ');
  
  var maxxi = -10000;
  
  for(var i=0;i<arr.length;i++)
    {
          if(maxxi<arr[i].length)
            maxxi=arr[i].length;
    }
  
  return maxxi;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
